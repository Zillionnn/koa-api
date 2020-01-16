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
  .post(`/api/user/login`, a2)
  .post(`/dev/api/v1/devices/alarm/list/yum`, a4)
  .get(`/usr/api/v1/yum-store/list`, a5)
  .get(`/dev/api/devices/branch/list`, a6)
  .get(`/dev/api/devices/category/list`, a7)
  .get(`/dev/api/devices/status/:id`, a71)
  .get(`/core/api/v1/devicedata/newest`, a72)

  .post(`/dev/api/v1/device/statistic/alarm/level/overall`, a8)
  .post(`/dev/api/devices/repair/list`, a9)
  .get(`/dev/api/v1/devices/inspect`, a10)
  .get(`/usr/api/v1/store/activated/total`, a11)
  .post(`/core/api/v1/devicedata/list`, a12_1)
  .post(`/datak/api/v1/iot/device/dashboard/query_device_day`, a14)
  .post(`/datak/api/v1/iot/power/serial/hour/query_day`, a15)
  // fryer haccp
  // .post(`/datak/api/v1/iot/device/dashboard/query_device_day`, a16)
  .get(`/datak/api/v1/iot/frier-press-btn/list`, a17)
  .post(`/dev/api/v1/device/statistic/alarm/overall/level`, a18)
  .post(`/dev/api/v1/device/statistic/alarm/status`, a19)
  .get(`/usr/api/v1/store_branch/list`, a20)
  .post(`/dev/api/v1/device/statistic/device_type/branch/overall`, a21)
  .post(`/datak/api/v1/iot/energy/water/average/day`, a22)
  .post(`/dev/api/v1/device/statistic/alarm/overall/group`, a23)
  .get(`/dev/api/v1/devices/startup/query`, a24)
  .get(`/dev/api/v1/devices/startup/plan/serial/123`, a25)
  .get(`/usr/api/v1/store/admin-subs/list`, a26)
  .get(`/datak/api/v1/iot/universal-report-template`, a27)
  .get(`/dev/api/devices/collection/list`, a28)
  .get(`/dev/api/devices/brand/list`, a29)
  .post(`/datak/api/v1/iot/energy/power/average/query_category_day`, a30)
  .post(`/datak/api/v1/iot/energy/power/average-area/query_category_day`, a31)
  .post(`/datak/api/v1/iot/energy/power/average-area/query_category_week`, a32)
  .post(`/datak/api/v1/iot/energy/power/average/query_category_week`, a33)

  .post(`/datak/api/v1/iot/energy/power/average-area/query_month`, a35)
  .post(`/datak/api/v1/iot/energy/power/average-area/query_week`, a36)
  .post(`/datak/api/v1/iot/energy/power/average-area/query_year`, a37)
  .post(`/datak/api/v1/iot/energy/water/average/query_week`, a38)
  .post(`/datak/api/v1/iot/energy/water/average/query_month`, a39)
  .post(`/datak/api/v1/iot/energy/water/average/query_year`, a40)
  .get(`/usr/api/v1/user/role/list`, a41)
  .get(`/dev/api/devices/detail/:dev_id`, a42)
  .get(`/dev/api/devices/branch/device-type/list`, a43)
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
  const psid = ctx.request.query.psid
  let data = []
  if (psid === 'mm001') {
    data = [
      {
        psid: 'i002',
        charge_name: 'Jack',
        role_name: 'AMS',
        role: 3
      },
      {
        psid: 'i003',
        charge_name: 'Ben',
        role_name: 'AMS',
        role: 3
      }
    ]
  }

  if (psid === 'i002') {
    data = [
      {
        psid: 'i005',
        charge_name: 'Merry',
        role_name: 'AMS',
        role: 3
      },
      {
        psid: 'i004',
        charge_name: 'ssBen',
        role_name: 'AMS',
        role: 3
      }
    ]
  }
  if (psid === 'i003') {
    data = [
      {
        psid: 'i006',
        charge_name: 'cat',
        role_name: 'AMS',
        role: 3
      },
      {
        psid: 'i007',
        charge_name: 'john',
        role_name: 'AMS',
        role: 3
      }
    ]
  }
  if (psid === 'i005') {
    data = [
      {
        psid: 'i010',
        charge_name: 'kaat',
        role_name: 'AMS',
        role: 3
      },
      {
        psid: 'i011',
        charge_name: 'loneyy',
        role_name: 'AMS',
        role: 3
      }
    ]
  }
  if (psid === 'i006') {
    data = [
      {
        psid: 'i0110',
        charge_name: 'bgds',
        role_name: 'AMS',
        role: 3
      },
      {
        psid: 'i014',
        charge_name: 'kon',
        role_name: 'AMS',
        role: 3
      }
    ]
  }
  if (psid === '100562884') {
    data = [
      {
        psid: 'i002',
        charge_name: 'Jack',
        role_name: 'AMS',
        role: 3
      },
      {
        psid: 'i003',
        charge_name: 'Ben',
        role_name: 'AMS',
        role: 3
      }
    ]
  }
  ctx.response.body = {
    code: 0,

    message: '',
    data: data

  }
}

async function a2(ctx, next) {
  console.log(ctx)
  const p =
  {
    "front": [{ "menu": "概况面板", "name": "Home", "isShow": true }, { "menu": "餐厅详情", "name": "RestaurantDetail", "isShow": true }, { "menu": "报警管理", "name": "FaultManagement", "isShow": true }, { "menu": "能源管理", "name": "EnergyManagement", "isShow": true }, { "menu": "万能工作表", "name": "Report", "isShow": true }, { "menu": "配置管理", "name": "Config", "isShow": true }]

  }
  ctx.response.body = { "code": 0, "data": { "access_token": "NzRmNTEwZmJlNDZiNDhmOWI0YmU1ZTM2ZDFhNmJmMzRjNmE1ZDg2ZDVlOGU0ZTY1OTNjN2M5ODczYWY0MmQzZQ==", "name": "RGM", "roleList": [{ "name": "RGM", "permissions": "{\"front\":[{\"menu\":\"概况面板\",\"name\":\"Home\",\"isShow\":true},{\"menu\":\"餐厅详情\",\"name\":\"RestaurantDetail\",\"isShow\":true},{\"menu\":\"报警管理\",\"name\":\"FaultManagement\",\"isShow\":true},{\"menu\":\"能源管理\",\"name\":\"EnergyManagement\",\"isShow\":true},{\"menu\":\"自动巡检\",\"name\":\"AutomaticInspection\",\"isShow\":true},{\"menu\":\"报表\",\"name\":\"Report\",\"isShow\":false},{\"menu\":\"配置管理\",\"name\":\"Config\",\"isShow\":true}],\"back\":[{\"menu\":\"餐厅设备配置\",\"name\":\"EquipmentConfig\",\"isShow\":true,\"buttons\":[{\"name\":\"激活\",\"btnid\":\"active\",\"checked\":true},{\"name\":\"配置基本信息\",\"btnid\":\"set\",\"checked\":true}]},{\"menu\":\"设备管理\",\"name\":\"ManageDevice\",\"children\":[{\"menu\":\"厨房设备\",\"name\":\"Kitchen\",\"isShow\":true,\"buttons\":[{\"name\":\"一键同步\",\"btnid\":\"async\",\"checked\":true},{\"name\":\"手自动配置\",\"btnid\":\"handauto\",\"checked\":true},{\"name\":\"品牌型号管理\",\"btnid\":\"manage\",\"checked\":true},{\"name\":\"新增\",\"btnid\":\"add\",\"checked\":true},{\"name\":\"删除\",\"btnid\":\"delete\",\"checked\":true},{\"name\":\"参数配置\",\"btnid\":\"set\",\"checked\":true},{\"name\":\"PM保养\",\"btnid\":\"pm\",\"checked\":true},{\"name\":\"零部件更换\",\"btnid\":\"replace\",\"checked\":true}]},{\"menu\":\"设施设备\",\"name\":\"Facility\",\"isShow\":true,\"buttons\":[{\"name\":\"一键同步\",\"btnid\":\"async\",\"checked\":true},{\"name\":\"手自动配置\",\"btnid\":\"set\",\"checked\":true},{\"name\":\"点位配置\",\"btnid\":\"set\",\"checked\":true},{\"name\":\"品牌型号管理\",\"btnid\":\"manage\",\"checked\":true},{\"name\":\"新增\",\"btnid\":\"add\",\"checked\":true},{\"name\":\"删除\",\"btnid\":\"delete\",\"checked\":true},{\"name\":\"PM保养\",\"btnid\":\"pm\",\"checked\":true},{\"name\":\"零部件更换\",\"btnid\":\"replace\",\"checked\":true}]}]},{\"menu\":\"规则管理\",\"name\":\"RuleManage\",\"children\":[{\"menu\":\"报警模板配置\",\"name\":\"AlarmTemplateConfig\",\"children\":[{\"menu\":\"厨房设备\",\"name\":\"AlarmKitchen\",\"isShow\":true,\"buttons\":[{\"name\":\"新增\",\"btnid\":\"add\",\"checked\":true},{\"name\":\"编辑\",\"btnid\":\"modify\",\"checked\":true},{\"name\":\"删除\",\"btnid\":\"delete\",\"checked\":true},{\"name\":\"报警规则配置\",\"btnid\":\"set\",\"checked\":true}]},{\"menu\":\"设施设备\",\"name\":\"AlarmFacility\",\"isShow\":true,\"buttons\":[{\"name\":\"新增\",\"btnid\":\"add\",\"checked\":true},{\"name\":\"编辑\",\"btnid\":\"modify\",\"checked\":true},{\"name\":\"删除\",\"btnid\":\"delete\",\"checked\":true},{\"name\":\"报警规则配置\",\"btnid\":\"set\",\"checked\":true}]}]},{\"menu\":\"值描述配置\",\"name\":\"ValueDesc\",\"isShow\":true,\"buttons\":[{\"name\":\"导入\",\"btnid\":\"import\",\"checked\":true}]}]},{\"menu\":\"更新管理\",\"name\":\"UpdateManage\",\"children\":[{\"menu\":\"网关更新\",\"name\":\"GatewayUpdate\",\"isShow\":true,\"buttons\":[{\"name\":\"更新\",\"btnid\":\"update\",\"checked\":true},{\"name\":\"查看更新日志\",\"btnid\":\"look\",\"checked\":true}]},{\"menu\":\"PLC更新\",\"name\":\"PLCUpadate\",\"isShow\":true,\"buttons\":[{\"name\":\"更新\",\"btnid\":\"update\",\"checked\":true},{\"name\":\"查看更新日志\",\"btnid\":\"look\",\"checked\":true}]}]},{\"menu\":\"权限管理\",\"name\":\"PermissionManage\",\"children\":[{\"menu\":\"用户列表\",\"name\":\"Table\",\"isShow\":true,\"buttons\":[{\"name\":\"新增\",\"btnid\":\"add\",\"checked\":true},{\"name\":\"编辑\",\"btnid\":\"modify\",\"checked\":true},{\"name\":\"删除\",\"btnid\":\"delete\",\"checked\":true},{\"name\":\"配置市场权限\",\"btnid\":\"set\",\"checked\":true}]},{\"menu\":\"角色权限\",\"name\":\"Permission\",\"isShow\":true,\"buttons\":[{\"name\":\"新增\",\"btnid\":\"add\",\"checked\":true},{\"name\":\"编辑\",\"btnid\":\"modify\",\"checked\":true},{\"name\":\"删除\",\"btnid\":\"delete\",\"checked\":true},{\"name\":\"配置前端菜单权限\",\"btnid\":\"frontSet\",\"checked\":true},{\"name\":\"配置后端菜单权限\",\"btnid\":\"backSet\",\"checked\":true}]}]},{\"menu\":\"启停计划设置\",\"name\":\"StartstopPlan\",\"isShow\":true,\"buttons\":[{\"name\":\"启用\",\"btnid\":\"enable\",\"checked\":true}]}]}", "remark": "1", "role": 15, "role_id": "cb446aa62c5f4c02bdf370a81ffe6777" }], "status": 1, "user_id": "100562883" }, "message": "" }
}
function getRdNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
async function a3(ctx, next) {
  console.log(ctx.request.query)
  const user_psid = ctx.request.query.user_psid
  let data = []
  if (user_psid === 'mm001') {
    data = [
      {
        psid: '?psid',
        charge_name: '?chargname',
        role_name: 'role name',
        role: 20,
        stores: [
          {
            store_id: 'beijing',
            name: '北京',
            longitude: '116.445088',
            latitude: '39.905416'
          },
          // {
          //   store_id: 'nanjing',
          //   name: '南京',
          //   longitude: '118.835012',
          //   latitude: '32.066477'
          // },
          // {
          //   store_id: 'shanghai',
          //   name: '上海',
          //   longitude: '121.447428',
          //   latitude: '31.161181'
          // }
        ]

      }
    ]
  }
  if (user_psid === 'i002') {
    data = [
      {
        psid: '?psid',
        charge_name: '?chargname',
        role_name: 'role name',
        role: 20,
        stores: [
          {
            store_id: 'nanjing',
            name: '南京',
            longitude: '118.835012',
            latitude: '32.066477'
          }
        ]

      }
    ]
  }
  if (user_psid === 'i005') {
    data = [
      {
        psid: '?psid',
        charge_name: '?chargname',
        role_name: 'role name',
        role: 20,
        stores: [
          {
            store_id: 'hangzhou',
            name: '杭州',
            longitude: '120.253328',
            latitude: '30.278507'
          },
          {
            store_id: 'i005-' + Math.floor(Math.random() * 100),
            name: 'i005-' + Math.floor(Math.random() * 100),
            longitude: '116.445088',
            latitude: '39.905416'
          }
        ]

      }
    ]
  }

  if (user_psid === 'i004') {
    data = [
      {
        psid: '?psid',
        charge_name: '?chargname',
        role_name: 'role name',
        role: 20,
        stores: [
          {
            store_id: 'I004-' + Math.floor(Math.random() * 100),
            name: 'I004-' + Math.floor(Math.random() * 100),
            longitude: '116.445088',
            latitude: '39.905416'
          }
        ]

      }
    ]
  }
  if (user_psid === '100562884') {
    data = [
      {
        psid: '?psid',
        charge_name: '?chargname',
        role_name: 'role name',
        role: 20,
        stores: [
          {
            store_id: 'I004-' + Math.floor(Math.random() * 100),
            name: 'I004-' + Math.floor(Math.random() * 100),
            longitude: getRdNum(77, 133),
            latitude: getRdNum(18.5, 44)
          },
          {
            store_id: 'I004-' + Math.floor(Math.random() * 100),
            name: 'I004-' + Math.floor(Math.random() * 100),
            longitude: getRdNum(77, 133),
            latitude: getRdNum(18.5, 44)
          },
          {
            store_id: 'I004-' + Math.floor(Math.random() * 100),
            name: 'I004-' + Math.floor(Math.random() * 100),
            longitude: getRdNum(77, 133),
            latitude: getRdNum(18.5, 44)
          },
          {
            store_id: 'I004-' + Math.floor(Math.random() * 100),
            name: 'I004-' + Math.floor(Math.random() * 100),
            longitude: getRdNum(77, 133),
            latitude: getRdNum(18.5, 44)
          },
          {
            store_id: 'I004-' + Math.floor(Math.random() * 100),
            name: 'I004-' + Math.floor(Math.random() * 100),
            longitude: getRdNum(77, 133),
            latitude: getRdNum(18.5, 44)
          },
          {
            store_id: 'I004-' + Math.floor(Math.random() * 100),
            name: 'I004-' + Math.floor(Math.random() * 100),
            longitude: getRdNum(77, 133),
            latitude: getRdNum(18.5, 44)
          }
        ]

      }
    ]
  }
  ctx.response.body = {
    code: 0,
    message: '',
    data: data
  }
}

async function a4(ctx, next) {
  console.log(ctx.request.query)
  let data = []
  for (let i = 0; i < 10; i++) {
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
  let fer03 = { top: "20", left: "44" }
  let warmer32 = { top: '20', left: '2' }
  let fridge32 = { top: '20', left: '10' }
  let wind = { top: '20', left: '15' }

  ctx.response.body = {
    code: 0,
    message: 'suc',
    total_page: 1,
    total: 2,
    data: [
      {
        dev_id: '123',
        serial: 'fry123',
        device_type: '2001',
        alias: '炸锅',
        branch_id: '?',
        branch_name: '??',
        branch_number: '?',
        status: 0,
        install_layout_pos: "{\"top\":\"36\",\"left\":\"89\"}",
        m_catetory: 0,
        s_category: '',
      },
      {
        dev_id: '123',
        serial: 'sundae123',
        device_type: '2027',
        alias: '圣代',
        branch_id: '?',
        branch_name: '??',
        branch_number: '?',
        status: 0,
        install_layout_pos: "{\"top\":\"86\",\"left\":\"59\"}",
        m_catetory: 0,
        s_category: '',
      },
      {
        dev_id: '123',
        serial: 'ice123',
        device_type: '2029',
        alias: '制冰机',
        branch_id: '?',
        branch_name: '??',
        branch_number: '?',
        status: 0,
        install_layout_pos: "{\"top\":\"26\",\"left\":\"59\"}",
        m_catetory: 0,
        s_category: '',
      },
      {
        dev_id: '123',
        serial: 'oven123',
        device_type: '2002',
        alias: '烤箱',
        branch_id: '?',
        branch_name: '??',
        branch_number: '?',
        status: 0,
        install_layout_pos: JSON.stringify(pos),
        m_catetory: 0,
        s_category: '',
      },
      {
        dev_id: '123',
        serial: 'drawer123',
        device_type: '2034',
        alias: '抽屉保温',
        branch_id: '?',
        branch_name: '??',
        branch_number: '?',
        status: 0,
        install_layout_pos: "{\"top\":\"43\",\"left\":\"89\"}",
        m_catetory: 0,
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
        m_catetory: 1,
        s_category: '',
      },
      {
        dev_id: 'ad123',
        serial: 'fre03',
        device_type: '2003',
        alias: '冷藏库',
        branch_id: '?',
        branch_name: '??',
        branch_number: '?',
        status: 0,
        install_layout_pos: JSON.stringify(fer03),
        m_catetory: 0,
        s_category: '',
      },
      {
        dev_id: 'warmer32',
        serial: 'warmer32',
        device_type: '2005',
        alias: '直立保温柜',
        branch_id: '?',
        branch_name: '??',
        branch_number: '?',
        status: 0,
        install_layout_pos: JSON.stringify(warmer32),
        m_catetory: 0,
        s_category: '',
      },
      {
        dev_id: 'fridge32vgfd',
        serial: 'fridge32',
        device_type: '2006',
        alias: '冷藏冰箱',
        branch_id: '?',
        branch_name: '??',
        branch_number: '?',
        status: 0,
        install_layout_pos: JSON.stringify(fridge32),
        m_catetory: 0,
        s_category: '',
      },
      {
        dev_id: 'windfd',
        serial: 'windfd',
        device_type: '2010',
        alias: '新排风',
        branch_id: '?',
        branch_name: '??',
        branch_number: '?',
        status: 0,
        install_layout_pos: JSON.stringify(wind),
        m_catetory: 1,
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
        serial: '1111',
        alias: '23543',
        inspects: [
          {
            day: '2019-12-01',
            alarms: 2
          },
          {
            day: '2019-12-02',
            alarms: 4
          },
          {
            day: '2019-12-04',
            alarms: 4
          }
        ]

      },
      {
        serial: '11gterg11',
        alias: '23543',
        inspects: [
          {
            day: '2019-12-01',
            alarms: 2
          },
          {
            day: '2019-12-02',
            alarms: 4
          },
          {
            day: '2019-12-04',
            alarms: 4
          }
        ]

      },
      {
        serial: '1111',
        alias: '炸锅3',
        inspects: [
          {
            day: '2019-12-01',
            alarms: 2
          },
          {
            day: '2019-12-02',
            alarms: 0
          },
          {
            day: '2019-12-04',
            alarms: 0
          }
        ]

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

async function a12_1(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: '',
    data: [
      {
        deviceId: 'BAOWEI',
        pushed: 1576980559685,
        serial: 'SZ17328032',
        deviceType: '2034',
        data: {
          state: 0,
          setTemU1: 3,
          setTemD1: 3,
          setTemU2: 43,
          setTemD2: 3,
          setTemU3: 3,
          setTemD3: 5,
          temU1: 4,
          temD1: 4,
          temU2: 7,
          temD2: 76,
          temU3: 32,
          temD3: 4,
          hTemError: 1,
          lTemError: 0,
          oCError: 0
        }
      },
      {
        deviceId: 'BAOWEI',
        pushed: 1576981559685,
        serial: 'SZ17328032',
        deviceType: '2034',
        data: {
          state: 0,
          setTemU1: 3,
          setTemD1: 3,
          setTemU2: 43,
          setTemD2: 3,
          setTemU3: 3,
          setTemD3: 5,
          temU1: 10,
          temD1: 4,
          temU2: 17,
          temD2: 76,
          temU3: 2,
          temD3: 4,
          hTemError: 1,
          lTemError: 0,
          oCError: 0
        }
      },
      {
        deviceId: 'BAOWEI',
        pushed: 1576990559685,
        serial: 'SZ17328032',
        deviceType: '2034',
        data: {
          state: 0,
          setTemU1: 3,
          setTemD1: 3,
          setTemU2: 43,
          setTemD2: 3,
          setTemU3: 3,
          setTemD3: 5,
          temU1: 4,
          temD1: 4,
          temU2: 7,
          temD2: 76,
          temU3: 3,
          temD3: 4,
          hTemError: 1,
          lTemError: 0,
          oCError: 0
        }
      }
    ]
  }
}

async function a14(ctx, next) {
  ctx.response.body =
    { "code": 0, "data": [{ "id": "a17b218b2c5444fc831b89c218789ba2", "tenant_id": "85bdd5674c024a9586f72a487eb102f3", "branch_id": "SH1028", "device_type": "2002", "serial": "E61SH12102322745", "day": "2019-12-12", "dashtype": "utilization", "data": "\"{\\\"use\\\":[{\\\"begin\\\":1576080067952,\\\"end\\\":1576098063438},{\\\"begin\\\":1576098636376,\\\"end\\\":1576100046569},{\\\"begin\\\":1576100050491,\\\"end\\\":1576101686620},{\\\"begin\\\":1576102526609,\\\"end\\\":1576103081705},{\\\"begin\\\":1576109406011,\\\"end\\\":1576110922203},{\\\"begin\\\":1576110971117,\\\"end\\\":1576111507202},{\\\"begin\\\":1576112561254,\\\"end\\\":1576113298305},{\\\"begin\\\":1576113326250,\\\"end\\\":1576113817331},{\\\"begin\\\":1576117372488,\\\"end\\\":1576118967642},{\\\"begin\\\":1576123517816,\\\"end\\\":1576125037981},{\\\"begin\\\":1576134048421,\\\"end\\\":1576135378556},{\\\"begin\\\":1576137978643,\\\"end\\\":1576139499795},{\\\"begin\\\":1576143352966,\\\"end\\\":1576145154235},{\\\"begin\\\":1576145753168,\\\"end\\\":1576147110227},{\\\"begin\\\":1576148523244,\\\"end\\\":1576149590419},{\\\"begin\\\":1576149643321,\\\"end\\\":1576150770453},{\\\"begin\\\":1576151549419,\\\"end\\\":1576155559737},{\\\"begin\\\":1576155628679,\\\"end\\\":1576156384771},{\\\"begin\\\":1576156838765,\\\"end\\\":1576157669869}],\\\"idle\\\":[{\\\"begin\\\":1576098063438,\\\"end\\\":1576098636376},{\\\"begin\\\":1576100046569,\\\"end\\\":1576100050491},{\\\"begin\\\":1576101686620,\\\"end\\\":1576102526609},{\\\"begin\\\":1576103081705,\\\"end\\\":1576109406011},{\\\"begin\\\":1576110922203,\\\"end\\\":1576110971117},{\\\"begin\\\":1576111507202,\\\"end\\\":1576112561254},{\\\"begin\\\":1576113298305,\\\"end\\\":1576113326250},{\\\"begin\\\":1576113817331,\\\"end\\\":1576117372488},{\\\"begin\\\":1576118967642,\\\"end\\\":1576123517816},{\\\"begin\\\":1576125037981,\\\"end\\\":1576134048421},{\\\"begin\\\":1576135378556,\\\"end\\\":1576137978643},{\\\"begin\\\":1576139499795,\\\"end\\\":1576143352966},{\\\"begin\\\":1576145154235,\\\"end\\\":1576145753168},{\\\"begin\\\":1576147110227,\\\"end\\\":1576148523244},{\\\"begin\\\":1576149590419,\\\"end\\\":1576149643321},{\\\"begin\\\":1576150770453,\\\"end\\\":1576151549419},{\\\"begin\\\":1576155559737,\\\"end\\\":1576155628679},{\\\"begin\\\":1576156384771,\\\"end\\\":1576156838765},{\\\"begin\\\":1576157669869,\\\"end\\\":1576166469200}],\\\"off\\\":[]}\"", "create_time": "2019-12-12T23:59:51+08:00" }], "message": "success", "total": 1, "total_page": 1 }

}

async function a15(ctx, next) {
  ctx.response.body = { "code": 0, "data": [{ "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "00:00", "total": 0, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "01:00", "total": 0, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "02:00", "total": 0, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "03:00", "total": 2.8, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "04:00", "total": 30.4, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "05:00", "total": 46.9, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "06:00", "total": 9.8, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "07:00", "total": 9.8, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "08:00", "total": 12.8, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "09:00", "total": 14.8, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "10:00", "total": 18.5, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "11:00", "total": 18.9, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "12:00", "total": 20.5, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "13:00", "total": 20.5, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "14:00", "total": 20.5, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "15:00", "total": 22.1, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "16:00", "total": 24.5, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "17:00", "total": 24.6, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "18:00", "total": 26.9, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "19:00", "total": 29.3, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "20:00", "total": 31.6, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "21:00", "total": 33.4, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "22:00", "total": 35, "create_time": "0001-01-01T00:00:00Z" }, { "id": "", "tenant_id": "", "branch_number": "", "power_type": 0, "device_type": "", "serial": "", "day": "", "hour": "23:00", "total": 35, "create_time": "0001-01-01T00:00:00Z" }], "message": "success" }
}

async function a16(ctx, next) {
  ctx.response.body = { "code": 0, "data": [{ "id": "6fd4c7c0757944289af8299ed308c341", "tenant_id": "85bdd5674c024a9586f72a487eb102f3", "branch_id": "SH1028", "device_type": "2019", "serial": "DE055VB", "day": "2019-12-14", "dashtype": "haccp", "data": "\"{\\\"vat\\\":0,\\\"chNR\\\":\\\"2157\\\",\\\"program\\\":\\\"原味鸡\\\",\\\"startTime\\\":1576317376760,\\\"endTime\\\":1576318217661,\\\"quantity\\\":4,\\\"programData\\\":[{\\\"time\\\":0,\\\"tem\\\":335.0},{\\\"time\\\":9,\\\"tem\\\":332.0},{\\\"time\\\":14,\\\"tem\\\":330.0},{\\\"time\\\":19,\\\"tem\\\":328.0},{\\\"time\\\":27,\\\"tem\\\":326.0},{\\\"time\\\":62,\\\"tem\\\":324.0},{\\\"time\\\":95,\\\"tem\\\":321.0},{\\\"time\\\":122,\\\"tem\\\":319.0},{\\\"time\\\":146,\\\"tem\\\":317.0},{\\\"time\\\":168,\\\"tem\\\":315.0},{\\\"time\\\":192,\\\"tem\\\":313.0},{\\\"time\\\":217,\\\"tem\\\":311.0},{\\\"time\\\":240,\\\"tem\\\":309.0},{\\\"time\\\":269,\\\"tem\\\":307.0},{\\\"time\\\":302,\\\"tem\\\":305.0},{\\\"time\\\":336,\\\"tem\\\":302.0},{\\\"time\\\":369,\\\"tem\\\":300.0},{\\\"time\\\":403,\\\"tem\\\":298.0},{\\\"time\\\":438,\\\"tem\\\":296.0},{\\\"time\\\":474,\\\"tem\\\":294.0},{\\\"time\\\":512,\\\"tem\\\":292.0},{\\\"time\\\":557,\\\"tem\\\":290.0},{\\\"time\\\":604,\\\"tem\\\":288.0},{\\\"time\\\":650,\\\"tem\\\":286.0},{\\\"time\\\":697,\\\"tem\\\":283.0},{\\\"time\\\":747,\\\"tem\\\":281.0},{\\\"time\\\":818,\\\"tem\\\":284.0},{\\\"time\\\":839,\\\"tem\\\":286.0},{\\\"time\\\":840,\\\"tem\\\":286.0}]}\"", "create_time": "2019-12-14T18:08:57+08:00" }, { "id": "f4a6a7fb162946bc8fc2e36edcc57e60", "tenant_id": "85bdd5674c024a9586f72a487eb102f3", "branch_id": "SH1028", "device_type": "2019", "serial": "DE055VB", "day": "2019-12-14", "dashtype": "haccp", "data": "\"{\\\"vat\\\":0,\\\"chNR\\\":\\\"2150\\\",\\\"program\\\":\\\"原味鸡\\\",\\\"startTime\\\":1576314690733,\\\"endTime\\\":1576315530641,\\\"quantity\\\":4,\\\"programData\\\":[{\\\"time\\\":0,\\\"tem\\\":342.0},{\\\"time\\\":4,\\\"tem\\\":340.0},{\\\"time\\\":10,\\\"tem\\\":338.0},{\\\"time\\\":16,\\\"tem\\\":336.0},{\\\"time\\\":22,\\\"tem\\\":333.0},{\\\"time\\\":29,\\\"tem\\\":331.0},{\\\"time\\\":37,\\\"tem\\\":329.0},{\\\"time\\\":48,\\\"tem\\\":327.0},{\\\"time\\\":67,\\\"tem\\\":325.0},{\\\"time\\\":89,\\\"tem\\\":323.0},{\\\"time\\\":113,\\\"tem\\\":320.0},{\\\"time\\\":136,\\\"tem\\\":318.0},{\\\"time\\\":157,\\\"tem\\\":316.0},{\\\"time\\\":179,\\\"tem\\\":314.0},{\\\"time\\\":200,\\\"tem\\\":312.0},{\\\"time\\\":220,\\\"tem\\\":310.0},{\\\"time\\\":242,\\\"tem\\\":308.0},{\\\"time\\\":267,\\\"tem\\\":306.0},{\\\"time\\\":292,\\\"tem\\\":304.0},{\\\"time\\\":318,\\\"tem\\\":301.0},{\\\"time\\\":343,\\\"tem\\\":299.0},{\\\"time\\\":369,\\\"tem\\\":297.0},{\\\"time\\\":393,\\\"tem\\\":295.0},{\\\"time\\\":419,\\\"tem\\\":293.0},{\\\"time\\\":449,\\\"tem\\\":291.0},{\\\"time\\\":480,\\\"tem\\\":289.0},{\\\"time\\\":512,\\\"tem\\\":287.0},{\\\"time\\\":545,\\\"tem\\\":285.0},{\\\"time\\\":578,\\\"tem\\\":283.0},{\\\"time\\\":619,\\\"tem\\\":280.0},{\\\"time\\\":794,\\\"tem\\\":283.0},{\\\"time\\\":816,\\\"tem\\\":285.0},{\\\"time\\\":835,\\\"tem\\\":287.0},{\\\"time\\\":839,\\\"tem\\\":287.0}]}\"", "create_time": "2019-12-14T17:24:10+08:00" }, { "id": "0e56a68dd2a84976bcfc5ab1e3e76eb1", "tenant_id": "85bdd5674c024a9586f72a487eb102f3", "branch_id": "SH1028", "device_type": "2019", "serial": "DE055VB", "day": "2019-12-14", "dashtype": "haccp", "data": "\"{\\\"vat\\\":0,\\\"chNR\\\":\\\"2140\\\",\\\"program\\\":\\\"原味鸡\\\",\\\"startTime\\\":1576309338692,\\\"endTime\\\":1576310179599,\\\"quantity\\\":6,\\\"programData\\\":[{\\\"time\\\":0,\\\"tem\\\":340.0},{\\\"time\\\":5,\\\"tem\\\":337.0},{\\\"time\\\":8,\\\"tem\\\":335.0},{\\\"time\\\":11,\\\"tem\\\":333.0},{\\\"time\\\":14,\\\"tem\\\":331.0},{\\\"time\\\":18,\\\"tem\\\":328.0},{\\\"time\\\":23,\\\"tem\\\":326.0},{\\\"time\\\":30,\\\"tem\\\":323.0},{\\\"time\\\":38,\\\"tem\\\":321.0},{\\\"time\\\":64,\\\"tem\\\":319.0},{\\\"time\\\":103,\\\"tem\\\":317.0},{\\\"time\\\":119,\\\"tem\\\":315.0},{\\\"time\\\":133,\\\"tem\\\":312.0},{\\\"time\\\":147,\\\"tem\\\":310.0},{\\\"time\\\":161,\\\"tem\\\":308.0},{\\\"time\\\":177,\\\"tem\\\":306.0},{\\\"time\\\":194,\\\"tem\\\":304.0},{\\\"time\\\":211,\\\"tem\\\":302.0},{\\\"time\\\":228,\\\"tem\\\":300.0},{\\\"time\\\":245,\\\"tem\\\":297.0},{\\\"time\\\":262,\\\"tem\\\":295.0},{\\\"time\\\":280,\\\"tem\\\":293.0},{\\\"time\\\":301,\\\"tem\\\":291.0},{\\\"time\\\":323,\\\"tem\\\":289.0},{\\\"time\\\":344,\\\"tem\\\":287.0},{\\\"time\\\":365,\\\"tem\\\":285.0},{\\\"time\\\":386,\\\"tem\\\":283.0},{\\\"time\\\":409,\\\"tem\\\":280.0},{\\\"time\\\":514,\\\"tem\\\":283.0},{\\\"time\\\":561,\\\"tem\\\":280.0},{\\\"time\\\":656,\\\"tem\\\":283.0},{\\\"time\\\":710,\\\"tem\\\":280.0},{\\\"time\\\":782,\\\"tem\\\":283.0},{\\\"time\\\":800,\\\"tem\\\":285.0},{\\\"time\\\":824,\\\"tem\\\":287.0},{\\\"time\\\":840,\\\"tem\\\":287.0}]}\"", "create_time": "2019-12-14T15:54:59+08:00" }, { "id": "31a9f4d3fea5469487a92f503b582150", "tenant_id": "85bdd5674c024a9586f72a487eb102f3", "branch_id": "SH1028", "device_type": "2019", "serial": "DE055VB", "day": "2019-12-14", "dashtype": "haccp", "data": "\"{\\\"vat\\\":0,\\\"chNR\\\":\\\"2133\\\",\\\"program\\\":\\\"原味鸡\\\",\\\"startTime\\\":1576306221777,\\\"endTime\\\":1576307062640,\\\"quantity\\\":4,\\\"programData\\\":[{\\\"time\\\":0,\\\"tem\\\":337.0},{\\\"time\\\":8,\\\"tem\\\":335.0},{\\\"time\\\":13,\\\"tem\\\":332.0},{\\\"time\\\":18,\\\"tem\\\":330.0},{\\\"time\\\":24,\\\"tem\\\":328.0},{\\\"time\\\":33,\\\"tem\\\":326.0},{\\\"time\\\":56,\\\"tem\\\":324.0},{\\\"time\\\":78,\\\"tem\\\":322.0},{\\\"time\\\":99,\\\"tem\\\":319.0},{\\\"time\\\":118,\\\"tem\\\":317.0},{\\\"time\\\":137,\\\"tem\\\":315.0},{\\\"time\\\":155,\\\"tem\\\":313.0},{\\\"time\\\":173,\\\"tem\\\":311.0},{\\\"time\\\":191,\\\"tem\\\":309.0},{\\\"time\\\":213,\\\"tem\\\":307.0},{\\\"time\\\":235,\\\"tem\\\":305.0},{\\\"time\\\":258,\\\"tem\\\":303.0},{\\\"time\\\":282,\\\"tem\\\":300.0},{\\\"time\\\":303,\\\"tem\\\":298.0},{\\\"time\\\":325,\\\"tem\\\":296.0},{\\\"time\\\":348,\\\"tem\\\":294.0},{\\\"time\\\":374,\\\"tem\\\":292.0},{\\\"time\\\":403,\\\"tem\\\":290.0},{\\\"time\\\":434,\\\"tem\\\":288.0},{\\\"time\\\":464,\\\"tem\\\":286.0},{\\\"time\\\":494,\\\"tem\\\":284.0},{\\\"time\\\":525,\\\"tem\\\":281.0},{\\\"time\\\":831,\\\"tem\\\":284.0},{\\\"time\\\":840,\\\"tem\\\":284.0}]}\"", "create_time": "2019-12-14T15:03:02+08:00" }, { "id": "be57df7a3c9c4768be05a62931c22646", "tenant_id": "85bdd5674c024a9586f72a487eb102f3", "branch_id": "SH1028", "device_type": "2019", "serial": "DE055VB", "day": "2019-12-14", "dashtype": "haccp", "data": "\"{\\\"vat\\\":0,\\\"chNR\\\":\\\"2131\\\",\\\"program\\\":\\\"原味鸡\\\",\\\"startTime\\\":1576304928650,\\\"endTime\\\":1576305769548,\\\"quantity\\\":4,\\\"programData\\\":[{\\\"time\\\":0,\\\"tem\\\":335.0},{\\\"time\\\":6,\\\"tem\\\":333.0},{\\\"time\\\":10,\\\"tem\\\":330.0},{\\\"time\\\":14,\\\"tem\\\":328.0},{\\\"time\\\":18,\\\"tem\\\":326.0},{\\\"time\\\":23,\\\"tem\\\":324.0},{\\\"time\\\":29,\\\"tem\\\":322.0},{\\\"time\\\":38,\\\"tem\\\":319.0},{\\\"time\\\":49,\\\"tem\\\":317.0},{\\\"time\\\":62,\\\"tem\\\":315.0},{\\\"time\\\":76,\\\"tem\\\":313.0},{\\\"time\\\":91,\\\"tem\\\":311.0},{\\\"time\\\":107,\\\"tem\\\":309.0},{\\\"time\\\":127,\\\"tem\\\":307.0},{\\\"time\\\":148,\\\"tem\\\":305.0},{\\\"time\\\":169,\\\"tem\\\":302.0},{\\\"time\\\":190,\\\"tem\\\":300.0},{\\\"time\\\":209,\\\"tem\\\":298.0},{\\\"time\\\":230,\\\"tem\\\":296.0},{\\\"time\\\":250,\\\"tem\\\":294.0},{\\\"time\\\":271,\\\"tem\\\":292.0},{\\\"time\\\":296,\\\"tem\\\":290.0},{\\\"time\\\":323,\\\"tem\\\":288.0},{\\\"time\\\":345,\\\"tem\\\":285.0},{\\\"time\\\":369,\\\"tem\\\":283.0},{\\\"time\\\":393,\\\"tem\\\":281.0},{\\\"time\\\":822,\\\"tem\\\":283.0},{\\\"time\\\":840,\\\"tem\\\":283.0}]}\"", "create_time": "2019-12-14T14:41:28+08:00" }, { "id": "bdc386de2fb14d8eb051acb8a898ba57", "tenant_id": "85bdd5674c024a9586f72a487eb102f3", "branch_id": "SH1028", "device_type": "2019", "serial": "DE055VB", "day": "2019-12-14", "dashtype": "haccp", "data": "\"{\\\"vat\\\":0,\\\"chNR\\\":\\\"2122\\\",\\\"program\\\":\\\"原味鸡\\\",\\\"startTime\\\":1576296095565,\\\"endTime\\\":1576296936486,\\\"quantity\\\":6,\\\"programData\\\":[{\\\"time\\\":0,\\\"tem\\\":340.0},{\\\"time\\\":8,\\\"tem\\\":338.0},{\\\"time\\\":14,\\\"tem\\\":336.0},{\\\"time\\\":18,\\\"tem\\\":334.0},{\\\"time\\\":22,\\\"tem\\\":331.0},{\\\"time\\\":26,\\\"tem\\\":329.0},{\\\"time\\\":29,\\\"tem\\\":326.0},{\\\"time\\\":34,\\\"tem\\\":324.0},{\\\"time\\\":40,\\\"tem\\\":322.0},{\\\"time\\\":51,\\\"tem\\\":319.0},{\\\"time\\\":75,\\\"tem\\\":317.0},{\\\"time\\\":103,\\\"tem\\\":315.0},{\\\"time\\\":118,\\\"tem\\\":313.0},{\\\"time\\\":131,\\\"tem\\\":311.0},{\\\"time\\\":143,\\\"tem\\\":309.0},{\\\"time\\\":157,\\\"tem\\\":307.0},{\\\"time\\\":172,\\\"tem\\\":305.0},{\\\"time\\\":186,\\\"tem\\\":302.0},{\\\"time\\\":202,\\\"tem\\\":300.0},{\\\"time\\\":217,\\\"tem\\\":298.0},{\\\"time\\\":233,\\\"tem\\\":296.0},{\\\"time\\\":248,\\\"tem\\\":294.0},{\\\"time\\\":264,\\\"tem\\\":292.0},{\\\"time\\\":283,\\\"tem\\\":290.0},{\\\"time\\\":304,\\\"tem\\\":288.0},{\\\"time\\\":322,\\\"tem\\\":286.0},{\\\"time\\\":341,\\\"tem\\\":284.0},{\\\"time\\\":362,\\\"tem\\\":281.0},{\\\"time\\\":383,\\\"tem\\\":279.0},{\\\"time\\\":490,\\\"tem\\\":281.0},{\\\"time\\\":790,\\\"tem\\\":283.0},{\\\"time\\\":811,\\\"tem\\\":286.0},{\\\"time\\\":840,\\\"tem\\\":286.0}]}\"", "create_time": "2019-12-14T12:14:15+08:00" }, { "id": "a31050ba473f47589a091cc0ab47f5fc", "tenant_id": "85bdd5674c024a9586f72a487eb102f3", "branch_id": "SH1028", "device_type": "2019", "serial": "DE055VB", "day": "2019-12-14", "dashtype": "haccp", "data": "\"{\\\"vat\\\":0,\\\"chNR\\\":\\\"2114\\\",\\\"program\\\":\\\"原味鸡\\\",\\\"startTime\\\":1576292249552,\\\"endTime\\\":1576293090464,\\\"quantity\\\":6,\\\"programData\\\":[{\\\"time\\\":0,\\\"tem\\\":341.0},{\\\"time\\\":4,\\\"tem\\\":338.0},{\\\"time\\\":7,\\\"tem\\\":336.0},{\\\"time\\\":10,\\\"tem\\\":334.0},{\\\"time\\\":14,\\\"tem\\\":331.0},{\\\"time\\\":18,\\\"tem\\\":329.0},{\\\"time\\\":22,\\\"tem\\\":326.0},{\\\"time\\\":27,\\\"tem\\\":324.0},{\\\"time\\\":34,\\\"tem\\\":322.0},{\\\"time\\\":51,\\\"tem\\\":320.0},{\\\"time\\\":95,\\\"tem\\\":318.0},{\\\"time\\\":108,\\\"tem\\\":316.0},{\\\"time\\\":122,\\\"tem\\\":314.0},{\\\"time\\\":135,\\\"tem\\\":311.0},{\\\"time\\\":149,\\\"tem\\\":309.0},{\\\"time\\\":164,\\\"tem\\\":307.0},{\\\"time\\\":181,\\\"tem\\\":305.0},{\\\"time\\\":199,\\\"tem\\\":303.0},{\\\"time\\\":216,\\\"tem\\\":301.0},{\\\"time\\\":232,\\\"tem\\\":299.0},{\\\"time\\\":248,\\\"tem\\\":297.0},{\\\"time\\\":265,\\\"tem\\\":295.0},{\\\"time\\\":281,\\\"tem\\\":292.0},{\\\"time\\\":301,\\\"tem\\\":290.0},{\\\"time\\\":322,\\\"tem\\\":288.0},{\\\"time\\\":343,\\\"tem\\\":286.0},{\\\"time\\\":364,\\\"tem\\\":284.0},{\\\"time\\\":385,\\\"tem\\\":282.0},{\\\"time\\\":408,\\\"tem\\\":280.0},{\\\"time\\\":493,\\\"tem\\\":282.0},{\\\"time\\\":584,\\\"tem\\\":280.0},{\\\"time\\\":647,\\\"tem\\\":282.0},{\\\"time\\\":790,\\\"tem\\\":284.0},{\\\"time\\\":810,\\\"tem\\\":286.0},{\\\"time\\\":840,\\\"tem\\\":286.0}]}\"", "create_time": "2019-12-14T11:10:09+08:00" }, { "id": "b280d74b7fc8499e8deea8fa97f43a90", "tenant_id": "85bdd5674c024a9586f72a487eb102f3", "branch_id": "SH1028", "device_type": "2019", "serial": "DE055VB", "day": "2019-12-14", "dashtype": "haccp", "data": "\"{\\\"vat\\\":0,\\\"chNR\\\":\\\"2105\\\",\\\"program\\\":\\\"原味鸡\\\",\\\"startTime\\\":1576289625514,\\\"endTime\\\":1576290466438,\\\"quantity\\\":4,\\\"programData\\\":[{\\\"time\\\":0,\\\"tem\\\":336.0},{\\\"time\\\":5,\\\"tem\\\":334.0},{\\\"time\\\":8,\\\"tem\\\":332.0},{\\\"time\\\":12,\\\"tem\\\":329.0},{\\\"time\\\":16,\\\"tem\\\":327.0},{\\\"time\\\":22,\\\"tem\\\":325.0},{\\\"time\\\":31,\\\"tem\\\":323.0},{\\\"time\\\":53,\\\"tem\\\":321.0},{\\\"time\\\":75,\\\"tem\\\":319.0},{\\\"time\\\":95,\\\"tem\\\":316.0},{\\\"time\\\":113,\\\"tem\\\":314.0},{\\\"time\\\":129,\\\"tem\\\":312.0},{\\\"time\\\":144,\\\"tem\\\":310.0},{\\\"time\\\":160,\\\"tem\\\":308.0},{\\\"time\\\":180,\\\"tem\\\":306.0},{\\\"time\\\":200,\\\"tem\\\":304.0},{\\\"time\\\":219,\\\"tem\\\":302.0},{\\\"time\\\":238,\\\"tem\\\":300.0},{\\\"time\\\":258,\\\"tem\\\":297.0},{\\\"time\\\":278,\\\"tem\\\":295.0},{\\\"time\\\":297,\\\"tem\\\":293.0},{\\\"time\\\":319,\\\"tem\\\":291.0},{\\\"time\\\":342,\\\"tem\\\":289.0},{\\\"time\\\":364,\\\"tem\\\":287.0},{\\\"time\\\":389,\\\"tem\\\":285.0},{\\\"time\\\":413,\\\"tem\\\":283.0},{\\\"time\\\":439,\\\"tem\\\":281.0},{\\\"time\\\":812,\\\"tem\\\":283.0},{\\\"time\\\":840,\\\"tem\\\":283.0}]}\"", "create_time": "2019-12-14T10:26:25+08:00" }, { "id": "98c925b91bbc4566959a823eab6f5cbd", "tenant_id": "85bdd5674c024a9586f72a487eb102f3", "branch_id": "SH1028", "device_type": "2019", "serial": "DE055VB", "day": "2019-12-14", "dashtype": "haccp", "data": "\"{\\\"vat\\\":0,\\\"chNR\\\":\\\"2099\\\",\\\"program\\\":\\\"原味鸡\\\",\\\"startTime\\\":1576286245494,\\\"endTime\\\":1576287086399,\\\"quantity\\\":4,\\\"programData\\\":[{\\\"time\\\":0,\\\"tem\\\":337.0},{\\\"time\\\":2,\\\"tem\\\":335.0},{\\\"time\\\":5,\\\"tem\\\":333.0},{\\\"time\\\":8,\\\"tem\\\":330.0},{\\\"time\\\":11,\\\"tem\\\":328.0},{\\\"time\\\":15,\\\"tem\\\":325.0},{\\\"time\\\":20,\\\"tem\\\":323.0},{\\\"time\\\":26,\\\"tem\\\":321.0},{\\\"time\\\":34,\\\"tem\\\":319.0},{\\\"time\\\":48,\\\"tem\\\":317.0},{\\\"time\\\":62,\\\"tem\\\":315.0},{\\\"time\\\":76,\\\"tem\\\":312.0},{\\\"time\\\":90,\\\"tem\\\":310.0},{\\\"time\\\":105,\\\"tem\\\":308.0},{\\\"time\\\":124,\\\"tem\\\":306.0},{\\\"time\\\":144,\\\"tem\\\":304.0},{\\\"time\\\":163,\\\"tem\\\":302.0},{\\\"time\\\":182,\\\"tem\\\":300.0},{\\\"time\\\":200,\\\"tem\\\":298.0},{\\\"time\\\":218,\\\"tem\\\":295.0},{\\\"time\\\":236,\\\"tem\\\":293.0},{\\\"time\\\":256,\\\"tem\\\":291.0},{\\\"time\\\":277,\\\"tem\\\":289.0},{\\\"time\\\":298,\\\"tem\\\":287.0},{\\\"time\\\":319,\\\"tem\\\":285.0},{\\\"time\\\":340,\\\"tem\\\":283.0},{\\\"time\\\":361,\\\"tem\\\":281.0},{\\\"time\\\":825,\\\"tem\\\":283.0},{\\\"time\\\":840,\\\"tem\\\":283.0}]}\"", "create_time": "2019-12-14T09:30:05+08:00" }, { "id": "6de5f58e7bd6446fa8189bd3679a237b", "tenant_id": "85bdd5674c024a9586f72a487eb102f3", "branch_id": "SH1028", "device_type": "2019", "serial": "DE055VB", "day": "2019-12-13", "dashtype": "haccp", "data": "\"{\\\"vat\\\":0,\\\"chNR\\\":\\\"2085\\\",\\\"program\\\":\\\"原味鸡\\\",\\\"startTime\\\":1576240389160,\\\"endTime\\\":1576241230070,\\\"quantity\\\":4,\\\"programData\\\":[{\\\"time\\\":0,\\\"tem\\\":328.0},{\\\"time\\\":4,\\\"tem\\\":326.0},{\\\"time\\\":7,\\\"tem\\\":323.0},{\\\"time\\\":11,\\\"tem\\\":321.0},{\\\"time\\\":15,\\\"tem\\\":318.0},{\\\"time\\\":20,\\\"tem\\\":316.0},{\\\"time\\\":26,\\\"tem\\\":314.0},{\\\"time\\\":38,\\\"tem\\\":312.0},{\\\"time\\\":59,\\\"tem\\\":309.0},{\\\"time\\\":76,\\\"tem\\\":307.0},{\\\"time\\\":95,\\\"tem\\\":305.0},{\\\"time\\\":111,\\\"tem\\\":303.0},{\\\"time\\\":128,\\\"tem\\\":301.0},{\\\"time\\\":147,\\\"tem\\\":299.0},{\\\"time\\\":167,\\\"tem\\\":297.0},{\\\"time\\\":186,\\\"tem\\\":295.0},{\\\"time\\\":204,\\\"tem\\\":293.0},{\\\"time\\\":225,\\\"tem\\\":290.0},{\\\"time\\\":246,\\\"tem\\\":288.0},{\\\"time\\\":267,\\\"tem\\\":286.0},{\\\"time\\\":287,\\\"tem\\\":284.0},{\\\"time\\\":307,\\\"tem\\\":282.0},{\\\"time\\\":329,\\\"tem\\\":280.0},{\\\"time\\\":501,\\\"tem\\\":282.0},{\\\"time\\\":829,\\\"tem\\\":284.0},{\\\"time\\\":840,\\\"tem\\\":284.0}]}\"", "create_time": "2019-12-13T20:45:51+08:00" }], "message": "success", "total": 47, "total_page": 5 }

}

async function a17(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: 's',
    total: 10,
    total_page: 1,
    data: [
      {
        btn_id: 'fdsa',
        btn: 1,
        data: [
          {
            epqc_category_code: '香辣鸡翅',
            cooking_time: 15
          },
          {
            epqc_category_code: '香辣鸡腿肉',
            cooking_time: 20
          }
        ]

      },
      {
        btn_id: 'fdsa',
        btn: 1,
        data: [
          {
            epqc_category_code: '香辣鸡翅',
            cooking_time: 15
          },
          {
            epqc_category_code: '香辣鸡腿肉',
            cooking_time: 20
          }
        ]

      },
      {
        btn_id: 'fdsa',
        btn: 1,
        data: [
          {
            epqc_category_code: '香辣鸡翅',
            cooking_time: 15
          },
          {
            epqc_category_code: '香辣鸡腿肉',
            cooking_time: 20
          }
        ]

      },
      {
        btn_id: 'fdsa',
        btn: 1,
        data: [
          {
            epqc_category_code: '香辣鸡翅',
            cooking_time: 15
          },
          {
            epqc_category_code: '香辣鸡腿肉',
            cooking_time: 20
          }
        ]

      },
      {
        btn_id: 'fdsa',
        btn: 1,
        data: [
          {
            epqc_category_code: '香辣鸡翅',
            cooking_time: 15
          },
          {
            epqc_category_code: '香辣鸡腿肉',
            cooking_time: 20
          }
        ]

      },
      {
        btn_id: 'fdsa',
        btn: 1,
        data: [
          {
            epqc_category_code: '香辣鸡翅',
            cooking_time: 15
          },
          {
            epqc_category_code: '香辣鸡腿肉',
            cooking_time: 20
          }
        ]

      },
      {
        btn_id: 'fdsa',
        btn: 1,
        data: [
          {
            epqc_category_code: '香辣鸡翅',
            cooking_time: 15
          },
          {
            epqc_category_code: '香辣鸡腿肉',
            cooking_time: 20
          }
        ]

      },
      {
        btn_id: 'fdsa',
        btn: 1,
        data: [
          {
            epqc_category_code: '香辣鸡翅',
            cooking_time: 15
          },
          {
            epqc_category_code: '香辣鸡腿肉',
            cooking_time: 20
          }
        ]

      },
      {
        btn_id: 'fdsa',
        btn: 1,
        data: [
          {
            epqc_category_code: '香辣鸡翅',
            cooking_time: 15
          },
          {
            epqc_category_code: '香辣鸡腿肉',
            cooking_time: 20
          }
        ]

      },
      {
        btn_id: 'fdsa',
        btn: 1,
        data: [
          {
            epqc_category_code: '香辣鸡翅',
            cooking_time: 15
          },
          {
            epqc_category_code: '香辣鸡腿肉',
            cooking_time: 20
          }
        ]

      }
    ]

  }
}


async function a18(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: '',
    data: [
      {
        except_level: 1,
        total: 42
      },
      {
        except_level: 2,
        total: 423
      },
      {
        except_level: 3,
        total: 4234
      }
      , {
        except_level: 4,
        total: 4265
      }
      ,
      {
        except_level: 5,
        total: 42436
      }, {
        except_level: 6,
        total: 6544
      }
    ]

  }
}

async function a19(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: '',
    data: {
      total: 10
    }

  }
}

async function a20(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: '',
    data: [
      {
        id: '2,',
        store_id: '325',
        floor: 1,
        sketch: 'https://tse3-mm.cn.bing.net/th/id/OIP.DdSVYKdAJBaSLL1Guf7WugHaFt?w=282&h=210&c=7&o=5&pid=1.7'
      },
      {
        id: '2,',
        store_id: '325',
        floor: 2,
        sketch: 'https://tse4-mm.cn.bing.net/th/id/OIP.vFFZqkJdE0QuTMoXt5AgvAHaF7?w=278&h=213&c=7&o=5&pid=1.7'
      }
    ]

  }
}

async function a21(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: '',
    data: {
      device_type: 1,
      total: 0
    }

  }
}


async function a22(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: '',
    total: 99999,
    data: [
      {
        day: '2019-12-01',
        average: 3,
        total: 453,
      },
      {
        day: '2019-12-02',
        average: 53,
        total: 453,
      }
    ]

  }
}


async function a23(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: '',
    total: 99999,
    data: [
      {
        groups: 1,
        total: 9999,
      },
      {
        groups: 2,
        total: 9998,
      },
      {
        groups: 3,
        total: 9997,
      }
    ]

  }
}

async function a24(ctx, next) {
  const ONE_DAY_MS = 24 * 3600 * 1000
  ctx.response.body = {
    code: 0,
    message: '',
    data: [
      {
        device_type: '2002',
        serial: 'FRYER001',
        alias: '一个炸锅',
        startup: 0,
        upload: 1577066918582 - ONE_DAY_MS,
        create_date: 1577066918582
      },
      {
        device_type: '2002',
        serial: 'FRYER001',
        alias: '一个炸锅',
        startup: 1,
        upload: 1577066998582 - ONE_DAY_MS,
        create_date: 1577066918582
      },
      {
        device_type: '2002',
        serial: 'FRYER001',
        alias: '一个炸锅',
        startup: 0,
        upload: 1577068918582 - ONE_DAY_MS,
        create_date: 1577066918582
      },
      {
        device_type: '2002',
        serial: 'FRYER001',
        alias: '一个炸锅',
        startup: 1,
        upload: 1577079918582 - ONE_DAY_MS,
        create_date: 1577066918582
      },
      {
        device_type: '2002',
        serial: 'FRYER001',
        alias: '一个炸锅',
        startup: 0,
        upload: 1577089918582 - ONE_DAY_MS,
        create_date: 1577066918582
      }
    ]

  }
}

async function a25(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: '',
    data: [
      {
        id: '123',
        weekday: -1,
        start: '05:00:01',
        stop: '12:00:20',
        open_auto: 0,
        close_auto: 0,
        repeats: 1
      },
      {
        id: '123',
        weekday: -1,
        start: '13:00:02',
        stop: '16:00:00',
        open_auto: 0,
        close_auto: 0,
        repeats: 1
      }
    ]

  }
}

async function a26(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: '',
    data: [
      {
        store_name: '北京',
        store_id: 'beijing',
        rgm_name: 'rgm_admin',
        activated: 1,
        banking_hour: 4,
        longitude: 4,
        latitude: 4
      },
      {
        store_name: '天津',
        store_id: 'tianjin',
        rgm_name: 'rgm_admin',
        activated: 1,
        banking_hour: 4,
        longitude: 4,
        latitude: 4

      }
      , {
        store_name: '南京',
        store_id: 'nanjing',
        rgm_name: 'rgm_admin',
        activated: 1,
        banking_hour: 4,
        longitude: 4,
        latitude: 4

      }
    ]
  }
}


async function a27(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: '',
    data: [
      {
        id: '235',
        user_id: 'd',
        name: 'rsc',
        value: "{\"config\":{\"checkedCityList\":[\"上海KFC\",\"上海PH\",\"无锡\",\"苏州\",\"南京\",\"浙江\",\"天津\",\"沈阳\",\"哈尔滨\",\"福州\",\"武汉\",\"湖南\",\"成都\",\"西安\",\"杭州\",\"青岛\",\"河南\"],\"checkedBrandList\":[\"PH HS\"],\"checkedCityLevelList\":[\"Tier 0\"],\"checkedRestaurantStatusList\":[],\"checkedKfcTypeList\":[],\"checkedPhTypeList\":[],\"checkedLsTypeList\":[],\"checkedCqsrTypeList\":[],\"checkedTacobellTypeList\":[],\"checkedCoffijoyTypeList\":[],\"checkedKitchenTypeList\":[],\"checkedDesignTypeList\":[],\"checkedReportTypeList\":[],\"checkedJoin\":[],\"checkedIsCooperate\":[],\"checkedDeskType\":[\"小型桌椅\"],\"checkedShoppingType\":[\"X/A\",\"客运站+D\",\"C+客运站\",\"客运站+C\",\"购物中心+C\",\"购物中滚+D\",\"购物中心\",\"专业市场+C\",\"交通枢纽+D\"],\"checkedChildPlayArea\":0,\"checkedElevator\":1,\"checkedBackdoor\":1,\"checkedSignboard\":0,\"checkedToilet\":0,\"restaurantInfo\":\"aaaaaaaa\",\"projectLeader\":\"abbbbbb\",\"projectEngineer\":\"cccccc\",\"projectManage\":\"ddddddddddddd\",\"checkedProjectTypeList\":[\"Major IE\"],\"actualDecoration\":{\"selectValue\":\"选项1\",\"value\":\"ggggggggggg\",\"value1\":\"nnnnnnnnnn\",\"componentValue\":\"ggggggggggg\",\"componentValue1\":\"nnnnnnnnnnnnnnnnnnnnnn\"},\"actualKitchen\":null,\"actualSeat\":null,\"rscMeeting\":null,\"houseExchangeDate\":{\"selectValue\":\"选项1\",\"value\":\"范德萨\",\"value1\":null},\"actualStart\":{\"selectValue\":\"选项2\",\"value\":\"nnnnnnnnnnnnnnnnnnnnnnn\",\"value1\":\"mmmmmmmmmmm\",\"isInclude\":true,\"componentValue\":\"bbbbbbbbb\",\"componentValue1\":\"mmmmmmmmmmm\"},\"actualEnd\":{\"selectValue\":\"选项2\",\"value\":null,\"value1\":null,\"isInclude\":true,\"componentValue1\":\"gbfdshbgfdf\",\"componentValue\":\"就没没没没没没没没没没没没没没没没没没\"},\"planOpen\":null,\"actualOpen\":{\"componentValue\":null,\"componentValue1\":\"广泛的\",\"selectValue\":null,\"isInclude\":null},\"firstInspect\":null,\"finalInspect\":null,\"closeAccount\":{\"componentValue\":\"bfdsfdg\",\"componentValue1\":\"gfdsbfdsb\",\"selectValue\":\"选项1\"},\"investCa\":null,\"estimate\":null,\"contractPrice\":null,\"finalPrice\":null,\"effectiveDuration\":null,\"baseArea\":{\"componentValue\":\"888888888888888888\",\"componentValue1\":\"00000000000000000\",\"selectValue\":\"选项2\"},\"buildArea\":null,\"designUploadDate\":null},\"query\":{\"temperture\":[],\"humAndEtha\":[\"outsideHumidity\",\"outsideEnthalpy\"],\"electric\":[],\"voltageCurrent\":[],\"waterVolume\":[\"复选框 A\"],\"duration\":[],\"other\":[],\"date\":[],\"alarmLevel\":[],\"deviceType\":[],\"deviceCategory\":[],\"brand\":[],\"model\":[]}}",
        update_time: new Date()
      }
    ]
  }
}

async function a28(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: '',
    total_page: 1,
    total: 1,
    data: [
      {
        collect_id: '1',
        device_type: '2002',
        name: '烤箱',
        meta_device_id: '?',
        sketch: [],
        disable: 0,
        m_category: 1,
        s_category: 3,
        open_way: 3,
        close_way: 3
      }
    ]

  }
}

async function a29(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: '',
    total_page: 1,
    total: 1,
    data: [
      {
        brand_id: '32',
        name: 'Nike',
        description: '',
        mf_name: '',
        mf_id: '',
        enable: 1
      },
      {
        brand_id: '31462',
        name: 'Adidas',
        description: '',
        mf_name: '',
        mf_id: '',
        enable: 1
      }
    ]
  }
}

async function a31(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: '',
    data: [
      {
        day: '2019-01-01',
        average: 39
      },
      {
        day: '2019-01-04',
        average: 30
      },
      {
        day: '2019-01-15',
        average: 49
      }
    ]

  }
}


async function a30(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: '',
    data: [
      {
        day: '2019-01-01',
        average: 39
      },
      {
        day: '2019-01-04',
        average: 30
      },
      {
        day: '2019-01-15',
        average: 49
      }
    ]

  }
}


async function a32(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: '',
    data: [
      {
        week: '1',
        average: 39
      },
      {
        week: '2',
        average: 30
      },
      {
        week: '3',
        average: 49
      }
    ]

  }
}
async function a33(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: '',
    data: [
      {
        week: '1',
        average: 39
      },
      {
        week: '2',
        average: 30
      },
      {
        week: '3',
        average: 49
      }
    ]

  }
}

async function a35(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: '',
    data: {
      average: 500
    }
  }
}


async function a36(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: '',
    data: [
      {
        week: 1,
        average: 3
      },
      {
        week: 2,
        average: 30
      }
    ]
  }
}


async function a37(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: '',
    data: [
      {
        year: 1,
        average: 300
      },
      {
        year: 2,
        average: 320
      }
    ]
  }
}

async function a38(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: '',
    data: [
      {
        week: 1,
        average: 30
      },
      {
        week: 2,
        average: 32.250
      }
    ]
  }
}


async function a39(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: '',
    data: [
      {
        month: 1,
        average: 30
      },
      {
        month: 2,
        average: 32.250
      }
    ]
  }
}


async function a40(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: '',
    data: [
      {
        year: 1,
        average: 3001
      },
      {
        year: 2,
        average: 3283.250
      }
    ]
  }
}

async function a41(ctx, next) {
  ctx.response.body = {
    "code": 0,
    "data": [
      {
        "name": "RGM",
        "permissions": "{\"front\":[{\"menu\":\"概况面板\",\"name\":\"Home\",\"isShow\":true},{\"menu\":\"餐厅详情\",\"name\":\"RestaurantDetail\",\"isShow\":true},{\"menu\":\"报警管理\",\"name\":\"FaultManagement\",\"isShow\":true},{\"menu\":\"能源管理\",\"name\":\"EnergyManagement\",\"isShow\":true},{\"menu\":\"自动巡检\",\"name\":\"AutomaticInspection\",\"isShow\":true},{\"menu\":\"报表\",\"name\":\"Report\",\"isShow\":false},{\"menu\":\"配置管理\",\"name\":\"Config\",\"isShow\":true}]}",
        "remark": "1",
        "role": 15,
        "role_id": "cb446aa62c5f4c02bdf370a81ffe6777"
      }
    ],
    "message": "",
    "total": 1,
    "total_page": 1
  }
}

async function a71(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: '',
    data: {
      dev_id: '3',
      first_access: '20200115',
      last_update: '2020215',
      status: 8
    }

  }
}

async function a72(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: '',
    data: {
      id: '32',
      tenant_id: '34',
      deviceType: '2002',
      deviceId: 'gfds',
      serial: 'fgfds',
      hubId: '43',
      upload: '20200102',
      pushed: '202005515',
      data: {}
    }

  }
}

async function a42(ctx, next) {
  ctx.response.body = {
    code: 0,
    message: '',
    data: {
      dev_id: 'xx',
      serial: 'I004-' + Math.floor(Math.random() * 100),
      alias: '冷藏库',
      device_type: '2003',
      branch_id: '324',
      branch_number: 'gfdsg',
      building: '',
      floor: 2,
      room: 3,
      topology: 4,
      topo_id: '435',
      secret_key: '435',
      sketchs: [],
      mf_id: 'gfeds',
      model_id: 'gfds',
      mtc_id: 'gfd',
      brand_id: 'bgfd',
      location: '',
      observer: '',
      mf_name: '',
      model_name: 'ITX',
      mtc_name: 'SGF',
      brand_name: 'GFDS',
      longitude: 'BFDS',
      latitude: 43,
      activated: 1,
      enable: 1,
      asset: 1,
      show_tip: 1,
      m_category: 1,
      s_category: 1,
      extra: ''
    }

  }
}

async function a43(ctx, next) {
  console.log(ctx.request.query.device_type)
  const deviceType = Number(ctx.request.query.device_type)
  let data = []
  if (deviceType === 2009) {
    data = [
      {
        dev_id: 'fdsa',
        serial: 'n',
        device_type: '2009',
        alias: '客区空调,',
        branch_id: '',
        branch_name: '',
        branch_number: "",
        building: "",
        floor: "",
        room: "",
        secret_key: "",
        sketchs: "",

        mf_name: "",
        model_name: "",
        mtc_name: "",
        brand_name: "",
        can_delete: "",
        location: "",
        observer: "",
        activated: "",
        enable: "",
        longitude: "",
        latitude: "",
        create_date: "",
        last_update: "",
        asset: "",
        show_tip: "",
        m_category: "",
        s_category: "",
        extra: "",
      }
    ]
  }

  if (deviceType === 2010) {
    data = [
      {
        dev_id: 'fdsa',
        serial: 'n',
        device_type: '2010',
        alias: '排风',
        branch_id: '',
        branch_name: '',
        branch_number: "",
        building: "",
        floor: "",
        room: "",
        secret_key: "",
        sketchs: "",

        mf_name: "",
        model_name: "",
        mtc_name: "",
        brand_name: "",
        can_delete: "",
        location: "",
        observer: "",
        activated: "",
        enable: "",
        longitude: "",
        latitude: "",
        create_date: "",
        last_update: "",
        asset: "",
        show_tip: "",
        m_category: "",
        s_category: "",
        extra: "",
      }
    ]
  }

  ctx.response.body = {
    code: 0,
    message: '',
    total_page: 10,
    total: 100,
    data: [data[0],data[0],data[0],data[0]]


  }
}
app.use(router.routes());
// listen

if (!module.parent) app.listen(3000);