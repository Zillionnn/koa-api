const logger = require('koa-logger');
const router = require('koa-router')();
const koaBody = require('koa-body');

const Koa = require('koa');
const app = module.exports = new Koa();

// "database"

const posts = [];

// middleware

app.use(logger());

// app.use(render);

app.use(koaBody());

// route definitions

// router.get('/', list)
//   .get('/post/new', add)
//   .get('/post/:id', show)
//   .post('/post', create);
function res(code,message,data){
   return {
    code: code,
    message: message,
    data: null || data
  }
}
app.use(async (ctx,next) => {
    console.log(new Date())
    next()
  });
  
  router.get('/api/test', showTest)
  .post(`/api/post`, add);

  async function showTest(ctx,next){
    // await next();
    ctx.response.body = {"ok": "12425"};
  }
  async function add (ctx,next) {
    console.log(ctx.request.body)
    ctx.response.body = res(0,'success')
  }

app.use(router.routes());
// listen

if (!module.parent) app.listen(3000);