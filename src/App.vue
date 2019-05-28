<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      clientHeight:''
    }
  },
  mounted(){
    // 获取浏览器可视化区域高度
    this.clientHeight = `${document.documentElement.clientHeight}`
    window.onresize = function temp() {
      this.clientHeight = `${document.documentElement.clientHeight}`;
    }
  },
  watch:{
    // 如果clientHeight发生改变，这个函数就会运行
    clientHeight: function () {
      this.changeFixed(this.clientHeight)
    }
  },
  methods:{
     changeFixed(clientHeight){                        //动态修改样式
        // this.$refs.homePage.style.height = clientHeight+'px';
        document.getElementById('app').style.height = clientHeight +'px'
      },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* background-image: url('./img/1366.png'); */
}
</style>
