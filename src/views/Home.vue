<template>
  <div class="home">
    我是home.vue
    <top-view></top-view>
    <sales-view></sales-view>
    <bottom-view></bottom-view>
    <map-view></map-view>
  </div>
</template>

<script>
// @ is an alias to /src
import TopView from '../components/TopView'
import BottomView from '../components/BottomView'
import SalesView from '../components/SalesView'
import MapView from '../components/MapView'
export default {
  name: 'Home',
  components: {
    TopView,
    BottomView,
    SalesView,
    MapView
  }
}
</script>
<style scoped>
.home {
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
}
</style>
