<template>
  <div class="total-sales">
    <common-card
      title="今日交易用户数"
      value="81,014"
    >
      <template>
        <v-chart :options='getOptions()'></v-chart>
        <!-- 指定图标容器
        容器需要指定宽高，因为echarts规定如果你不指定宽高默认宽度100%,高度为0 -->
        <div
          id="today-users-chart"
          :style="{width: '100%',height: '100%'}"
        ></div>
      </template>
      <template v-slot:footer>
        <span>退货率 </span>
        <span class="emphasis">5.14%</span>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from '../../../mixins/commonCardMixin'
export default {
  mixins: [commonCardMixin],
  methods: {
    getOptions () {
      return {

        // 柱状图颜色
        color: ['#3398DB'],
        // 图形
        series: [{
          // 图形类型 bar：柱状图；line：折线图
          type: 'bar',
          // 数据
          data: [410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150],
          // 柱状图柱形的宽度
          barWidth: '60%'
        }
        ],
        // x轴
        xAxis: {
          // type默认为value，这里改为category
          type: 'category',
          // 鼠标移上显示的数据,和上方数据一一对应
          data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00',
            '09:00', '10:00', '11:00', '12:00', '13:00'],
          // 隐藏x轴
          show: false
          // 距离x轴是否留间距
          // boundaryGap: false
        },
        // y轴
        yAxis: {
          // 隐藏y轴
          show: false
        },
        // 图形位置
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }

      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
