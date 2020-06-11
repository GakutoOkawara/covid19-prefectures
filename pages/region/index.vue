<template>
  <Sidebar></Sidebar>
</template>

<script>
export default {
  components: {
    Sidebar: () => import("~/components/SideMenu")
  }
};
</script>
