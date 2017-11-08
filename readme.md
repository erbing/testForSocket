### Me课 直播间 socket 压力以及并发测试 

#### 第一步、创建本地 基于 NodeJs 以及 Koa2 的 http 服务

```javascript

    const app = express()

    app.get('/', function(req, res) {
        res.send('hello, everyOne!')
    })

    app.listen(3000, function() {
        console.log('server listening port 3000')
    })

```

    首先，我们需要明确下，我们在本地起这个node 服务主要是用来做什么？

    1) 首要任务是 建立 多个 socket 链接
    2）在这多个 socket 链接 上 emit 'message' 事件
    3）在 链接数量逐步增加的时候 看看链接成功失败率
    4）在 触发 emit 方法的时候 会有多少链接会发送消息失败

#### 第二步、 创建多个 socket 链接

    1） 现在知道的 node 服务的能力，可以在当前浏览器中打开 多个页面
    2） 每一个打开的页面 进行 socket 链接。

```javascript
let c = require('child_process');
c.exec('start http://127.0.0.1:3000/');
```