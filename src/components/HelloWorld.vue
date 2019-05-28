<template>
  <div class="hello">
    <div>
      <h1>css样式库</h1>
    </div>
    <table>
      <tr>
        <td>
          <div class="button">
            <router-link to="/Lazypositioning"><span>懒加载占位</span></router-link>
          </div>
        </td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 60%;
  margin-left: 20%;
}
.button{
  height: 30px;
  background-color: #033BC8;
  color: #fff;
  padding: 1px 5px;
  font-size: 14px;
  border-radius: 3px;
}
.button span{
  line-height: 30px;
}
a{
  color: #fff;
  text-decoration:none;
}
</style>
