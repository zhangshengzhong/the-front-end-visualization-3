<template>
  <div class="total-sales">
    <common-card
      title="累计用户数"
      value="1，087，503"
    >
      <template>
        <!-- 定义chart容器 一定要记得检查-->
        <div
          id="total-users-chart"
          :style="{width:'100%', height:'100%'}"
        ></div>
      </template>
      <template v-slot:footer>
        <div class="total-users-footer">
          <span>日同比 </span>
          <span class="emphasis">8.73%</span>
          <div class="increase"></div>
          <span class="month">月同比 </span>
          <span class="emphasis">35.91%</span>
          <div class="decrease"></div>
        </div>

      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from '../../../mixins/commonCardMixin'
export default {
  mixins: [commonCardMixin],
  // 绘制图形
  mounted () {
    // 获取char容器
    const chartDom = document.getElementById('total-users-chart')
    // 绑定chart容器
    const char = this.$echarts.init(chartDom)
    // 设置图形参数
    char.setOption({
      // 图形位置
      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      },
      // x轴
      xAxis: {
        // 隐藏x轴
        show: false
      },
      // y轴
      yAxis: {
        // 设置y轴类型为分类,因为图形为水平排列，所以x轴为value
        type: 'category',
        // 隐藏y轴
        show: false
      },
      // 系列
      series: [
        {
          // 定义图表类型
          type: 'bar',
          data: [100],
          // 合并两组数据
          stack: '总量',
          // 柱状图宽度
          barWidth: 10,
          // 定制图标颜色
          itemStyle: {
            color: '#45c946'
          }
        },
        {
          // 定义图表类型
          type: 'bar',
          data: [250],
          // 合并两组数据
          stack: '总量',
          // 定制图标颜色
          itemStyle: {
            color: '#eee'
          }
        },
        // 想在画布上绘制任何东西它都必须是一个序列，因为要绘制三角形
        {
          // 类型为自定义类型
          type: 'custom',
          data: [100],
          stack: '总量',
          // 开始绘制自定义图形，通过renderItem,接收两个参数 params 提供绘图相关的数据，坐标系信息，画布信息等
          // api提供很多工具方法比如getwidth（）
          renderItem: (params, api) => {
            // 绘图需要拿到两组数据分离的坐标点坐标
            // 获取data中对应角标的数据
            const value = api.value(0)
            // 获取该点在整个坐标系中的坐标,通过api.coord()方法实现，传入两个参数为该点x轴值和y轴值
            // 注意传值是按照数组的形式传的
            const endPoint = api.coord([value, 0])
            // renderItem需要一个返回值而这个返回值中的数据就是我们需要绘制的图形
            return {
              // 绘制的坐标系
              position: endPoint,
              // 再绘制一个三角形，两种办法，推荐使用第二种
              // 1，再绘制一个series
              // 2，使用group将图形分组，在children里面定义图形
              type: 'group',
              children: [
                {
                  type: 'path',
                  // 形状
                  shape: {
                    // 传入svg图像的内容
                    // d: 'M937.7 268.6c26.2 26.2 26.2 68.6 0 94.7l-379 379c-26.2 26.2-68.6 26.2-94.7 0l-379-379c-26.2-26.2-26.2-68.6 0-94.7h852.7z',
                    d: 'M86.3 755.4c-26.2-26.2-26.2-68.6 0-94.7l379-379c26.2-26.2 68.6-26.2 94.7 0l379 379c26.2 26.2 26.2 68.6 0 94.7l-852.7 0z',
                    // x轴的相对偏移量
                    x: -5,
                    y: 10,
                    width: 10,
                    height: 10,
                    // 用于指定缩放策略
                    layout: 'cover'
                  },
                  style: {
                    // svg图标需要填充
                    fill: '#45c946'
                  }
                },
                {
                  type: 'path',
                  // 形状
                  shape: {
                    // 传入svg图像的内容
                    d: 'M937.7 268.6c26.2 26.2 26.2 68.6 0 94.7l-379 379c-26.2 26.2-68.6 26.2-94.7 0l-379-379c-26.2-26.2-26.2-68.6 0-94.7h852.7z',
                    // d: 'M86.3 755.4c-26.2-26.2-26.2-68.6 0-94.7l379-379c26.2-26.2 68.6-26.2 94.7 0l379 379c26.2 26.2 26.2 68.6 0 94.7l-852.7 0z',
                    // x轴的相对偏移量
                    x: -5,
                    y: -20,
                    width: 10,
                    height: 10,
                    // 指定缩放策略
                    layout: 'cover'
                  },
                  style: {
                    // svg图标需要填充
                    fill: '#45c946'
                  }
                }
              ]
              // path表示绘制的是一个线段指定之后我们可以传入一个svg图片通过svg的方式来绘制

            }
          }

        }
      ]
    })
  }
}
</script>

<style lang="scss" scoped>
.total-users-footer {
  display: flex;
  align-items: center;
  .month {
    margin-left: 10px;
  }
}
</style>
