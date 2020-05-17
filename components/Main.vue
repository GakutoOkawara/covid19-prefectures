<template>
  <div class="main">
    <ul>
      <li class="store">
        <!-- <p>東京都</p> -->
        <!-- <div> -->

        <div class="image-box">
          <img src="../assets/tokyo_logo.jpg" width="100px" height="100px" />
        </div>
        <div class="site-detail">
          <p>新型コロナ対策感染症対策サイト</p>
          <a href="https://codepen.io/pen/">https://codepen.io/pen/</a>
        </div>

        <!-- <p>本日の感染者数 20人</p> -->
        <!-- </div> -->
      </li>
      <!-- <li class="store">
        <p>神奈川県</p>
        <div>
          <p>新型コロナ対策感染症対策サイト</p>
          <a href="https://codepen.io/pen/">https://codepen.io/pen/</a>
          <p>本日の感染者数 10人</p>
        </div>
      </li>-->
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  width: 1080px;
  height: 1000px;
  display: inline-block;
  box-sizing: border-box;
}
.store {
  width: 80%;
  height: 200px;
  list-style-type: none;
  border: 1px solid;
  padding: 10px;
  margin: 20px auto;
  box-sizing: border-box;
}
.image-box {
  height: 100px;
  width: 100px;
  box-sizing: border-box;
  float: left;
}
.site-detail {
  float: left;
  width: 80%;
}
</style>
