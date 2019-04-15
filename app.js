const logger = require('koa-logger');
const router = require('koa-router')();
const koaBody = require('koa-body');
const cors = require('koa-cors');
const Koa = require('koa');
const app = module.exports = new Koa();

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
  .post(`/api/post`, add)
  .post(`/api/v1/user/login`, signIn)
  .get(`/api/v1/user/store/list/123`, storeList)
  .get(`/api/v1/user/list`, userList)
  .post(`/api/v2/rfid/import/:storeId/all`, getUploadFIle);

async function showTest(ctx, next) {
  // await next();
  ctx.response.body = { "ok": "12425" };
}
async function add(ctx, next) {
  console.log(ctx.request.body)
  ctx.response.body = res(0, 'success')
}

async function signIn(ctx, next) {
  let data = {
    access_token: 'FAKE_TOKEN',
    user_id: '123',
    psid: '12321',
    account: 'Jack',
    role: 0,
    status: 1
  }
  ctx.response.body = res(0, 'success', data)
}

async function storeList (ctx) {
  let data = [{
    
      name: '门店',
      store_id: 'sz01',
      permi_config:1
  }]
  ctx.response.body = res(0, 'success', data)
}


async function userList (ctx) {
  let data = [{"account":"jojo","psid":" gfdsg","role":1,"status":1,"user_id":"e21a497ce6cf4170a2c7237a04ee3fa4"},{"account":"潘亮","psid":"c376c612dce745a0a6830ee47b175032","role":0,"status":1,"user_id":"1f1e84c8ab1b4e648d0ca4d55efb7ef7"},{"account":"王胤雪","psid":"85abdee4ce9340f0a365b837ca7edfb3","role":2,"status":1,"user_id":"88dda1aa7b314a9a85c010323c98d65d"},{"account":"jojo","psid":"2132132","role":1,"status":0,"user_id":"63db6a69ef894b5da95f6fb4cdd5421f"},{"account":"Micheal","psid":" gfdhgfds","role":2,"status":0,"user_id":"a5b0467a49394fc2a96c7c2b45443dfe"},{"account":"admin","psid":"f2a4032c43b9462abaa08bb055911ad5","role":0,"status":1,"user_id":"7ac2789dbb1d4449860505367e1b52f9"},{"account":"赵维俊","psid":"662b9e164a37454a816ba80280c5d2d0","role":0,"status":1,"user_id":"11835f68cec141e59bba6259a72b6771"},{"account":"徐健","psid":"8318e142a85a4681a7af4b7ec55b77f5","role":0,"status":1,"user_id":"5d87344465cf4d09afd547eb8ef43fae"},{"account":"熊曙辉","psid":"9b6d5302ab4a46bda2c438921a758686","role":0,"status":1,"user_id":"380c3158ad9c4529a2abfba67c0019b3"},{"account":"张天极","psid":"f0e9169c34ca4111b6305b5a7b0a5aae","role":1,"status":1,"user_id":"169ad5f596f04eab965e6d7224656717"}]
  ctx.response.body = res(0, 'success', data)
}
async function getUploadFIle(ctx){
  let  id = ctx.params.storeId;
  console.log(id)
  ctx.body = "your id is:"+id+", thank you !";

  console.log(ctx.params)
}

app.use(router.routes());
// listen

if (!module.parent) app.listen(8480);