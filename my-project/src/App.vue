<template>
  <div id="app">
    <Layout>
      <template #menu>
        <Menu ref="hah" />
      </template>
      <template #main>
        <router-view></router-view>
      </template>
    </Layout>
  </div>
</template>
<script>
import Layout from "@/Layout/index.vue";
import Menu from "@/components/Menu.vue";
export default {
  components: { Layout, Menu },
  mounted() {
  }
};
</script>
<style scoped lang="less">
</style>
