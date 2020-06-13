<template>
  <div class="main">
    <ul>
      <li class="site" v-for="site in sites" :key="site.id">
        <p class="prefecture">{{ site.prefecture }}</p>
        <div class="image-box">
          <img :src="require('@/assets/img/' + site.image)" />
        </div>
        <div class="site-detail">
          <p class="site-name">{{ site.name }}</p>
          <a :href="site.url">{{ site.url }}</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import sites from "@/assets/json/site.json";

export default {
  props: ["prefectures"],
  data() {
    return {
      sites: this.prefectures ?? sites
    };
  }
};
</script>

<style scoped>
.main {
    word-wrap: break-word;
    width: 1000px;
}

.main > ul {
  width: 800px;
  height: 700px;
  display: inline-block;
  box-sizing: border-box;
  overflow: scroll;
}
.site {
  width: 100%;
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
.image-box > img {
  height: 100px;
  width: 150px;
}

.site-detail {
  float: left;
  width: 60%;
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2));
}
.site-name {
  color: #707070;
  padding: 10px 0px;
}
.site-detail a {
  margin: 10px;
}

@media screen and (min-width:0px) and (max-width:650px) {
  .main > ul {
    width: 650px;
  }
  .image-box > img {
  height: 100px;
  width: 100px;
  }
}
</style>
