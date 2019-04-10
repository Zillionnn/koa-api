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

app.use(async (ctx,next) => {
    console.log(new Date())
    next()
  });
  
  router.get('/api/test', showTest);

  async function showTest(ctx,next){
    // await next();
    ctx.response.body = {"ok": "12425"};
  }

app.use(router.routes());
// listen

if (!module.parent) app.listen(3000);