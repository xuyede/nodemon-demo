const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.body = 'xuyede3';
})

app.listen(3000, () => {
  console.log(`服务器启动在 -> http://127.0.0.1:3000`)
})