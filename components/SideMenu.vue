<template>
  <ul class="sidenav">
    <li class="sidenav-title">
      新型コロナ対策
      <br />都道府県別サイト一覧
      <p class="border"></p>
    </li>
    <li v-for="region in this.regions" :key="region.id">
      <router-link :to="`/region/` + region.id">{{ region.name }}</router-link>
    </li>
    <router-view />
    <p class="border"></p>
    <li class="contact">
      <router-link to="/contact">
        お問い合わせ
      </router-link>
    </li>
  </ul>
</template>

<script>
import regions from "@/assets/json/region.json";

export default {
  data() {
    return {
      regions: regions
    };
  }
};
</script>

<style scoped>
@import '~assets/css/sideMenu.css';
</style>
