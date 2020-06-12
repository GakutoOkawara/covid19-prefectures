<template>
  <div>
      <SideMenu></SideMenu>
      <Main :prefectures="prefectures"></Main>
  </div>
</template>

<script>
import sites from "@/assets/json/site.json";

export default {
  components: {
    SideMenu: () => import("@/components/SideMenu"),
    Main: () => import("@/components/Main")
  },
  data() {
    return {
      sites: sites,
      prefectures: []
    }
  },
  methods: {
    getPrefectures() {
      for (let index in this.sites) {
        if (parseInt(this.$route.params.id) === this.sites[index].region_id) {
          // パラメータとregion_idが一致する場合
          // prefecturesにjsonデータをpush
          this.prefectures.push(this.sites[index]);
        }
      }

      return this.prefectures;
    }
  },
  created() {
    this.getPrefectures();
  }
};
</script>
