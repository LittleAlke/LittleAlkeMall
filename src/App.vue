<template>
  <div id="app">
    <router-view/>
    <MainTabBar/>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";
import {getHomeMultidata} from "network/home";

export default {
  name: 'App',
  components: {
    MainTabBar,
  },
  data(){
    return{
      result: null
    }
  },
  created() {
    // 1. 请求多个数据
    getHomeMultidata().then(res => {
      console.log(res)
      this.result = res;
    })
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
