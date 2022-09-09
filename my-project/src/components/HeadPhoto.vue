<template>
  <div class="headPhoto-container">
    <img class="imgSize" :src="src" :style="{width:width+'px',height:height+'px'}" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 50
    },
    height: {
      type: Number,
      default: 50
    }
  },
  template: `<div>123</div>`
};
</script>

<style scoped>
.imgSize {
  border-radius: 50%;
  object-fit: cover;
}
</style>