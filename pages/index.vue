<template>
  <div class="container">
    <Sidebar></Sidebar>
    <Main></Main>
  </div>
</template>

<script>
export default {
  components: {
    Sidebar: () => import("~/components/Sidebar"),
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
