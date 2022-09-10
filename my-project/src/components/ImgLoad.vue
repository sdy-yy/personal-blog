<template>
  <div class="imageLoad-container">
    <img class="placeholder" v-if="isDruVisible" :src="falseSrc" />
    <img
      class="hah"
      @load="handle"
      :src="trueSrc"
      :style="{opacity:opaDom, transition:`${duration}ms`}"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
      isDruVisible: true
    };
  },
  props: {
    //真实的链接
    trueSrc: {
      type: String
    },
    //站位的链接
    falseSrc: {
      type: String
    },
    //等待时间
    duration: {
      type: Number,
      default: 3000
    }
  },
  methods: {
    handle() {
      this.isVisible = false;
      setTimeout(() => {
        this.isDruVisible = false;
        this.$emit("load");
      }, this.duration);
    }
  },
  computed: {
    opaDom() {
      return this.isVisible ? 0 : 1;
    }
  }
};
</script>

<style lang='less' scoped>
.imageLoad-container {
  width: 100%;
  height: 100%;
  position: relative;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
  }
}
</style>