<template>
  <div class="head-photo">
    <img class="imgSize" :src="src" :style="{width:width+'px',height:height+'px'}" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      require: true
    },
    width: {
      type: Number,
      default: 50
    },
    height: {
      type: Number,
      default: 50
    }
  }
};
</script>

<style lang='less'>
.imgSize {
  border-radius: 50%;
  object-fit: cover;
}
</style>