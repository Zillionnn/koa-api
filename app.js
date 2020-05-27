const logger = require('koa-logger');
const router = require('koa-router')();
const koaBody = require('koa-body');
const cors = require('koa-cors');
const Koa = require('koa');
const app = module.exports = new Koa();
const got = require('got');

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

router.get('/api/test', showTest)
  .get(`/api/bing_daily_image`, getBingImg)
  .post(`/api/post`, add)
  .post(`/api/v1/user/login`, signIn)
  .get(`/api/v1/user/store/list/123`, storeList)
  .get(`/api/v1/user/list`, userList)
  .post(`/api/v2/rfid/import/:storeId/all`, getUploadFIle)
  .get(`/api/v2/store/device/status/:storeId`, devList)
  .post(`/api/user/personal/updatephone`, does)
  .get(`/api/user/personal/detail`, persona)
  .get(`/api/devices/bind/mine/list`, list)
  .get(`/api/v1/device-attribute/:id/:s`, getProp)
  .get(`/api/v1/device-attribute/3/list`, getProp333)
  .post(`/api/v1/devicedata/list`, getHisData)
  .get(`/api/devices/mf/list`, mfList)
  .post(`/api/user/wx/getopenid`, openId)
  .post(`/api/user/wx/login`, loginWx)
  .get(`/api/devices/branch/list`, devBranch)
  .get(`/api/user/branch/list`, branchList)
  // 4.18.1、设备统计
  .post(`/api/v1/device/statistic/overall`, a1)
  // 4.18.2、告警统计
  .post(`/api/v1/device/statistic/alarm/overall`, a2)
  // 4.18.3、告警级别统计
  .post(`/api/v1/device/statistic/alarm/level/overall`, a3)
  //4.4.12
  .get(`/api/devices/status/:device_id`, a4)
  .get(`/api/v1/devicedata/newest/serial/:serial`, a5)
  .get(`/api/user/branch/detail/:branchId`, a6)
  .post(`/api/v1/device/statistic/alarm/category/overall`, a7)
  // 4.19.1．查询告警列表
  .post(`/api/v1/devices/alarm/list`, a8)

  // 9.1.2查询生产与计划-测试通过
  .post(`/api/v1/production/amount/query`, a9)
  // 4.19.2
  .get(`/api/v1/devices/alarm/detail/:alarm_id`, a10)
  // 9.2.2查询生产与计划启停时间-测试通过
  .post(`/api/v1/production/start_stop/query`, a11)
  // DEVICE_API: `"${baseUrl}:8282"`,
  // 4.20.1．用户设备排行
  .get(`/api/v1/devices/user/rank`, a12)
  // 4.20.6、查询用户下设备类型统计
  .get(`/api/v1/device/user/statistic/device-type/:userId`, a13)
  // 4.18.11、查询设备状态统计
  .get(`/api/v1/device/user/status/statistic/:user_id`, a14)

  // 4.4.4 根据设备类型获取设备列表
  .get(`/api/devices/type/list`, a15)
  ;
async function getBingImg(ctx) {
  const response = await got('http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1');
  // console.log(response.body);
  let r = JSON.parse(response.body)
  const link =`https://bing.com${r.images[0].url}`
  console.log(link)
  ctx.response.body={
    code:0,
    message:'success',
    data:{
      url: link
    }
  }
}

function getBingIMG(){
  return new Promise((resolve, reject)=>{
    request('http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1',  (error, response, body)=> {
      
      let r = JSON.parse(body)
      resolve(`https://bing.com${r.images[0].url}`)
    });
  })
}

async function a15(ctx) {
  ctx.response.body = {
    code: 0,
    message: '',
    total_page: 1,
    total: 10,
    data: [
      {
        dev_id: '14',
        serial: 'serial',
        alias: '12',
        device_type: '3001',
        branch_id: "?",
        branch_name: '',
        building: '',
        floor: 43,
        room: 34,
        secret_key: '',
        sketchs: [],

        mf_name: '',
        model_name: '',
        mtc_name: '',
        can_delete: '',
        location: '',
        observer: '',
        activated: '',
        enable: 1
      }
    ]

  }
}

async function a14(ctx) {
  ctx.response.body = {
    code: 0,
    message: '',
    data: [
      {
        status: 0,
        total: 12
      },
      {
        status: 1,
        total: 4
      }, {
        status: 5,
        total: 10
      }
    ]


  }
}
async function a13(ctx) {
  console.log('????????????????????????')
  ctx.response.body = {
    code: 0,
    message: '',
    data: [
      {
        device_type: '3001',
        total: 3
      },
      {
        device_type: '3002',
        total: 44
      }

    ]

  }
}
async function a12(ctx) {
  ctx.response.body = {
    code: 0,
    message: '',
    total_page: 1,
    total: 5,
    data: [
      {
        name: 'Jack',
        total: 39
      }, {
        name: 'Jack',
        total: 35
      },
      {
        name: 'Jack',
        total: 34
      },
      {
        name: 'Jack',
        total: 32
      },
      {
        name: 'Jack',
        total: 30
      }
    ]


  }
}
async function a11(ctx) {
  ctx.response.body = {
    code: 0,
    message: '',
    total: 4,
    total_page: 1,
    data: [
      {
        id: '23',
        device_type: '2002',
        tenant_id: '213',
        store_id: '32',
        serial: '23',
        day: '2019-05-20',
        plan_start: '8:00',
        plan_stop: '23:00',
        prod_start: '9:00',
        prod_stop: '20:00'
      },
      {
        id: '23',
        device_type: '2002',
        tenant_id: '213',
        store_id: '32',
        serial: '23',
        day: '2019-05-30',
        plan_start: '8:00',
        plan_stop: '23:00',
        prod_start: '5:00',
        prod_stop: '23:59'
      },
      {
        id: '23',
        device_type: '2002',
        tenant_id: '213',
        store_id: '32',
        serial: '23',
        day: '2019-05-31',
        plan_start: '8:00',
        plan_stop: '23:00',
        prod_start: '9:00',
        prod_stop: '22:35'
      },
      {
        id: '23',
        device_type: '2002',
        tenant_id: '213',
        store_id: '32',
        serial: '23',
        day: '2019-06-01',
        plan_start: '8:30',
        plan_stop: '23:30',
        prod_start: '11:25',
        prod_stop: '17:57'
      },
      {
        id: '23',
        device_type: '2002',
        tenant_id: '213',
        store_id: '32',
        serial: '23',
        day: '2019-06-10',
        plan_start: '8:30',
        plan_stop: '23:30',
        prod_start: '12:25',
        prod_stop: '23:57'
      }

    ]

  }
}
async function a10(ctx) {
  ctx.response.body = {
    code: 0,
    message: '',
    data: {
      alarm_id: 'idddddddddd',
      device_type: '2002',
      status: 1,
      alarm_type: 1,
      except_type: 1,
      except_level: 1,
      attime: '20190505',
      raw: '?',
      location: '?',
      sketch: 'http://106.12.40.54/images/flying_courier_lg.png',
      except_reason: 'reason',
      serial: '123',
      alias: '别名'
    }

  }
}
async function a9(ctx) {
  ctx.response.body = {
    code: 0,
    message: '',
    total: 23,
    total_page: 3,
    data: [{
      id: '213',
      device_type: '2002',
      tenant_id: '123',
      store_id: '123',
      serial: '?',
      day: '2019-05-23',
      plan: 3,
      prod: 40
    },
    {
      id: '213',
      device_type: '2002',
      tenant_id: '123',
      store_id: '123',
      serial: '?',
      day: '2019-05-23',
      plan: 3,
      prod: 40
    },
    {
      id: '213',
      device_type: '2002',
      tenant_id: '123',
      store_id: '123',
      serial: '?',
      day: '2019-05-23',
      plan: 3,
      prod: 40
    },
    {
      id: '213',
      device_type: '2002',
      tenant_id: '123',
      store_id: '123',
      serial: '?',
      day: '2019-05-23',
      plan: 3,
      prod: 40
    },
    {
      id: '213',
      device_type: '2002',
      tenant_id: '123',
      store_id: '123',
      serial: '?',
      day: '2019-05-23',
      plan: 3,
      prod: 40
    }, {
      id: '213',
      device_type: '2002',
      tenant_id: '123',
      store_id: '123',
      serial: '?',
      day: '2019-05-23',
      plan: 3,
      prod: 40
    }]

  }
}
async function a8(ctx) {
  ctx.response.body = {
    code: 0,
    message: 'ds',
    total_page: 3,
    total: 28,
    data: [
      {
        alarm_id: 'idddddddd',
        device_type: '2003',
        status: 0,
        alarm_type: 3,
        except_type: 1,
        except_level: 4,
        except_reason: '34234',
        attime: '2019-05-5',
        serial: 'dsfdsf',
        device_category_id: 'dsfa',
        device_category_name: '并',
        location: 'd'
      },
      {
        alarm_id: 'idddddddd',
        device_type: '2003',
        status: 1,
        alarm_type: 3,
        except_type: 1,
        except_level: 4,
        except_reason: '34234',
        attime: '2019-05-5',
        serial: 'dsfdsf',
        device_category_id: 'dsfa',
        device_category_name: '并',
        location: 'd'
      },
      {
        alarm_id: 'idddddddd',
        device_type: '2003',
        status: 2,
        alarm_type: 3,
        except_type: 1,
        except_level: 4,
        except_reason: '34234',
        attime: '2019-05-5',
        serial: 'dsfdsf',
        device_category_id: 'dsfa',
        device_category_name: '并',
        location: 'd'
      },
      {
        alarm_id: 'idddddddd',
        device_type: '2002',
        status: 4,
        alarm_type: 3,
        except_type: 1,
        except_level: 4,
        except_reason: '34234',
        attime: '2019-05-5',
        serial: 'dsfdsf',
        device_category_id: 'dsfa',
        device_category_name: '并',
        location: 'd'
      }


    ]

  }
}
async function a7(ctx) {
  ctx.response.body = {
    code: 0,
    message: 's',
    data: {
      stats: [
        {
          device_type: '2001',
          total: 10
        },
        {
          device_type: '2002',
          total: 45
        },
        {
          device_type: '2003',
          total: 32
        },
        {
          device_type: '2004',
          total: 34
        }
      ]

    }

  }
}
async function a6(ctx) {
  ctx.response.body = {
    code: 0,
    message: 'scuc',
    data: {
      branch_id: '34',
      tenant_id: '34',
      name: 'fdsf',
      location: 'fsa',
      branch_number: '342',
      longitude: 3,
      latitude: 3,
      ext: '{"list":[{"day":[6,7], "time":[1558940000000,1558944650533]},{"day":[1,2,3,4,5], "time":[1558940000000,1558944650533]}]}'
    }

  }
}
async function a5(ctx) {
  ctx.response.body = {
    code: 0,
    message: 's',
    data: {
      id: 'iddddddddddddddddd',
      tenant_id: 'tidddddddddddd',
      deviceType: 3,
      deviceId: 'ds',
      serial: 'f',
      hubId: '',
      pushed: '',
      data: `{"smoke":1}`
    }

  }
}
async function a4(ctx) {
  ctx.response.body = {
    code: 0,
    message: 's',
    data: {
      dev_id: 'devidddddddddddddd',
      first_access: 'f',
      last_update: '?',
      status: 8
    }

  }
}
async function a3(ctx) {
  ctx.response.body = {
    code: 0,
    message: 's',
    data: {
      total: 50,
      processed_total: 3,
      processing_total: 4,
      unprocessed_total: 5
    }

  }
}
async function a2(ctx) {
  ctx.response.body = {
    code: 0,
    message: 's',
    data: [
      {
        except_level: 1,
        total: 2
      },
      {
        except_level: 2,
        total: 3
      },
      {
        except_level: 3,
        total: 45
      },
      {
        except_level: 5,
        total: 33
      }
    ]

  }
}
async function a1(ctx) {
  ctx.response.body = {
    code: '0',
    message: 's',
    data: {
      total: 100,
      stats: [
        {
          status: 5,
          total: 3
        },
        {
          status: 9,
          total: 31
        },
        {
          status: 8,
          total: 34
        }
      ]

    }

  }
}
async function branchList(ctx) {
  ctx.response.body = {
    code: 0,
    message: 'success',
    total_page: 2,
    total: 22,
    data: [{
      branch_id: 'bbbbbbbbbb',
      tenant_id: 'tttttttttt',
      name: '生产',
      location: '3',
      branch_number: 3,
      longitude: 4,
      latitude: 5,
      ext: ''
    }, {
      branch_id: 'cccccccccccccc',
      tenant_id: 'tttttttttt',
      name: '存储',
      location: '3',
      branch_number: 3,
      longitude: 4,
      latitude: 5,
      ext: ''
    }]
  }
}
async function devBranch(ctx) {

  let data = []
  for (let i = 2001; i < 2014; i++) {
    let item = {
      dev_id: 'dev_iddddddddddddddd',
      serial: '1111',
      device_type: i.toString(),
      alias: '3',
      branch_id: '33',
      branch_name: 'fd',
      building: 3,
      floor: 0,
      room: 2,
      secret_key: '',
      mf_name: '',
      model_name: '',
      mtc_name: '',
      can_delete: '',
      location: '',
      observer: ''
    }
    data.push(item)
  }
  ctx.response.body = {
    code: 0,
    message: 'success',
    total_page: 2,
    total: 22,
    data: data
  }
}
async function loginWx(ctx) {
  ctx.response.body = {
    code: 0,
    message: 'success',
    data: {
      access_token: 'FAKE',
      user_id: '123',
      user: {
        name: 'Joker',
        portrait: '123'
      }

    }
  }

}
async function openId(ctx) {
  ctx.response.body = {
    code: 0,
    message: 'success',
    data: {
      "session_key": "egL/2bK0C8nbgtPuN5Joeg==",
      "openid": "oBV3N4h6iHLmF_nJONCeF6abo4ZI"
    }
  }
}
async function mfList(ctx) {
  ctx.response.body = {
    code: 0,
    message: 'success',
    total_page: 3,
    total: 10,
    data: [
      {
        mf_id: '213',
        name: '江苏金湖小青青机电设备有限公司',
        location: '213',
        mf_contact: '324432',
        mf_phone: 12354,
        mf_logo: '321',
        mf_website: 'www.google.com',
        mf_qrcode: ''
      },
      {
        mf_id: '213',
        name: '江苏金湖1111青青机电设备有限公司',
        location: '213',
        mf_contact: '324432',
        mf_phone: 12354,
        mf_logo: '321',
        mf_website: 'www.google.com',
        mf_qrcode: ''
      }
    ]

  }
}
async function getHisData(ctx) {
  let type = ctx.request.body.device_type
  if (type === '2013') {
    ctx.response.body = {
      code: 0,
      message: '',
      total_page: 3,
      total: 22,
      data: [
        {
          id: '321',
          tenant_id: '231',
          deviceType: '2002',
          deviceId: 'abc',
          serial: 'abcs',
          hubId: 'hubid',
          pushed: 1559702963926,
          data: {
            fCPower: 3,
            totalAmmeter: 3,
            kAPower: 3,
            gAPower: 3,
            lPower: 3,
            sHPower: 3,
            nEFPower: 3,
            tTPFPower: 3,
            dFFPower: 3,
            pFPower: 3,
            oWE61Power: 3,
            oWE101Power: 3,
            fPower: 3,
            cSPower: 43,
            pTFIPower: 2.3
          }
        },
        {
          id: '321',
          tenant_id: '231',
          deviceType: '2002',
          deviceId: 'abc',
          serial: 'abcs',
          hubId: 'hubid',
          pushed: 1559702963926,
          data: {
            fCPower: 3,
            totalAmmeter: 300,
            kAPower: 3,
            gAPower: 3,
            lPower: 3,
            sHPower: 3,
            nEFPower: 3,
            tTPFPower: 3,
            dFFPower: 3,
            pFPower: 3,
            oWE61Power: 3,
            oWE101Power: 3,
            fPower: 3,
            cSPower: 43,
            pTFIPower: 2.3
          }
        }
      ]
    }

  } else if (type === '2002') {
    ctx.response.body = {
      code: 0,
      message: '',
      total_page: 3,
      total: 22,
      data: [
        {
          id: '321',
          tenant_id: '231',
          deviceType: '2002',
          deviceId: 'abc',
          serial: 'abcs',
          hubId: 'hubid',
          pushed: 1559702963926,
          data: '{"program":"一个程序","chNR":"abc","time":"2019.02.01 12:20:51","tempUnit":0,"programData":[{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"?","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"},{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"?","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"},{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"?","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"},{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"?","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"},{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"?","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"},{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"?","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"},{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"7","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"},{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"8","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"},{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"?","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"},{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"?","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"},{"mode":0,"event":2,"cabinetTemp":"63","coreTempTarget":"?","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"},{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"12","coreTemp":"12","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"}]}'
        },
        {
          id: '321',
          tenant_id: '231',
          deviceType: '2002',
          deviceId: 'abc',
          serial: 'abcs',
          hubId: 'hubid',
          pushed: 1559702963926,
          data: {
            program: "一个程序", chNR: "abc", time: "2019.02.01 12:20:51",
            tempUnit: 0, programData:
              [{ mode: 0, event: 2, cabinetTemp: "32", coreTempTarget: "?", coreTemp: "100", time: "20190205", tempUnit: "c", energyOpt: "1", energyHalf: "1" },
              { mode: 0, event: 2, cabinetTemp: "32", coreTempTarget: "?", coreTemp: "100", time: "20190205", tempUnit: "c", energyOpt: "1", energyHalf: "1" }]
          }
        },
        {
          id: '321',
          tenant_id: '231',
          deviceType: '2002',
          deviceId: 'abc',
          serial: 'abcs',
          hubId: 'hubid',
          pushed: 1559702963926,
          data: '{"program":"一个程序","chNR":"abc","time":"2019.02.01 12:20:51","tempUnit":0,"programData":[{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"?","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"},{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"?","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"}]}'
        },
        {
          id: '321',
          tenant_id: '231',
          deviceType: '2002',
          deviceId: 'abc',
          serial: 'abcs',
          hubId: 'hubid',
          pushed: 1559702963926,
          data: '{"program":"一个程序","chNR":"abc","time":"2019.02.01 12:20:51","tempUnit":0,"programData":[{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"?","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"},{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"?","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"}]}'
        },
        {
          id: '321',
          tenant_id: '231',
          deviceType: '2002',
          deviceId: 'abc',
          serial: 'abcs',
          hubId: 'hubid',
          pushed: 1559702963926,
          data: '{"program":"一个程序","chNR":"abc","time":"2019.02.01 12:20:51","tempUnit":0,"programData":[{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"?","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"},{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"?","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"}]}'
        },
        {
          id: '321',
          tenant_id: '231',
          deviceType: '2002',
          deviceId: 'abc',
          serial: 'abcs',
          hubId: 'hubid',
          pushed: 1559702963926,
          data: '{"program":"一个程序","chNR":"abc","time":"2019.02.01 12:20:51","tempUnit":0,"programData":[{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"?","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"},{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"?","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"}]}'
        },
        {
          id: '321',
          tenant_id: '231',
          deviceType: '2002',
          deviceId: 'abc',
          serial: 'abcs',
          hubId: 'hubid',
          pushed: 1559702963926,
          data: '{"program":"一个程序","chNR":"abc","time":"2019.02.01 12:20:51","tempUnit":0,"programData":[{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"?","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"},{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"?","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"}]}'
        },
        {
          id: '321',
          tenant_id: '231',
          deviceType: '2002',
          deviceId: 'abc',
          serial: 'abcs',
          hubId: 'hubid',
          pushed: 1559702963926,
          data: '{"program":"一个程序","chNR":"abc","time":"2019.02.01 12:20:51","tempUnit":0,"programData":[{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"?","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"},{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"?","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"}]}'
        },
        {
          id: '321',
          tenant_id: '231',
          deviceType: '2002',
          deviceId: 'abc',
          serial: 'abcs',
          hubId: 'hubid',
          pushed: 1559702963926,
          data: '{"program":"一个程序","chNR":"abc","time":"2019.02.01 12:20:51","tempUnit":0,"programData":[{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"?","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"},{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"?","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"}]}'
        },
        {
          id: '321',
          tenant_id: '231',
          deviceType: '2002',
          deviceId: 'abc',
          serial: 'abcs',
          hubId: 'hubid',
          pushed: 1559702963926,
          data: '{"program":"一个程序","chNR":"abc","time":"2019.02.01 12:20:51","tempUnit":0,"programData":[{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"?","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"},{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"?","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"}]}'
        },
        {
          id: '321',
          tenant_id: '231',
          deviceType: '2002',
          deviceId: 'abc',
          serial: 'abcs',
          hubId: 'hubid',
          pushed: 1559702963926,
          data: '{"program":"一个程序","chNR":"abc","time":"2019.02.01 12:20:51","tempUnit":0,"programData":[{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"?","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"},{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"?","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"}]}'
        },
        {
          id: '321',
          tenant_id: '231',
          deviceType: '2002',
          deviceId: 'abc',
          serial: 'abcs',
          hubId: 'hubid',
          pushed: 1559702963926,
          data: '{"program":"一个程序","chNR":"abc","time":"2019.02.01 12:20:51","tempUnit":0,"programData":[{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"?","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"},{"mode":0,"event":2,"cabinetTemp":"32","coreTempTarget":"?","coreTemp":"100","time":"20190205","tempUnit":"c","energyOpt":"1","energyHalf":"1"}]}'
        }
      ]

    }
  } else {
    ctx.response.body = {
      code: 0,
      message: ''
    }
  }


}
async function getProp(ctx) {
  let r = JSON.stringify({ 'auto': true, 'max': 100, 'min': 33, fre: '20' })
  ctx.response.body = {
    code: 0,
    message: '',
    total_page: 3,
    total: 33,
    data:
      [
        {
          id: '2222222',
          tenant_id: '332',
          deviceType: '2002',
          deviceId: '3242',
          serial: '453',
          hubId: 'fdsafr',
          pushed: '453',
          data: 'fr'
        }
      ]


  }
}

async function getProp333(ctx) {
  let r = JSON.stringify({
    'auto': false,
    content: [
      {
        startTime: '5:00',
        endTime: '17:00',
        mode: [1, 2, 3]
      }
    ]
  })
  ctx.response.body = {
    code: 0,
    message: '',
    total_page: 3,
    total: 33,
    data:
    {
      id: '324',
      tenant: '324',
      serial: 'r43rf4',
      type: 1000,
      readonly: 0,
      value: r
    }


  }
}

async function list(ctx) {
  ctx.response.body = {
    code: 0,
    message: '',
    total_page: 10,
    total: 101,
    data: [
      {
        dev_id: '32',
        serial: '324fidn43ontfong',
        alias: '增氧机',
        device_type: 1000,
        branch_id: '342',
        branch_name: 'nanjin',
        building: 3,
        floor: 5,
        room: 4,
        topology: 4,
        topo_id: 'gfd',
        secret_key: '',
        sketchs: [],
        mf_name: '',
        model_name: '',
        mtc_name: '',
        location: '',
        observer: ''
      },
      {
        dev_id: '32',
        serial: '3',
        alias: '增氧机',
        device_type: 1000,
        branch_id: '342',
        branch_name: 'nanjin',
        building: 3,
        floor: 5,
        room: 4,
        topology: 4,
        topo_id: 'gfd',
        secret_key: '',
        sketchs: [],
        mf_name: '',
        model_name: '',
        mtc_name: '',
        location: '',
        observer: ''
      },
      {
        dev_id: '32',
        serial: '3',
        alias: '投食机',
        device_type: 1001,
        branch_id: '342',
        branch_name: 'nanjin',
        building: 3,
        floor: 5,
        room: 4,
        topology: 4,
        topo_id: 'gfd',
        secret_key: '',
        sketchs: [],
        mf_name: '',
        model_name: '',
        mtc_name: '',
        location: '',
        observer: ''
      }
    ]

  }
}
async function persona(ctx) {
  ctx.response.body = {
    code: 0,
    message: 1,
    data: {
      user_id: '324',
      name: 'Micheal',
      portrait: '3',
      role: 0,
      is_notice: 0,

      phone: '1500000000',
      extra: 'Microsoft',
      address: 'Los Angles',
      remark: '213'
    }

  }
}
async function does(ctx) {
  ctx.response.body = {
    "oc": 1
  }
}

function st(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve()
    }, 90000)
  })
}
async function showTest(ctx, next) {
  await st();

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

async function storeList(ctx) {
  let data = [{

    name: '门店',
    store_id: 'sz01',
    permi_config: 1
  }]
  ctx.response.body = res(0, 'success', data)
}


async function userList(ctx) {
  let data = [{ "account": "jojo", "psid": " gfdsg", "role": 1, "status": 1, "user_id": "e21a497ce6cf4170a2c7237a04ee3fa4" }, { "account": "潘亮", "psid": "c376c612dce745a0a6830ee47b175032", "role": 0, "status": 1, "user_id": "1f1e84c8ab1b4e648d0ca4d55efb7ef7" }, { "account": "王胤雪", "psid": "85abdee4ce9340f0a365b837ca7edfb3", "role": 2, "status": 1, "user_id": "88dda1aa7b314a9a85c010323c98d65d" }, { "account": "jojo", "psid": "2132132", "role": 1, "status": 0, "user_id": "63db6a69ef894b5da95f6fb4cdd5421f" }, { "account": "Micheal", "psid": " gfdhgfds", "role": 2, "status": 0, "user_id": "a5b0467a49394fc2a96c7c2b45443dfe" }, { "account": "admin", "psid": "f2a4032c43b9462abaa08bb055911ad5", "role": 0, "status": 1, "user_id": "7ac2789dbb1d4449860505367e1b52f9" }, { "account": "赵维俊", "psid": "662b9e164a37454a816ba80280c5d2d0", "role": 0, "status": 1, "user_id": "11835f68cec141e59bba6259a72b6771" }, { "account": "徐健", "psid": "8318e142a85a4681a7af4b7ec55b77f5", "role": 0, "status": 1, "user_id": "5d87344465cf4d09afd547eb8ef43fae" }, { "account": "熊曙辉", "psid": "9b6d5302ab4a46bda2c438921a758686", "role": 0, "status": 1, "user_id": "380c3158ad9c4529a2abfba67c0019b3" }, { "account": "张天极", "psid": "f0e9169c34ca4111b6305b5a7b0a5aae", "role": 1, "status": 1, "user_id": "169ad5f596f04eab965e6d7224656717" }]
  ctx.response.body = res(0, 'success', data)
}
async function getUploadFIle(ctx) {
  let id = ctx.params.storeId;
  console.log(id)
  ctx.body = "your id is:" + id + ", thank you !";

  console.log(ctx.params)
}

async function devList(ctx) {
  let data = [{ "account": "jojo", "psid": " gfdsg", "role": 1, "status": 1, "user_id": "e21a497ce6cf4170a2c7237a04ee3fa4" }, { "account": "潘亮", "psid": "c376c612dce745a0a6830ee47b175032", "role": 0, "status": 1, "user_id": "1f1e84c8ab1b4e648d0ca4d55efb7ef7" }, { "account": "王胤雪", "psid": "85abdee4ce9340f0a365b837ca7edfb3", "role": 2, "status": 1, "user_id": "88dda1aa7b314a9a85c010323c98d65d" }, { "account": "jojo", "psid": "2132132", "role": 1, "status": 0, "user_id": "63db6a69ef894b5da95f6fb4cdd5421f" }, { "account": "Micheal", "psid": " gfdhgfds", "role": 2, "status": 0, "user_id": "a5b0467a49394fc2a96c7c2b45443dfe" }, { "account": "admin", "psid": "f2a4032c43b9462abaa08bb055911ad5", "role": 0, "status": 1, "user_id": "7ac2789dbb1d4449860505367e1b52f9" }, { "account": "赵维俊", "psid": "662b9e164a37454a816ba80280c5d2d0", "role": 0, "status": 1, "user_id": "11835f68cec141e59bba6259a72b6771" }, { "account": "徐健", "psid": "8318e142a85a4681a7af4b7ec55b77f5", "role": 0, "status": 1, "user_id": "5d87344465cf4d09afd547eb8ef43fae" }, { "account": "熊曙辉", "psid": "9b6d5302ab4a46bda2c438921a758686", "role": 0, "status": 1, "user_id": "380c3158ad9c4529a2abfba67c0019b3" }, { "account": "张天极", "psid": "f0e9169c34ca4111b6305b5a7b0a5aae", "role": 1, "status": 1, "user_id": "169ad5f596f04eab965e6d7224656717" }]

  ctx.response.body = res(0, 'success', data)
}

app.use(router.routes());
// listen

if (!module.parent) app.listen(3000);