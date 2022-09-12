<template>
  <div class="menu-container">
    <RouterLink
      :exact="item.dim"
      v-for="(item,i) in nav"
      :key="i"
      :to="{name:item.id}"
    >{{item.title}}</RouterLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        //dim是否精确匹配
        { title: "首页", dim: true, id: "Home" },
        { title: "文章", dim: false, id: "Article" },
        { title: "留言", dim: true, id: "Message" },
        { title: "项目", dim: true, id: "Project" },
        { title: "作者", dim: true, id: "Author" }
      ]
    };
  },
  methods: {}
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

    &.router-link-active,
    &.router-link-exact-active {
      font-weight: 700;
      color: black;
    }
  }
}
</style>