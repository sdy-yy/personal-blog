<template>
  <i class="iconfont icon-container" :class="classStyle"></i>
</template>

<script>
const classStyleMap = {
  weixin: "icon-weixin",
  qq: "icon-QQ"
};
export default {
  props: {
    iconType: {
      type: String,
      required: true
    }
  },
  computed: {
    classStyle() {
      return classStyleMap[this.iconType];
    }
  }
};
</script>

<style scoped>

</style>