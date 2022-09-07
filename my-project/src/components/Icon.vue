<template>
  <i class="iconfont" :class="classStyle"></i>
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
@import "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.css";
</style>