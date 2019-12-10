const logger = require('koa-logger');
const router = require('koa-router')();
const koaBody = require('koa-body');
const cors = require('koa-cors');
const Koa = require('koa');
const app = module.exports = new Koa();

const request = require('request')
// "database"

const posts = [];

// middleware

app.use(logger());
app.use(cors())

// app.use(render);

app.use(koaBody());

// route definitions

// router.get('/', list)
//   .get('/post/new', add)
//   .get('/post/:id', show)
//   .post('/post', create);
function res(code, message, data) {
  return {
    code: code,
    message: message,
    data: null || data
  }
}
app.use(async (ctx, next) => {
  console.log(new Date())
  next()
});

router.get('/api/test', showTest)
  .get(`/api/bing_daily_img`, getBingImg)
  .get(`/usr/api/v1/user/subs/list`, a1)
  .post(`/usr/api/v1/user/login`, a2)
  ;
async function getBingImg(ctx) {
  request('http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', typeof body); // Print the HTML for the Google homepage.
    let r = JSON.parse(body)
    console.log(`https://bing.com${r.images[0].url}`)
    ctx.response.body = {
      code: 0,
      message: 'success',
      data: {
        url: `https://bing.com${r.images[0].url}`
      }
    }
  });
}
async function showTest(ctx, next) {
  // await next();
  console.log(ctx.request.query)
  ctx.response.body = { "ok": "12425" };
}

async function a1(ctx, next) {
  console.log(ctx.request.query)
  ctx.response.body = {
    code: 0,

    message: '',
    data: [
      {
        psid: '111111fdsv',
        charge_name: '负责人名称',
        role_name: '角色名称',
        role: 12
      }
    ]

  }
}

async function a2(ctx,next){
  console.log(ctx)
  ctx.response.body={
    code:0,
    message:'',
    data:{
        access_token:'mmmmmmmmmmmmmmmm',
      user_id:'d',
      name:'超管',
      role:10,
      status:1,
      role_id:'234',
      roleName:'34'
    }
    
  }
}




app.use(router.routes());
// listen

if (!module.parent) app.listen(3000);