const path = require('path')
const Koa = require('koa')

const app = new Koa()

const { MONGO_SERVICE_HOST, MONGO_SERVICE_PORT, REDIS_SERVICE_HOST, YZL_API_TEST_WEB_PORT } = process.env

let PORT, config

try {
    config = require(path.join(process.cwd(), 'config.json'))
} catch (error) {
    config = {}
}

PORT = Number(config.PORT || YZL_API_TEST_WEB_PORT || 5000)

app.use(async ctx => {
    ctx.body = {
        code: 0,
        msg: 'ok',
        result: {
            MONGO_SERVICE_HOST,
            MONGO_SERVICE_PORT,
            REDIS_SERVICE_HOST,
            v: '0.0.1'
        }
    }
})

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})