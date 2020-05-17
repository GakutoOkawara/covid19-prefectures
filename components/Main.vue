<template>
  <div class="main">
    <ul>
      <li class="store">
        <p class="prefecture">東京都</p>
        <div class="image-box">
          <img src="../assets/tokyo_logo.jpg" width="100px" height="100px" />
        </div>
        <div class="site-detail">
          <p class="site-name">新型コロナ対策感染症対策サイト</p>
          <a href="https://stopcovid19.metro.tokyo.lg.jp/">https://stopcovid19.metro.tokyo.lg.jp/</a>
          <p class="infected">本日の感染者数 20人</p>
        </div>
      </li>

      <li class="store">
        <p class="prefecture">神奈川県</p>
        <div class="image-box">
          <img src="../assets/tokyo_logo.jpg" width="100px" height="100px" />
        </div>
        <div class="site-detail">
          <p class="site-name">新型コロナ対策感染症対策サイト</p>
          <a href="https://stopcovid19.metro.tokyo.lg.jp/">https://stopcovid19.metro.tokyo.lg.jp/</a>
          <p class="infected">本日の感染者数 20人</p>
        </div>
      </li>
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
  padding: 10px;
  margin: 20px auto;
  box-sizing: border-box;
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2));
  background-color: #ffffff;
}
.prefecture {
  color: #707070;
}
.image-box {
  box-sizing: border-box;
  float: left;
  padding: 30px;
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2));
}
.site-detail {
  float: left;
  width: 80%;
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2));
}
.site-name {
  color: #707070;
  padding: 20px;
}
.site-detail a {
  margin: 20px;
}
.infected {
  padding: 20px;
}
</style>
