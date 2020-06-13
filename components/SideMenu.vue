<template>
  <ul class="sidenav">
    <li class="sidenav-title">
      <router-link to="/">新型コロナウイルス感染症<br>都道府県別サイト一覧</router-link>
      <p class="border"></p>
    </li>
    <li class="regions" v-for="region in this.regions" :key="region.id">
      <router-link :to="`/region/` + region.id">{{ region.name }}</router-link>
    </li>
    <router-view />
    <p class="border"></p>
    <li class="contact">
      <router-link to="/contact">
        お問い合わせ
      </router-link>
      <router-view />
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
.nuxt-link-active {
  width: 100%;
}
.sidenav {
  margin: 0;
  padding: 0;
  width: 200px;
  height: 700px;
  text-align: center;
  float: left;
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2));
  cursor: pointer;
  background-color: #fff;
}

.sidenav li a {
  display: block;
  color: #707070;
  padding: 10px 16px;
  text-decoration: none;
}
.regions:hover {
  background-color: #f1f1f1;
  color: #707070;
}
.sidenav-title {
  font-weight: bold;
  color: #707070;
  padding: 10px 10px 0px;
  font-size: 12px;
}
.border {
  border-bottom: 1px solid #d9d9d9;
  margin: 15px 20px;
}
</style>
