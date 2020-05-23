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
    <li class="prevenstion">
      <a
        href="https://www.kantei.go.jp/jp/headline/kansensho/coronavirus.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        新型コロナウイルスへの備え
        <img src="../assets/another_tab.png" />
      </a>
    </li>
    <p class="border"></p>
    <li class="contact">
      <a href="#" target="_blank" rel="noopener noreferrer">
        お問い合わせ
        <img src="../assets/another_tab.png" />
      </a>
    </li>
    <p class="border"></p>
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
.sidenav {
  margin: 0;
  padding: 0;
  width: 200px;
  height: 650px;
  background-color: #ffffff;
  text-align: center;
  float: left;
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2));
}

.sidenav li a {
  display: block;
  color: #707070;
  padding: 8px 16px;
  text-decoration: none;
}
.sidenav li a:hover {
  background-color: #f1f1f1;
  color: #707070;
}
.sidenav-title {
  font-weight: bold;
  color: #707070;
  padding: 20px;
}
.border {
  border-bottom: 1px solid #d9d9d9;
  margin: 15px 20px;
}
</style>
