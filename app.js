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
  .get(`/usr/api/v1/store/subs/list`, a3)
  .post(`/usr/api/v1/user/login`, a2)
  .post(`/dev/api/v1/devices/alarm/list/yum`, a4)
  .get(`/usr/api/v1/yum-store/list`, a5)
  .get(`/dev/api/devices/branch/list`, a6)
  .get(`/dev/api/devices/category/list`, a7)
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

async function a2(ctx, next) {
  console.log(ctx)
  ctx.response.body = {
    code: 0,
    message: '',
    data: {
      access_token: 'mmmmmmmmmmmmmmmm',
      user_id: 'd',
      name: '超管',
      role: 10,
      status: 1,
      role_id: '234',
      roleName: '34'
    }

  }
}

async function a3(ctx, next) {
  console.log(ctx.request.query)
  ctx.response.body = {
    code: 0,

    message: '',
    data: [
      {
        psid: '?psid',
        charge_name: '?chargname',
        role_name: 'role name',
        role: 20,
        stores: [
          {
            store_id: 'xxxx',
            name: '北京'
          },
          {
            store_id: 'xxxxD',
            name: '南京'
          },
          {
            store_id: 'xfxxxD',
            name: '常山'
          }
        ]

      }
    ]

  }
}

async function a4(ctx, next) {
  console.log(ctx.request.query)
  let data = []
  for (let i = 0; i < 30; i++) {
    data.push(
      {
        alarm_id: '?alrmid',
        branch_name: '?',
        alias: 'alias',
        attime: '2019.2.3',
        alarm_type: 1,
        except_level: 6,
        m_category: '厨房设备',
        except_reason: '告警的原因',
        status: 0,
        work_order_3rd: '第三方工单',
        repair_status: 1
      }
    )
  }
  ctx.response.body = {
    code: 0,
    message: 'suc',
    total_page: 100,
    total: 100,
    data: data

  }
}

async function a5(ctx, next) {
  console.log(ctx.request.query)
  let data = []
  ctx.response.body = {
    code: 0,
    message: 'suc',
    total_page: 1,
    total: 2,
    data: [
      {
        store_id: '123',
        name: '北京',
        location: '',
        longitude: 116.417492,
        latitude: 39.908515,
        rgm: '巴拉巴拉',
        banking_hour: 4,
        activated: 1
      },
      {
        store_id: '123',
        name: '???',
        location: '',
        longitude: 114.159224,
        latitude: 31.221481,
        rgm: '巴拉巴拉',
        banking_hour: 4,
        activated: 1
      }
    ]

  }
}

async function a6(ctx, next) {
  console.log(ctx.request.query)
  let data = []
  let pos = { top: "10%", left: "20%" }

  ctx.response.body = {
    code: 0,
    message: 'suc',
    total_page: 1,
    total: 2,
    data: [
      {
        dev_id: '123',
        serial: '123',
        device_type: '2008',
        alias: '烤箱',
        branch_id: '?',
        branch_name: '??',
        branch_number: '?',
        building: 4,
        floor: 1,
        room: 1,
        secret_key: '',
        sketchs: [],
        mf_name: '3',
        brand_name: 'nike',
        model_name: 'GTA3',
        mtc_name: '4',
        can_delete: 1,
        location: '325',
        observer: '3',
        activated: '',
        enable: 1,
        longitude: 150,
        latitude: 40,
        create_date: '2019.12.10',
        last_update: '',
        asset: '',
        show_tip: '',
        install_layout_pos: JSON.stringify(pos),
        lora_ip: '',
        lora_id: '',
        lora_base_port: '',
        lora_base_num: '',
        mac: '',
        m_catetory: '',
        s_category: ''
      }
    ]

  }
}

async function a7(ctx, next) {
  console.log(ctx.request.query)
  let data = []
  let pos = { top: "56", left: "20" }
  let air = { top: "20", left: "54" }

  ctx.response.body = {
    code: 0,
    message: 'suc',
    total_page: 1,
    total: 2,
    data: [
      {
        dev_id: '123',
        serial: '123',
        device_type: '2002',
        alias: '烤箱',
        branch_id: '?',
        branch_name: '??',
        branch_number: '?',
        status: 0,
        install_layout_pos: JSON.stringify(pos),
        m_catetory: '',
        s_category: '',
      },
      {
        dev_id: 'ad123',
        serial: 'air4',
        device_type: '2009',
        alias: '空调',
        branch_id: '?',
        branch_name: '??',
        branch_number: '?',
        status: 0,
        install_layout_pos: JSON.stringify(air),
        m_catetory: '',
        s_category: '',
      }
    ]

  }
}

app.use(router.routes());
// listen

if (!module.parent) app.listen(3000);