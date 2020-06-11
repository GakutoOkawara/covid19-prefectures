<template>
  <div class="main">
    <ul>
      <li class="site" v-for="site in sites" :key="site.id">
        <p class="prefecture">{{ site.prefecture }}</p>
        <div class="image-box">
          <img :src="require('~/assets/img/' + site.image)" width="150px" height="100px" />
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
  }
};
</script>

<style scoped>
@import '@/assets/css/Main.css';
</style>
