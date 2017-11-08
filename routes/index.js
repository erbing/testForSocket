const router = require('koa-router')()

router.get('/', async (ctx, next) => {
    ctx.title = 'Testing for socket'
})

module.exports = router