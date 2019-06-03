<template>
  <div id="Lazypositioning" style="grid-template-columns: calc((100% -60px) / 2) calc((100% -60px) / 2)">
    <div class="left">
      <p>懒加载占位图自适应</p>
      <p>原理:适用于手机端</p>
      <ul>
        <li>
          根据容器的宽度，按照宽高比例，自动计算出容器的实际大小，并且让容器内的img等子元素
          自适应宽高
        </li>
        <li>
          图片父容器宽度100%，父容器的高度百分比为100*3/4 = 75%
        </li>
        <li>
          图片absolute并且完全铺满父容器
        </li>
      </ul>

      <!-- <div class="img-ratio">
        <img src="../img/2019-05-28_164920.jpg" alt="">
      </div> -->
      <p>效果图    代码图</p>
      <div class="content">
        <img src="../img/2019-05-28_165335.jpg" alt="效果图" title="效果图">
        <img src="../img/2019-05-28_165521.jpg" alt="代码图" title="代码图">
      </div>
    </div>
    <div class="right">
      <p>移动端的横向滚动条</p>
      <p>解决问题：当横向滚动的宽度是未知的，后期可能因为业务需要，改变横块个数，便不能用float。</p>
      <ul>
        <li>
          ul设置white-space:nowrap li设置display:inline-block
        </li>
        <li>
          最外层的div利用高度差，把横向滚动条藏起来
        </li>
      </ul>

      <!-- <div class="wrapper">
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
      </div> -->
      <p>效果图    代码图</p>
      <div class="content">
        <img src="../img/2019-05-28_172913.jpg" alt="代码图" title="代码图">
        <img src="../img/2019-05-28_172842.jpg" alt="效果图" title="效果图">
        <img src="../img/2019-05-28_172925.jpg" alt="代码图" title="代码图">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
#Lazypositioning{
  display: grid;
  /* grid-template-rows:280px; */
  grid-gap: 20px;
  overflow: hidden;
}
.img-ratio{
  width: 100%;
  position: relative;
  padding-top: 75%;
}
.img-ratio >img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.left{
  text-indent: 25px;
  border: 2px solid #eee
}
.right{
  border: 2px solid #eee;
  text-indent: 25px;
}
.wrapper{
  width: 340px;
  height: 80px;
  overflow: hidden;
}
.wrapper ul{
  height: 96px;
  width: 100%;
  white-space: nowrap;
  overflow-x: scroll;
  padding: 0;
  margin: 0;
}
.wrapper li{
  display: inline-block;
  width: 80px;
  height: 80px;
  background-color: #ddd;
  line-height: 80px;
  text-align: center;
  font-size:20px;
  margin-right: 10px;
}
.content :nth-child(3){
  margin-left: 25px;
}
</style>
