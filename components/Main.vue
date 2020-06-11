<template>
  <div class="main">
    <ul>
      <li class="sites" v-for="site in sites" :key="site.id">
        <p class="prefecture">{{ site.prefecture }}</p>
        <div class="image-box">
          <img :src="require('~/assets/img/' + site.image)" width="100px" height="100px" />
        </div>
        <div class="site-detail">
          <p class="site-name">{{ site.site_name }}</p>
          <a :href="site.site_url">{{ site.site_url }}</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import sites from "@/assets/json/site.json";

export default {
  data() {
    return {
      sites: sites
    };
  },
  methods: {
  },
  created() {
  }
};
</script>

<style scoped>
.main > ul {
  width: 700px;
  height: 700px;
  display: inline-block;
  box-sizing: border-box;
  overflow: scroll;
}
.sites {
  width: 100%;
  height: 200px;
  list-style-type: none;
  padding: 10px;
  margin: 20px auto;
  box-sizing: border-box;
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2));
  background-color: #ffffff;
  word-wrap: break-word;
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
.infected {
  padding: 20px;
}
</style>
