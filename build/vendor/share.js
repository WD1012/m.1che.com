
/*
        * 注意：
        * 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入"公众号设置"的"功能设置"里填写"JS接口安全域名"。
        * 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
        * 3. 常见问题及完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
        *
        * 开发中遇到问题详见文档"附录5-常见错误及解决办法"解决，如仍未能解决可通过以下渠道反馈：
        * 邮箱地址：weixin-open@qq.com
        * 邮件主题：【微信JS-SDK反馈】具体问题
        * 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
        */
var shareDomain = location.href.split('#')[0];
var postDomain =encodeURIComponent(shareDomain);
var domain=location.protocol+'//'+location.host;
var imgUrl=domain+'/sharelogo.jpg';
axios({
    method: "get",
    url: '/getSignPackage?url='+postDomain
})
    .then(function (response) {
        var signPackage=response.data;
        wx.config({
            debug: false,
            appId: signPackage["appId"],
            timestamp: signPackage["timestamp"],
            nonceStr: signPackage["nonceStr"],
            signature: signPackage["signature"],
            jsApiList: [
                // 所有要调用的 API 都要加到这个列表中
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
            ]
        });

        var dataForWeixin = {
            title: '第1车贷',
            desc: '上海锋之行汽车金融信息服务有限公司(简称:第1车贷)是中国第一家专业汽车互联网金融服务集团,隶属于香港上市公司“中国信贷(HK08207)“,公司业务涉及汽车金融、融资...',
            imgUrl: imgUrl,
            link: shareDomain
        };

        wx.ready(function () {
            // 在这里调用 API
            wx.onMenuShareTimeline({
                title: dataForWeixin.title, // 分享标题
                desc: dataForWeixin.desc, // 分享描述
                link: dataForWeixin.link, // 分享链接
                imgUrl: dataForWeixin.imgUrl, // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
            wx.onMenuShareAppMessage({
                title: dataForWeixin.title, // 分享标题
                desc: dataForWeixin.desc, // 分享描述
                link: dataForWeixin.link, // 分享链接
                imgUrl: dataForWeixin.imgUrl, // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
            wx.onMenuShareQQ({
                title: dataForWeixin.title, // 分享标题
                desc: dataForWeixin.desc, // 分享描述
                link: dataForWeixin.link, // 分享链接
                imgUrl: dataForWeixin.imgUrl, // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
            wx.onMenuShareWeibo({
                title: dataForWeixin.title, // 分享标题
                desc: dataForWeixin.desc, // 分享描述
                link: dataForWeixin.link, // 分享链接
                imgUrl: dataForWeixin.imgUrl, // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
        })
        wx.error(function(res){
            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
            console.log(res)
        });
    })
    .catch(function (error) {
        console.log(error);
    });

// var shareDomain = document.location.protocol+"//"+window.location.host;
//
// linko = shareDomain+'/platform/car_detail.html?id=';
// linkUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=<?=$fuwuhao['appid']?>&redirect_uri='+encodeURIComponent(linko)+'&response_type=code&scope=snsapi_base&state=STATE&connect_redirect=1#wechat_redirect';
//自定义内容

