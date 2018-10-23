const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const axios =require('axios');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const qs=require('qs');
const sign=require('./utils/sign');
const cache = require('memory-cache');
const port = 10091;

const env=process.env.NODE_ENV
// let env='development';
console.log('env: '+env);
switch (env) {
    case 'development':
        global.API_DOMAIN='http://dev.dycd.com'; //车贷api
        global.MC_DOMAIN='https://qaopen.dycd.com';  //梦享车api
        break;
    case 'testing':
        global.API_DOMAIN='http://chedai.test.dycd.com';
        global.MC_DOMAIN='https://qaopen.dycd.com';
        break;
    case 'production':
        global.API_DOMAIN='http://chedai.dycd.com';
        global.MC_DOMAIN='https://open.dycd.com';
        break;
    default:
        console.log('来自index的中间件 未知的NODE_ENV' + NODE_ENV);
        break;
}
const app = express();


app.use(express.static(path.join(__dirname, 'build')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    // res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use('/v2',(req,res)=>{
    console.log('FROM index NODE_ENV ====' + env);
    console.log('API_DOMAIN ==== '+API_DOMAIN );
    console.log('MC_DOMAIN ==== '+MC_DOMAIN );
    let url = req.originalUrl.substr(3);
    console.log(req.method,url,req.body)
    if(req.method==='GET'){
        console.log('this get');
        axios({
            method:"get",
            url:MC_DOMAIN + url
        })       .then(function (response) {
            res.json(response.data)
        })
            .catch(function (error) {
                console.log(error)
            });
    }else if(req.method==='POST'){
        console.log('this is post')
        let postdata=req.body;
        console.log(postdata)
        axios({
            method:"post",
            url:MC_DOMAIN + url,
            data:qs.stringify(postdata)
        })
            .then(function (response) {
                res.json(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

})
app.use('/v1',(req,res)=>{
    console.log('FROM index NODE_ENV ====' + env);
    console.log('API_DOMAIN ==== '+API_DOMAIN );
    console.log('MC_DOMAIN ==== '+MC_DOMAIN );
    let url = req.originalUrl.substr(3);
    console.log('------------'+req.method,url)
    if(req.method==='GET'){
        console.log('this get');
        axios({
            method:"get",
            url:API_DOMAIN + url
        })       .then(function (response) {
            res.json(response.data)
        })
            .catch(function (error) {
                console.log(error)
            });
    }else if(req.method==='POST'){
        console.log('this is post')
        let postdata=req.body;
        console.log(postdata)
        axios({
            method:"post",
            url:API_DOMAIN + url,
            data:postdata
        })
            .then(function (response) {
                res.json(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
})
console.log(cache.get('abc'));
cache.put('abc','中国',10000000)
console.log(cache.get('abc'));
app.get('/getSignPackage',(req,res)=>{
    const appid='wx0849183ff7af8e12',
        secret='b8b3597922fc1733fc010527c29a7390',
        // const appid='wx9468ceb93670d031', 测试号
        //     secret='cd299459e8f3327a5d8a4caa08b12a7d',
        expires=7200,
        url = req.query.url;
    console.log('-----------------------'+url)

    console.log(cache.get('access_token'),cache.get('ticket'))
    if(cache.get('access_token')&&cache.get('ticket')){
        console.log('from cache');
        let ticket=cache.get('ticket');
        let signPackage=sign(ticket, url);
        signPackage.appId=appid;
        console.log('cache+++++++access-token is ===='+cache.get('access_token'))
        console.log('cache+++++++ticket is ===='+ticket)
        res.json(signPackage)
    }else{
        axios({
            method: "get",
            url: `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${secret}`
        })
            .then(function (response) {
                let access_token=response.data.access_token;
                console.log('new cache------access-token is ===='+access_token)
                axios({
                    method: "get",
                    url: `https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=${access_token}&type=jsapi`
                })
                    .then(function (response) {
                        let ticket=response.data.ticket;
                        console.log('new------ticket is ===='+ticket)
                        cache.put('access_token',access_token,7000000);
                        cache.put('ticket',ticket,7000000);
                        let signPackage=sign(ticket, url);
                        signPackage.appId=appid;
                        console.log(signPackage);
                        res.json(signPackage)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

});
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`)
})

