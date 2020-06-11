<template>
  <div class="container">
    <SideMenu></SideMenu>
    <Main></Main>
  </div>
</template>

<script>
export default {
  components: {
    SideMenu: () => import("~/components/SideMenu"),
    Main: () => import("~/components/Main")
  }
};
</script>

<style scoped>
.container {
  height: 700px;
  background-color: #fbfbfb;
}
</style>
