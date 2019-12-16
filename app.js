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
  .post(`/dev/api/v1/device/statistic/alarm/level/overall`, a8)
  .post(`/dev/api/devices/repair/list`, a9)
  .get(`/dev/api/v1/devices/inspect`, a10)
  .get(`/usr/api/v1/store/activated/total`, a11)
  .post(`/core/api/v1/devicedata/list`, a12)
  .post(`/iot-broker/api/v1/iot/device/dashboard/query_device_day`, a14)
  .post(`/iot-broker/api/v1/iot/power/serial/hour/query_day`, a15)
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
        except_level: 4,
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
        device_type: '2001',
        alias: '炸锅',
        branch_id: '?',
        branch_name: '??',
        branch_number: '?',
        status: 0,
        install_layout_pos: "{\"top\":\"26\",\"left\":\"59\"}",
        m_catetory: '厨房设备',
        s_category: '',
      },
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
        m_catetory: '厨房设备',
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
        m_catetory: '设施设备',
        s_category: '',
      }
    ]

  }
}

async function a8(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: 'suc',
    total_page: 1,
    total: 2,
    data: {
      total: 10,
      processed_total: 3,
      processing_total: 4,
      unprocessed_total: 3
    }

  }
}

async function a9(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: 'suc',
    unreport_total: 100,
    unrepair_total: 1,
    inrapair_total: 3,
    total: 4,
    total_page: 2,
    data: [
      {
        alias: '234',
        repair_status: 1,
        fault_code: 1
      }
    ]


  }
}

async function a10(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: 'suc',
    total: 12,
    total_page: 2,
    data: [
      {
        m_category: '厨房设备',
        serial: '23',
        alias: 'ccc32',
        branch_number: '34543',
        day: '2019-12-12',
        alarms: 5,
        last_update: ''
      },
      {
        m_category: '厨房设备',
        serial: '2n333',
        alias: 'b32',
        branch_number: '34543',
        day: '2019-12-13',
        alarms: 0,
        last_update: ''
      },
      {
        m_category: '厨房设备',
        serial: '2v3',
        alias: 'a32',
        branch_number: '34543',
        day: '2019-12-14',
        alarms: 12,
        last_update: ''
      }
    ]
  }
}

async function a11(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: 'suc',
    total: 99999
  }
}

async function a12(ctx, next) {
  ctx.response.body = { "code": 0, "data": [{ "id": "5df2fb7118288121708b4f79", "tenant_id": "85bdd5674c024a9586f72a487eb102f3", "deviceType": "2002", "deviceId": null, "serial": "E61SH12102322745", "hubId": "SH1028", "day": 1576166400000, "upload": 1576205249408, "pushed": 1576205169968, "data": { "chargeNumber": 15443, "programData": [{ "cookingTemp": 121, "coreTempActual": 48, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "0" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 2, "mode": -1, "timeRunning": "0" }, { "cookingTemp": 121, "coreTempActual": 48, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "1" }, { "cookingTemp": 159, "coreTempActual": 45, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "60" }, { "cookingTemp": 201, "coreTempActual": 43, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "120" }, { "cookingTemp": 238, "coreTempActual": 41, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "180" }, { "cookingTemp": 249, "coreTempActual": 39, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "235" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 1, "mode": -1, "timeRunning": "235" }, { "cookingTemp": 237, "coreTempActual": 39, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "240" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 2, "mode": -1, "timeRunning": "264" }, { "cookingTemp": 175, "coreTempActual": 39, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "264" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 1, "mode": -1, "timeRunning": "264" }, { "cookingTemp": 175, "coreTempActual": 39, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "275" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 2, "mode": -1, "timeRunning": "275" }, { "cookingTemp": 194, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "300" }, { "cookingTemp": 203, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "326" }, { "cookingTemp": 201, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "346" }, { "cookingTemp": 199, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "360" }, { "cookingTemp": 197, "coreTempActual": 37, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "420" }, { "cookingTemp": 195, "coreTempActual": 37, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "540" }, { "cookingTemp": 196, "coreTempActual": 37, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "600" }, { "cookingTemp": 188, "coreTempActual": 37, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "720" }, { "cookingTemp": 189, "coreTempActual": 37, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "840" }, { "cookingTemp": 190, "coreTempActual": 37, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "900" }, { "cookingTemp": 191, "coreTempActual": 37, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "1020" }, { "cookingTemp": 185, "coreTempActual": 37, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "1200" }, { "cookingTemp": 186, "coreTempActual": 37, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "1260" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 12, "mode": -1, "timeRunning": "1467" }, { "cookingTemp": 182, "coreTempActual": 37, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "1467" }, { "cookingTemp": 181, "coreTempActual": 37, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "1479" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 1, "mode": -1, "timeRunning": "1479" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 4, "mode": -1, "timeRunning": "1480" }], "programName": "蛋挞", "programStart": "2019.12.13 10:54:45", "quantities": [{ "drawer": 0, "endTime": 0, "name": "09_蛋挞", "quantity": 36, "startTime": 0 }], "tempUnit": 0 } }, { "id": "5df2ec3a18288121708b46a6", "tenant_id": "85bdd5674c024a9586f72a487eb102f3", "deviceType": "2002", "deviceId": null, "serial": "E61SH12102322745", "hubId": "SH1028", "day": 1576166400000, "upload": 1576201354217, "pushed": 1576201274755, "data": { "chargeNumber": 15442, "programData": [{ "cookingTemp": 146, "coreTempActual": 36, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "0" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 2, "mode": -1, "timeRunning": "0" }, { "cookingTemp": 146, "coreTempActual": 36, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "1" }, { "cookingTemp": 178, "coreTempActual": 36, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "60" }, { "cookingTemp": 220, "coreTempActual": 36, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "120" }, { "cookingTemp": 251, "coreTempActual": 36, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "179" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 1, "mode": -1, "timeRunning": "179" }, { "cookingTemp": 208, "coreTempActual": 36, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "192" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 2, "mode": -1, "timeRunning": "192" }, { "cookingTemp": 216, "coreTempActual": 36, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "238" }, { "cookingTemp": 212, "coreTempActual": 36, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "258" }, { "cookingTemp": 207, "coreTempActual": 36, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "300" }, { "cookingTemp": 195, "coreTempActual": 36, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "360" }, { "cookingTemp": 195, "coreTempActual": 37, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "420" }, { "cookingTemp": 191, "coreTempActual": 37, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "900" }, { "cookingTemp": 189, "coreTempActual": 37, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "1080" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 12, "mode": -1, "timeRunning": "1094" }, { "cookingTemp": 187, "coreTempActual": 37, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "1094" }, { "cookingTemp": 187, "coreTempActual": 37, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "1097" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 1, "mode": -1, "timeRunning": "1097" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 4, "mode": -1, "timeRunning": "1098" }], "programName": "蛋挞", "programStart": "2019.12.13 09:56:12", "quantities": [{ "drawer": 0, "endTime": 0, "name": "09_蛋挞", "quantity": 18, "startTime": 0 }], "tempUnit": 0 } }, { "id": "5df2e63118288121708b4338", "tenant_id": "85bdd5674c024a9586f72a487eb102f3", "deviceType": "2002", "deviceId": null, "serial": "E61SH12102322745", "hubId": "SH1028", "day": 1576166400000, "upload": 1576199809146, "pushed": 1576199729685, "data": { "chargeNumber": 15441, "programData": [{ "cookingTemp": 201, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "0" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 2, "mode": -1, "timeRunning": "0" }, { "cookingTemp": 210, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "60" }, { "cookingTemp": 200, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "107" }, { "cookingTemp": 199, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "109" }, { "cookingTemp": 178, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "112" }, { "cookingTemp": 176, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "114" }, { "cookingTemp": 182, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "120" }, { "cookingTemp": 201, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "145" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 1, "mode": -1, "timeRunning": "145" }, { "cookingTemp": 179, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "180" }, { "cookingTemp": 185, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "240" }, { "cookingTemp": 186, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "279" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 2, "mode": -1, "timeRunning": "279" }, { "cookingTemp": 192, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "293" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 1, "mode": -1, "timeRunning": "293" }, { "cookingTemp": 181, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "300" }, { "cookingTemp": 167, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "306" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 2, "mode": -1, "timeRunning": "306" }, { "cookingTemp": 145, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "314" }, { "cookingTemp": 164, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "360" }, { "cookingTemp": 160, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "480" }, { "cookingTemp": 156, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "540" }, { "cookingTemp": 156, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "542" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 12, "mode": -1, "timeRunning": "557" }, { "cookingTemp": 154, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "557" }, { "cookingTemp": 154, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "560" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 1, "mode": -1, "timeRunning": "560" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 4, "mode": -1, "timeRunning": "561" }], "programName": "鸡蛋", "programStart": "2019.12.13 09:39:25", "quantities": [{ "drawer": 0, "endTime": 0, "name": "07_煎鸡蛋", "quantity": 15, "startTime": 0 }], "tempUnit": 0 } }, { "id": "5df2e3f218288121708b41dd", "tenant_id": "85bdd5674c024a9586f72a487eb102f3", "deviceType": "2002", "deviceId": null, "serial": "E61SH12102322745", "hubId": "SH1028", "day": 1576166400000, "upload": 1576199234104, "pushed": 1576199154628, "data": { "chargeNumber": 15440, "programData": [{ "cookingTemp": 214, "coreTempActual": 37, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "0" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 2, "mode": -1, "timeRunning": "0" }, { "cookingTemp": 244, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "60" }, { "cookingTemp": 255, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "86" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 1, "mode": -1, "timeRunning": "86" }, { "cookingTemp": 236, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "93" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 2, "mode": -1, "timeRunning": "93" }, { "cookingTemp": 233, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "120" }, { "cookingTemp": 243, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "180" }, { "cookingTemp": 245, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "360" }, { "cookingTemp": 244, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "420" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 12, "mode": -1, "timeRunning": "446" }, { "cookingTemp": 243, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "446" }, { "cookingTemp": 242, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "472" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 1, "mode": -1, "timeRunning": "472" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 4, "mode": -1, "timeRunning": "473" }], "programName": "06_猪鸡饼", "programStart": "2019.12.13 09:31:15", "quantities": [{ "drawer": 0, "endTime": 0, "name": "鸡胸", "quantity": 10, "startTime": 0 }], "tempUnit": 0 } }, { "id": "5df2e0fe18288121708b406d", "tenant_id": "85bdd5674c024a9586f72a487eb102f3", "deviceType": "2002", "deviceId": null, "serial": "E61SH12102322745", "hubId": "SH1028", "day": 1576166400000, "upload": 1576198478074, "pushed": 1576198398595, "data": { "chargeNumber": 15439, "programData": [{ "cookingTemp": 150, "coreTempActual": 36, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "0" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 1, "mode": -1, "timeRunning": "0" }, { "cookingTemp": 148, "coreTempActual": 36, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "60" }, { "cookingTemp": 148, "coreTempActual": 36, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "84" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 2, "mode": -1, "timeRunning": "84" }, { "cookingTemp": 158, "coreTempActual": 36, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "120" }, { "cookingTemp": 197, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "180" }, { "cookingTemp": 233, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "240" }, { "cookingTemp": 253, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "300" }, { "cookingTemp": 255, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "344" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 1, "mode": -1, "timeRunning": "344" }, { "cookingTemp": 247, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "349" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 2, "mode": -1, "timeRunning": "349" }, { "cookingTemp": 236, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "360" }, { "cookingTemp": 245, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "420" }, { "cookingTemp": 244, "coreTempActual": 36, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "480" }, { "cookingTemp": 243, "coreTempActual": 36, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "540" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 12, "mode": -1, "timeRunning": "702" }, { "cookingTemp": 241, "coreTempActual": 36, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "702" }, { "cookingTemp": 240, "coreTempActual": 36, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "708" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 1, "mode": -1, "timeRunning": "708" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 4, "mode": -1, "timeRunning": "709" }], "programName": "06_猪鸡饼", "programStart": "2019.12.13 09:14:44", "quantities": [{ "drawer": 0, "endTime": 0, "name": "鸡胸", "quantity": 10, "startTime": 0 }], "tempUnit": 0 } }, { "id": "5df2dacd18288121708b3d90", "tenant_id": "85bdd5674c024a9586f72a487eb102f3", "deviceType": "2002", "deviceId": null, "serial": "E61SH12102322745", "hubId": "SH1028", "day": 1576166400000, "upload": 1576196893020, "pushed": 1576196813555, "data": { "chargeNumber": 15438, "programData": [{ "cookingTemp": 86, "coreTempActual": 53, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "0" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 2, "mode": -1, "timeRunning": "0" }, { "cookingTemp": 88, "coreTempActual": 52, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "18" }, { "cookingTemp": 111, "coreTempActual": 50, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "60" }, { "cookingTemp": 154, "coreTempActual": 46, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "120" }, { "cookingTemp": 194, "coreTempActual": 43, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "180" }, { "cookingTemp": 231, "coreTempActual": 41, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "240" }, { "cookingTemp": 248, "coreTempActual": 40, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "300" }, { "cookingTemp": 249, "coreTempActual": 39, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "353" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 1, "mode": -1, "timeRunning": "353" }, { "cookingTemp": 230, "coreTempActual": 39, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "360" }, { "cookingTemp": 208, "coreTempActual": 39, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "367" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 2, "mode": -1, "timeRunning": "367" }, { "cookingTemp": 218, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "413" }, { "cookingTemp": 215, "coreTempActual": 38, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "433" }, { "cookingTemp": 207, "coreTempActual": 37, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "480" }, { "cookingTemp": 194, "coreTempActual": 37, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "540" }, { "cookingTemp": 193, "coreTempActual": 37, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "660" }, { "cookingTemp": 194, "coreTempActual": 37, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "720" }, { "cookingTemp": 194, "coreTempActual": 36, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "840" }, { "cookingTemp": 195, "coreTempActual": 37, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "1020" }, { "cookingTemp": 192, "coreTempActual": 36, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "1080" }, { "cookingTemp": 190, "coreTempActual": 36, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "1140" }, { "cookingTemp": 189, "coreTempActual": 37, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "1200" }, { "cookingTemp": 188, "coreTempActual": 37, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "1260" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 12, "mode": -1, "timeRunning": "1269" }, { "cookingTemp": 187, "coreTempActual": 37, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "1269" }, { "cookingTemp": 187, "coreTempActual": 37, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "1271" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 1, "mode": -1, "timeRunning": "1271" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 4, "mode": -1, "timeRunning": "1272" }], "programName": "蛋挞", "programStart": "2019.12.13 08:38:59", "quantities": [{ "drawer": 0, "endTime": 0, "name": "鸡胸", "quantity": 0, "startTime": 0 }], "tempUnit": 0 } }, { "id": "5df2bf8418288121708b2f49", "tenant_id": "85bdd5674c024a9586f72a487eb102f3", "deviceType": "2002", "deviceId": null, "serial": "E61SH12102322745", "hubId": "SH1028", "day": 1576166400000, "upload": 1576189907646, "pushed": 1576189828136, "data": { "chargeNumber": 15437, "programData": [{ "cookingTemp": 200, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "0" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 2, "mode": -1, "timeRunning": "0" }, { "cookingTemp": 235, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "60" }, { "cookingTemp": 256, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "107" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 1, "mode": -1, "timeRunning": "107" }, { "cookingTemp": 212, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "120" }, { "cookingTemp": 185, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "130" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 2, "mode": -1, "timeRunning": "130" }, { "cookingTemp": 213, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "180" }, { "cookingTemp": 220, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "240" }, { "cookingTemp": 233, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "300" }, { "cookingTemp": 231, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "420" }, { "cookingTemp": 234, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "480" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 12, "mode": -1, "timeRunning": "531" }, { "cookingTemp": 230, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "531" }, { "cookingTemp": 229, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "535" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 1, "mode": -1, "timeRunning": "535" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 4, "mode": -1, "timeRunning": "537" }], "programName": "06_猪鸡饼", "programStart": "2019.12.13 06:54:45", "quantities": [], "tempUnit": 0 } }, { "id": "5df2bae318288121708b2d3d", "tenant_id": "85bdd5674c024a9586f72a487eb102f3", "deviceType": "2002", "deviceId": null, "serial": "E61SH12102322745", "hubId": "SH1028", "day": 1576166400000, "upload": 1576188722573, "pushed": 1576188643054, "data": { "chargeNumber": 15436, "programData": [{ "cookingTemp": 127, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "0" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 2, "mode": -1, "timeRunning": "0" }, { "cookingTemp": 189, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "60" }, { "cookingTemp": 219, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "119" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 1, "mode": -1, "timeRunning": "119" }, { "cookingTemp": 218, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "120" }, { "cookingTemp": 175, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "137" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 2, "mode": -1, "timeRunning": "137" }, { "cookingTemp": 239, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "180" }, { "cookingTemp": 256, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "222" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 1, "mode": -1, "timeRunning": "222" }, { "cookingTemp": 254, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "225" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 2, "mode": -1, "timeRunning": "225" }, { "cookingTemp": 245, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "240" }, { "cookingTemp": 244, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "300" }, { "cookingTemp": 244, "coreTempActual": 36, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "420" }, { "cookingTemp": 246, "coreTempActual": 36, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "540" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 12, "mode": -1, "timeRunning": "578" }, { "cookingTemp": 240, "coreTempActual": 36, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "578" }, { "cookingTemp": 237, "coreTempActual": 36, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "622" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 1, "mode": -1, "timeRunning": "622" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 4, "mode": -1, "timeRunning": "623" }], "programName": "06_猪鸡饼", "programStart": "2019.12.13 06:33:34", "quantities": [{ "drawer": 0, "endTime": 0, "name": "鸡胸", "quantity": 20, "startTime": 0 }, { "drawer": 0, "endTime": 0, "name": "猪肉饼", "quantity": 20, "startTime": 0 }, { "drawer": 0, "endTime": 0, "name": "冻鸡饼", "quantity": 20, "startTime": 0 }], "tempUnit": 0 } }, { "id": "5df2b85a18288121708b2c13", "tenant_id": "85bdd5674c024a9586f72a487eb102f3", "deviceType": "2002", "deviceId": null, "serial": "E61SH12102322745", "hubId": "SH1028", "day": 1576166400000, "upload": 1576188073553, "pushed": 1576187994016, "data": { "chargeNumber": 15435, "programData": [{ "cookingTemp": 132, "coreTempActual": 34, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "0" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 2, "mode": -1, "timeRunning": "0" }, { "cookingTemp": 132, "coreTempActual": 34, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "1" }, { "cookingTemp": 207, "coreTempActual": 34, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "60" }, { "cookingTemp": 247, "coreTempActual": 34, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "120" }, { "cookingTemp": 268, "coreTempActual": 34, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "180" }, { "cookingTemp": 272, "coreTempActual": 34, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "240" }, { "cookingTemp": 271, "coreTempActual": 34, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "242" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 1, "mode": -1, "timeRunning": "242" }, { "cookingTemp": 184, "coreTempActual": 34, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "271" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 2, "mode": -1, "timeRunning": "271" }, { "cookingTemp": 199, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "300" }, { "cookingTemp": 186, "coreTempActual": 34, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "312" }, { "cookingTemp": 183, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "360" }, { "cookingTemp": 177, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "420" }, { "cookingTemp": 179, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "480" }, { "cookingTemp": 199, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "540" }, { "cookingTemp": 196, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "600" }, { "cookingTemp": 191, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "660" }, { "cookingTemp": 190, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "720" }, { "cookingTemp": 188, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "780" }, { "cookingTemp": 195, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "900" }, { "cookingTemp": 194, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "957" }, { "cookingTemp": 192, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "960" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 12, "mode": -1, "timeRunning": "972" }, { "cookingTemp": 188, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "972" }, { "cookingTemp": 168, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "1084" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 1, "mode": -1, "timeRunning": "1084" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 4, "mode": -1, "timeRunning": "1085" }], "programName": "新奥尔良烤翅", "programStart": "2019.12.13 06:15:02", "quantities": [{ "drawer": 0, "endTime": 0, "name": "ISP烤翅", "quantity": 0, "startTime": 0 }, { "drawer": 0, "endTime": 0, "name": "烤肉", "quantity": 9, "startTime": 0 }], "tempUnit": 0 } }, { "id": "5df2b3f918288121708b2a51", "tenant_id": "85bdd5674c024a9586f72a487eb102f3", "deviceType": "2002", "deviceId": null, "serial": "E61SH12102322745", "hubId": "SH1028", "day": 1576166400000, "upload": 1576186953507, "pushed": 1576186873992, "data": { "chargeNumber": 15434, "programData": [{ "cookingTemp": 52, "coreTempActual": 48, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "0" }, { "cookingTemp": 52, "coreTempActual": 48, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "9" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 2, "mode": -1, "timeRunning": "9" }, { "cookingTemp": 53, "coreTempActual": 48, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "11" }, { "cookingTemp": 96, "coreTempActual": 45, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "60" }, { "cookingTemp": 141, "coreTempActual": 41, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "120" }, { "cookingTemp": 181, "coreTempActual": 39, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "180" }, { "cookingTemp": 217, "coreTempActual": 37, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "240" }, { "cookingTemp": 249, "coreTempActual": 36, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "300" }, { "cookingTemp": 247, "coreTempActual": 35, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "360" }, { "cookingTemp": 251, "coreTempActual": 34, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "420" }, { "cookingTemp": 250, "coreTempActual": 34, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "428" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 1, "mode": -1, "timeRunning": "428" }, { "cookingTemp": 217, "coreTempActual": 34, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "439" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 2, "mode": -1, "timeRunning": "439" }, { "cookingTemp": 211, "coreTempActual": 34, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "480" }, { "cookingTemp": 212, "coreTempActual": 34, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "485" }, { "cookingTemp": 209, "coreTempActual": 34, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "505" }, { "cookingTemp": 203, "coreTempActual": 34, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "540" }, { "cookingTemp": 194, "coreTempActual": 34, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "600" }, { "cookingTemp": 194, "coreTempActual": 33, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "660" }, { "cookingTemp": 193, "coreTempActual": 34, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "780" }, { "cookingTemp": 194, "coreTempActual": 34, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "840" }, { "cookingTemp": 195, "coreTempActual": 34, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "1140" }, { "cookingTemp": 189, "coreTempActual": 34, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "1200" }, { "cookingTemp": 190, "coreTempActual": 34, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "1320" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 12, "mode": -1, "timeRunning": "1341" }, { "cookingTemp": 186, "coreTempActual": 34, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "1341" }, { "cookingTemp": 184, "coreTempActual": 34, "coreTempTarget": 0, "event": -1, "mode": -1, "stateEnergyOpt": "0", "stateHalfEnergy": "0", "timeRunning": "1360" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 1, "mode": -1, "timeRunning": "1360" }, { "cookingTemp": 0, "coreTempActual": 0, "coreTempTarget": 0, "event": 4, "mode": -1, "timeRunning": "1361" }], "programName": "蛋挞", "programStart": "2019.12.13 05:51:45", "quantities": [{ "drawer": 0, "endTime": 0, "name": "09_蛋挞", "quantity": 18, "startTime": 0 }], "tempUnit": 0 } }], "message": "success", "total": 30, "total_page": 3 }
}

async function a14(ctx, next) {
  ctx.response.body =
    { "code": 0, "data": [{ "id": "a17b218b2c5444fc831b89c218789ba2", "tenant_id": "85bdd5674c024a9586f72a487eb102f3", "branch_id": "SH1028", "device_type": "2002", "serial": "E61SH12102322745", "day": "2019-12-12", "dashtype": "utilization", "data": "\"{\\\"use\\\":[{\\\"begin\\\":1576080067952,\\\"end\\\":1576098063438},{\\\"begin\\\":1576098636376,\\\"end\\\":1576100046569},{\\\"begin\\\":1576100050491,\\\"end\\\":1576101686620},{\\\"begin\\\":1576102526609,\\\"end\\\":1576103081705},{\\\"begin\\\":1576109406011,\\\"end\\\":1576110922203},{\\\"begin\\\":1576110971117,\\\"end\\\":1576111507202},{\\\"begin\\\":1576112561254,\\\"end\\\":1576113298305},{\\\"begin\\\":1576113326250,\\\"end\\\":1576113817331},{\\\"begin\\\":1576117372488,\\\"end\\\":1576118967642},{\\\"begin\\\":1576123517816,\\\"end\\\":1576125037981},{\\\"begin\\\":1576134048421,\\\"end\\\":1576135378556},{\\\"begin\\\":1576137978643,\\\"end\\\":1576139499795},{\\\"begin\\\":1576143352966,\\\"end\\\":1576145154235},{\\\"begin\\\":1576145753168,\\\"end\\\":1576147110227},{\\\"begin\\\":1576148523244,\\\"end\\\":1576149590419},{\\\"begin\\\":1576149643321,\\\"end\\\":1576150770453},{\\\"begin\\\":1576151549419,\\\"end\\\":1576155559737},{\\\"begin\\\":1576155628679,\\\"end\\\":1576156384771},{\\\"begin\\\":1576156838765,\\\"end\\\":1576157669869}],\\\"idle\\\":[{\\\"begin\\\":1576098063438,\\\"end\\\":1576098636376},{\\\"begin\\\":1576100046569,\\\"end\\\":1576100050491},{\\\"begin\\\":1576101686620,\\\"end\\\":1576102526609},{\\\"begin\\\":1576103081705,\\\"end\\\":1576109406011},{\\\"begin\\\":1576110922203,\\\"end\\\":1576110971117},{\\\"begin\\\":1576111507202,\\\"end\\\":1576112561254},{\\\"begin\\\":1576113298305,\\\"end\\\":1576113326250},{\\\"begin\\\":1576113817331,\\\"end\\\":1576117372488},{\\\"begin\\\":1576118967642,\\\"end\\\":1576123517816},{\\\"begin\\\":1576125037981,\\\"end\\\":1576134048421},{\\\"begin\\\":1576135378556,\\\"end\\\":1576137978643},{\\\"begin\\\":1576139499795,\\\"end\\\":1576143352966},{\\\"begin\\\":1576145154235,\\\"end\\\":1576145753168},{\\\"begin\\\":1576147110227,\\\"end\\\":1576148523244},{\\\"begin\\\":1576149590419,\\\"end\\\":1576149643321},{\\\"begin\\\":1576150770453,\\\"end\\\":1576151549419},{\\\"begin\\\":1576155559737,\\\"end\\\":1576155628679},{\\\"begin\\\":1576156384771,\\\"end\\\":1576156838765},{\\\"begin\\\":1576157669869,\\\"end\\\":1576166469200}],\\\"off\\\":[]}\"", "create_time": "2019-12-12T23:59:51+08:00" }], "message": "success", "total": 1, "total_page": 1 }

}

async function a15(ctx, next) {
  ctx.response.body = { "code": 0, "data": [{ "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "00:00", "total": 0, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "01:00", "total": 0, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "02:00", "total": 0, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "03:00", "total": 2.8, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "04:00", "total": 3.4, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "05:00", "total": 6.9, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "06:00", "total": 9.8, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "07:00", "total": 9.8, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "08:00", "total": 12.8, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "09:00", "total": 14.8, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "10:00", "total": 18.5, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "11:00", "total": 18.9, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "12:00", "total": 20.5, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "13:00", "total": 20.5, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "14:00", "total": 20.5, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "15:00", "total": 22.1, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "16:00", "total": 24.5, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "17:00", "total": 24.6, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "18:00", "total": 26.9, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "19:00", "total": 29.3, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "20:00", "total": 31.6, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "21:00", "total": 33.4, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "22:00", "total": 35, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "23:00", "total": 35, "create_time": "0001-01-01T00:00:00Z" }], "message": "success" }
}
app.use(router.routes());
// listen

if (!module.parent) app.listen(3000);