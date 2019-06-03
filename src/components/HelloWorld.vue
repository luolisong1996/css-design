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
        <td>
          <div class="button">
            <router-link to="/HeadNavigation"><span>头部尾部固定</span></router-link>
          </div>
        </td>
        <td>
          <input type="text" v-model="firstName">
          <input type="text" v-model="lastName">
          <input type="text" v-model="fullName">
          <input type="text" v-model="first.second">
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      firstName: 'Foo',
      lastName: 'Bar',
      // first: 2
      'first':{
        second:0
      }
      // fullName: 'Foo Bar'
    }
  },
  watch:{
    firstName(val){
      // this.fullName = val + ' ' + this.lastName
      // console.log(val)
    },
    first(){
      console.log(this.first)
    },
    secondChange:{
      handler(oldVal,newVal){
        console.log(oldVal)
        console.log(newVal)
      },
      deep:true
    }
  },
  computed:{
    secondChange(){
      return this.first.second
    },
    // fullName:function(){
    //  return this.firstName  + " " +this.lastName;
    // }

    fullName:{
      get(){
        // 回调函数，当需要读取当前属性值是执行，根据相关数据计算并返回当前属性的值
        return this.firstName+' '+this.lastName
      },
      set(val){
        let names = val.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 60%;
  margin-left: 20%;
  text-align: center;
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
