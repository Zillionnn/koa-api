<template>
  <div class="oven_detail_page">
    <div class="info_bar">
      <label>序号:</label>
      <span>{{this.info.id}}</span>
      <label>烹饪程序:</label>
      <span>{{this.info.data.program}}</span>
      <label>时间:</label>
      <span>{{this.info.data.time}}</span>
    </div>
    <chart :options="options" ref="chart" :auto-resize="true" class="echarts"></chart>
    <div class="info_table">
      <table class="hp_table">
        <tr>
          <th>时间</th>
          <th>模式</th>
          <th>门状态</th>
          <th>柜内温度</th>
          <th>coreTempTarget</th>
          <th>机柜温度</th>
          <th>单位</th>
          <th>Energy</th>
          <th>1/2 Energy</th>
        </tr>
        <tr v-for="(item,index) in chartData" :key="index">
          <td>{{item.time}}</td>
          <td>{{item.mode}}</td>
          <td>{{formatDoor(item.door)}}</td>
          <td>{{item.cabinetTemp}}</td>
          <td>{{item.coreTempTarget}}</td>
          <td>{{item.coreTemp}}</td>
          <td>{{item.tempUnit}}</td>
          <td>{{item.energyOpt}}</td>
          <td>{{item.energyHalf}}</td>
        </tr>
      </table>

    </div>
    <!-- <el-pagination
        @current-change="handleCurrentChange"
        :current-page.sync="pagination.currentPage"
        :page-size="pagination.pageSize"
        layout="total, prev, pager, next"
        :total="pagination.total"
        style="float:right;margin-top: 7px;"
      ></el-pagination> -->
  </div>
</template>

<script>
import env from '@/conf/env'

export default {
  name: 'ovenDetail',
  components: {},
  props: ['info'],
  computed: {
    pagination () {
      let p = {
        total: this.info.data.data.length,
        currentPage: 1,
        pageSize: env.pagination.limit
      }
      return p
    },
    tempUnit () {
      let data = this.info.data.data

      for (let i = 0; i < data.length; i++) {
        let unit = data[i].tempUnit
        // console.log(i, unit)
        if (unit) {
          return unit
        }
      }
    },
    chartData () {
      return this.info.data.data
    },
    options () {
      let data = this.chartData
      // console.log(data)
      let cabinetTempArray = []
      let coreTempArray = []
      let xData = []
      data.forEach(element => {
        // console.log(element)
        cabinetTempArray.push(element.cabinetTemp)
        coreTempArray.push(element.coreTemp)
        xData.push(element.time)
      })
      let option = {
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis',
          formatter: (params, ticket) => {
            // console.log(params, ticket)
            let tipString = ''
            for (let i in params) {
              let key = params[i].seriesName
              let value = params[i].value
              //    else {
              tipString =
                tipString + key + ':' + value + '°' + this.tempUnit + '<br/>'
              //   }
              // X轴
              // tipString = tipString + params[i].axisValue
            }
            return tipString
          }
        },
        legend: {
          data: ['cabinetTemp', 'coreTemp'],
          textStyle: {
            color: '#fff'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        axisPointer: {
          lineStyle: {
            color: '#ffffff'
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: xData,
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#fff'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#fff'
            }
          }
        },
        series: [
          {
            name: 'cabinetTemp',
            type: 'line',
            smooth: true,
            data: cabinetTempArray,
            lineStyle: {
              color: 'orange'
            }
          },
          {
            name: 'coreTemp',
            type: 'line',
            smooth: true,
            data: coreTempArray,
            lineStyle: {
              color: '#009ce6'
            }
          }
        ]
      }
      return option
    }
  },
  data () {
    return {

    }
  },
  methods: {
    /**
     * 翻页
     */
    handleCurrentChange () {

    },
    formatDoor (val) {
      if (val === 'opened') {
        return `开启`
      } else {
        return `关闭`
      }
    }
  }
}
</script>

<style scoped lang="scss">
.oven_detail_page {
  width: 100%;
  height: 100%;
  color: #ffffff;
}
.echarts {
  width: 100%;
  height: 300px;
}
.info_bar {
  background: #282d31;
  color: #c4c9cd;
  padding: 10px;
  font-size: 13px;
  label {
    margin-left: 20px;
  }
}
.info_table {
  overflow: auto;
  height: 300px;
  margin-top: 35px;
}
.hp_table {
  position: relative;
  color: #ffffff;
  border: 0;
  width: 100%;
  font-size: 12px;
  border-collapse: collapse;
  // padding: 0;
  th {
    text-align: left;
    padding: 20px;
  }
  tr {
    height: 47px;
  }
  td {
    padding: 20px;
  }
  tr:nth-child(odd) {
    background: #282d31;
  }
  tr:nth-child(even) {
    background: #1e2327;
  }
}

@media screen and (max-device-width: 1366px){

.oven_detail_page {
  width: 100%;
  height: 100%;
  color: #ffffff;
}
.echarts {
  width: 100%;
  height: 180px;
}
.info_bar {
  background: #282d31;
  color: #c4c9cd;
  padding: 10px;
  label {
    margin-left: 20px;
  }
}
.info_table {
  overflow: auto;
  height: 200px;
  margin-top: 35px;
}
.hp_table {
  position: relative;
  color: #ffffff;
  border: 0;
  width: 100%;
  font-size: 12px;
  border-collapse: collapse;
  // padding: 0;
  th {
    text-align: left;
    padding: 20px;
  }
  tr {
    height: 47px;
  }
  td {
    padding: 20px;
  }
  tr:nth-child(odd) {
    background: #282d31;
  }
  tr:nth-child(even) {
    background: #1e2327;
  }
}
}
</style>
