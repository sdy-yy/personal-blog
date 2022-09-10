<template>
  <div class="menu-container">
    <a v-for="(item,i) in nav" :key="i">{{item}}</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [{link:'/',title:"首页"},{link:"/article",title:""}]
    };
  }
};
</script>

<style lang='less' scoped>
.menu-container {
  border: 1px solid #eee;
  width: 100%;
  height: 52px;
  background: #eee;
  line-height: 52px;
  color: rgb(73, 73, 73);
  display: flex;
  justify-content: center;
  a {
    padding: 0 10px;
    margin: 0 10px;
    &:hover {
      font-weight: 700;
      color: black;
      background: white;
      border-radius: 5px;
    }
    &.active {
      font-weight: 700;
      color: black;
    }
  }
}
</style>