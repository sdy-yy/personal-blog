<template>
  <div class="home-container" ref="container">
    <div ref="demo">{{marginTop}}</div>
    <img v-for="(item,i) in imgSrc" :key="i" :src="item" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: [
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0167ec5a0c2ed7a801204a0e669833.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665796168&t=ad4feaf3a17d8e80057b4b2012ec0227",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ab37583d26b9a801219c778fb575.jpg%403000w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665796168&t=9d94f831fe395eef3b7655a6b6299d7a"
      ]
    };
  },
  computed: {
    marginTop() {
      console.log(this.$refs.demo);
      return 1;
    }
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