<template>
  <div class="total-sales">
    <common-card title="累计销售额" value="￥ 32,039,625">
      <template>
        <div class="compare-warper">
          <div class="compare">
            <span>日同比</span>
            <span class="emphasis">7.33%</span>
            <div class="increase"></div>
          </div>
          <div class="compare">
            <span>月同比</span>
            <span class="emphasis">38.79%</span>
            <div class="decrease"></div>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <span>昨日销售量 </span>
        <span class="emphasis">￥ 30，000，000</span>
      </template>
    </common-card>
  </div>
</template>

<script>
import commonCardMixin from '../../../mixins/commonCardMixin'
export default {
  mixins: [commonCardMixin]
}
</script>

<style lang="scss" scoped>
.compare-warper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .compare {
    font-size: 12px;
    margin-top: 3px;
    color: #666;
    display: flex;
    align-items: center;
  }
}

</style>
