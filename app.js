const koa = require('koa')
const socket = require('socket.io')

const view = require('koa-views')           //  视图
const router = require('koa-router')()      //  路由

var app = new koa()

// app.use(async ctx => {
//     ctx.body = 'Hello new World~~~';
// });

app.use(view(__dirname + '/view'), {
    extension: 'html'
})

// 路由
const index = require('./routes/index')

router.use('/', index.routes(), index.allowedMethods());

app.use(router.routes(), router.allowedMethods());

app.listen(3000);

// 多开 页面
// for (var i = 0; i < 50; i++) {
//     let c = require('child_process');
//     c.exec('start http://127.0.0.1:3000/');
// }
