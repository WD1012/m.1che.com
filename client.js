const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const proxy = require('http-proxy-middleware');
const cookieParser = require('cookie-parser');
const port = parseInt(process.env.PORT, 10) || 10090;
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'public')));


app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.use(cookieParser());
app.use(['/v1','/v2','/getSignPackage'], proxy({target: 'http://localhost:10091', changeOrigin: true}));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`)
})

