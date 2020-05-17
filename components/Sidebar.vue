<template>
  <ul class="sidenav">
    <li class="sidenav-title">
      新型コロナ対策
      <br />都道府県別サイト一覧
    </li>
    <li>
      <a href="#">北海道</a>
      <a href="#">東北</a>
      <a href="#">関東</a>
      <a href="#">中部</a>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      regions: []
    };
  },
  mounted() {
    this.getStations();
  },
  methods: {
    getStations() {
      axios
        .get("https://opening-hours.microcms.io/api/v1/region", {
          headers: { "X-API-KEY": "820490cb-3a67-41e7-a58f-d5ecef520214" }
        })
        .then(res => {
          this.regions = res.data.regions;
          console.log(this.regions);
          // this.regions = res.data.names;
          // console.log(this.stations);
        });
    }
  }
};
</script>

<style scoped>
.sidenav {
  margin: 0;
  padding: 0;
  width: 200px;
  height: 1000px;
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
</style>
