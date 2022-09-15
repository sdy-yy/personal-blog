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
.nav {
  position: fixed;
  width: 100%;
  height: 52px;
}
.body {
  top: 52px;
  height: calc(100% - 52px);
  width: 100%;
  position: fixed;
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