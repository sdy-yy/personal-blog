<template>
  <div class="container">
    <div class="nav">
      <slot name="menu"></slot>
    </div>
    <div class="body">
      <div class="leftAside">
        <slot name="leftAside"></slot>
      </div>
      <div class="main">
        <slot name="main"></slot>
      </div>
      <div class="rightAside">
        <slot name="rightAside"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.body {
  display: flex;
  .main {
    flex: 1 0 auto;
  }
  .leftAside {
    flex: 0 0 auto;
  }
  .rightAside {
    flex: 0 0 auto;
  }
}
</style>