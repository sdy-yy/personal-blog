<template>
  <div id="app">
    <Pager @handleChild="handle" :current="current" />
  </div>
</template>
<script>
import Pager from "@/components/Pager.vue";
export default {
  data() {
    return {
      current: 1
    };
  },
  components: {
    Pager
  },
  methods: {
    handle(a) {
      if (a == this.current) {
        return;
      }
      this.current = a;
    }
  }
};
</script>
<style scoped lang="less">
</style>
