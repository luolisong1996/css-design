<template>
  <div id="HeadNavigation" style="grid-template-columns: calc((100% -60px) / 2) calc((100% -60px) / 2)">
    <div class="left">
      <p>顶部导航不定宽的居中展示：内容区居中展示，两旁留白</p>
      <div class="content">
        <img src="../img/headnavigation/2019-05-29_142416.jpg" alt="效果图" title="效果图">
        <img src="../img/headnavigation/2019-05-29_142433.jpg" alt="代码图" title="代码图">
      </div>
      <p>footer 置底</p>
      <p>这个方法就是给content一个最小高度，在通过padding-bottom和margin-bottom将footer的高度给它留着</p>
      <div class="content">
        <img src="../img/headnavigation/2019-05-29_153907.jpg" alt="代码图" title="代码图">
        <img src="../img/headnavigation/2019-05-29_153855.jpg" alt="效果图" title="效果图">
        <p>flex布局</p>
        <img src="../img/headnavigation/2019-05-29_154519.jpg" alt="效果图" title="效果图">
      </div>
    </div>
   <!-- <div class="center-float">
     <ul>
       <li>1</li>
       <li>2</li>
       <li>3</li>
     </ul>
   </div> -->
   <div class="right">
      <p>超宽的背景图片居中</p>
      <div class="mainContent">
        <div class="wrapper">
          <!-- <img src="../img/headnavigation/2019-05-29_142433.jpg" alt="代码图" title="代码图"> -->
        </div>
      </div>
      <p>都是利用自动填充属性，网上的不靠谱</p>
      <img src="../img/headnavigation/2019-05-29_160322.jpg" alt="代码图" title="代码图">
      <p>:after实现</p>
      <div class="wrapperone">
          <img src="../img/1366.png">
      </div>
       <img src="../img/headnavigation/2019-05-29_161203.jpg" alt="代码图" title="代码图">
   </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
.wrapperone {
    width: 700px;
    height: 300px;
    border: 1px solid #ccc;
    text-align: center;
    overflow: hidden;
}
.wrapperone::after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
}
.wrapperone > img {
    vertical-align: middle;
    width: 500px;
}
.wrapper {
  width: 500px;
  height: 400px;
  background: url(../img/1366.png) no-repeat center top;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
}
.mainContent {
  position: relative;
  width: 700px;
  height: 400px;
}
.mainContent {
  position: relative;
  width: 1000px;
  margin: 0 auto;
}
#HeadNavigation{
  display: grid;
  grid-gap: 20px;
  overflow: hidden;
}
.left{
  text-indent: 25px;
  border: 2px solid #eee
}
.right{
  border: 2px solid #eee;
  text-indent: 25px;
}
.center-float{
  float: left;
  position: relative;
  left: 50%;
  background-color: #1E1E1E;
}
.center-float > ul{
  position: relative;
  left: -50%;
}
li{
  list-style: none;
}
html,body{
  height: 100%;
}
#content{
  min-height: 100%;
  margin-bottom: -30px;
  padding-bottom: 30px; 
}
#footer{
  line-height: 30px;
  text-align: center;
  height: 30px;
  background-color: #1E1E1E;
}
</style>
