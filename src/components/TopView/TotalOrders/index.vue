<template>
  <div class="total-sales">
    <common-card
      title="累计订单量"
      value="￥ 2，157，420"
    >
      <template>
        <v-chart :options="getOptions()"></v-chart>
        <div
          id="toatal-sales-charts"
          :style="{ height: '100%', width: '100%' }"
        ></div>
      </template>
      <template v-slot:footer>
        <span>昨日订单量 </span>
        <span class="emphasis">2,000,000</span>
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
        xAxis: {
          // 默认 type: 'value' 所以会绘制成一条直线
          // type: 'category' 也就是分类
          type: 'category',
          // 这时候指定data就要和下面的data一一对应，在category情况下
          // 隐藏x轴
          show: false,
          // 图标距离x轴是否留有距离
          boundaryGap: false
        },
        yAxis: {
          // 隐藏y轴
          show: false
        },
        series: [{
          type: 'line',
          data: [620, 432, 200, 534, 790, 430, 220, 320, 532, 320, 834, 690, 530, 220, 620],
          // 展示面积
          areaStyle: {
            color: 'purple'
          },
          // 隐藏连线
          lineStyle: {
            width: 0
          },
          // 让连线更加平滑
          smooth: true,
          // 隐藏线上的坐标点
          itemStyle: {
            opacity: 0
          }
        }],
        // 布局,每个图生成都会生成
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

<style lang="scss" scoped></style>
