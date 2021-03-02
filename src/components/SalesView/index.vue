<template>
  <div class="sales-view">
    <el-card
      shadow="hover"
      :body-style="{padding: '0 0 20px 0'}"
    >
      <template v-slot:header>
        <div class="menu-wrapper">
          <!-- mode='horizontal'表示水平排列 -->
          <el-menu
            mode="horizontal"
            :default-active="activeIndex"
            @select="onMenuSelect"
            class="sales-view-menu"
          >
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <el-radio-group
              v-model="radioSelect"
              size="small"
            >
              <el-radio-button label="今日"></el-radio-button>
              <el-radio-button label="本周"></el-radio-button>
              <el-radio-button label="本月"></el-radio-button>
              <el-radio-button label="今年"></el-radio-button>
            </el-radio-group>
            <!-- unlink-panels: 切换结束日期选择范围时，使得开始日期的选择范围不会跟着变换-->
            <el-date-picker
              type="daterange"
              v-model="date"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              size="small"
              unlink-panels
              :picker-options="pickerOptions"
              class="sales-view-date-picker"
            ></el-date-picker>
          </div>
        </div>
      </template>
      <div class="sales-view-chart-wrapper">
        <v-chart :options="chartOption" />
        <div class="sales-view-list">
          <div class="sales-view-title">排行榜</div>
          <div class="list-item-wrapper">
            <div
              class="list-item"
              v-for="item in rankDate"
              :key="item.no"
            >
              <!-- clss写法1 -->
              <!-- <div
              class="list-item-no"
              :class="+item.no<=3?'top-no':''"
            >{{item.no}}</div> -->
              <!-- class写法2 style也可以这么写-->
              <div :class="['list-item-no', +item.no<=3?'top-no':'']">{{item.no}}</div>
              <div class="list-item-name">{{item.name}}</div>
              <div class="list-item-money">{{item.money}}</div>
            </div>
          </div>

        </div>
      </div>
      <template>
        <div>222</div>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      radioSelect: '今日',
      date: null,
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            // 首先需要给一个时间段
            const start = new Date()
            const end = new Date()
            // 开始时间就是当前时间往前倒退一周
            // 通过start.setTime()来设置，传入的参数为时间戳，即距离  的毫秒数
            start.setTime(start.getTime() - 3600 * 24 * 7 * 1000)
            // 释放一个事件,注意事件名
            picker.$emit('pick', [start, end], true)
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            // 首先需要给一个时间段
            const start = new Date()
            const end = new Date()
            // 开始时间就是当前时间往前倒退一周
            // 通过start.setTime()来设置，传入的参数为时间戳，即距离  的毫秒数
            start.setTime(start.getTime() - 3600 * 24 * 30 * 1000)
            // 释放一个事件,注意事件名
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            // 首先需要给一个时间段
            const start = new Date()
            const end = new Date()
            // 开始时间就是当前时间往前倒退一周
            // 通过start.setTime()来设置，传入的参数为时间戳，即距离  的毫秒数
            start.setTime(start.getTime() - 3600 * 24 * 90 * 1000)
            // 释放一个事件,注意事件名
            picker.$emit('pick', [start, end])
          }
        }
        ]
      },
      chartOption: {
        title: {
          text: '年度销售额',
          textStyle: {
            fontSize: 12,
            color: '#666'
          },
          left: 25,
          top: 20

        },
        xAxis: {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          // 短竖线放在label标签中间
          axisTick: {
            alignWithLabel: true,
            lineStyle: { color: '#999' }

          },
          axisLine: {
            lineStyle: {
              color: '#999'
            }
          },
          axisLabel: {
            color: '#333'
          }
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: 'dotted',
              color: '#eee'
            }
          }
        },
        series: [
          {
            type: 'bar',
            barWidth: '35%',
            data: [200, 250, 300, 350, 300, 250, 200, 250, 300, 350, 300, 250]
          }
        ],
        color: ['#3398DB'],
        grid: {
          top: 70,
          left: 60,
          right: 60,
          bottom: 50
        }
      },
      rankDate: [
        {
          no: 1,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 2,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 3,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 4,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 5,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 6,
          name: '麦当劳',
          money: '323,234'
        },
        {
          no: 7,
          name: '麦当劳',
          money: '323,234'
        }
      ]
    }
  },
  methods: {
    onMenuSelect (index) {
      this.activeIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.sales-view {
  margin-top: 20px;
  .menu-wrapper {
    display: flex;
    position: relative;
    .menu-right {
      position: absolute;
      right: 20px;
      top: 0;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .sales-view-date-picker {
        margin-left: 20px;
      }
    }
    .sales-view-menu {
      padding-left: 20px;
      width: 100%;
      .el-menu-item {
        height: 50px;
        line-height: 50px;
        margin: 0 20px;
      }
    }
  }
  .sales-view-chart-wrapper {
    display: flex;
    height: 270px;
    .sales-view-title {
      margin-top: 20px;
      font-size: 12px;
      color: #666;
      font-weight: 500;
    }
    .echarts {
      flex: 0 0 70%;
      width: 70%;
      height: 100%;
    }
    .sales-view-list {
      flex: 1;
      width: 100%;
      height: 100%;
      overflow: hidden;
      .list-item-wrapper {
        margin-top: 15px;
        .list-item {
          display: flex;
          align-items: center;
          font-size: 12px;
          height: 20px;
          padding: 6px 20px 6px 0;
          .list-item-no {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 20px;
            height: 20px;
            color: #333;
            &.top-no {
              background: #000;
              border-radius: 50%;
              color: #fff;
              font-weight: 500;
            }
          }
          .list-item-name {
            margin-left: 10px;
            color: #333;
          }
          .list-item-money {
            flex: 1;
            text-align: right;
          }
        }
      }
    }
  }
}
</style>
