<template>
  <div class="article-container" ref="container">
    <img v-for="(item,i) in imgSrc" :key="i" :src="item" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: [
        "https://img0.baidu.com/it/u=382196609,922601046&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=343",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0167ec5a0c2ed7a801204a0e669833.jpg%402o.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665796168&t=ad4feaf3a17d8e80057b4b2012ec0227",
        "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01ab37583d26b9a801219c778fb575.jpg%403000w_1l_2o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665796168&t=9d94f831fe395eef3b7655a6b6299d7a"
      ]
    };
  }
};
</script>

<style scoped lang='less'>
.article-container {
  width: 1000px;
}
</style>