<template>
  <div class="home-container" ref="container">
    <img v-for="(item,i) in imgSrc" :key="i" :src="item" />
  </div>
</template>

<script>
import { hometype } from "@/api/home.js";
export default {
  data() {
    return {
      imgSrc: []
    };
  },
  async created() {
    this.imgSrc = (await hometype()).data;
  }
};
</script>
<style lang="less" scoped>
.home-container {
  width: 50%;
  height: 50%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
  }
}
</style>