<template>
  <div class="menu-container">
    <a
      :class="{active:isKeyMh(item)}"
      v-for="(item,i) in nav"
      :key="i"
      :href="item.link"
    >{{item.title}}</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        { link: "/", title: "首页", dim: false },
        { link: "/article", title: "文章", dim: true },
        { link: "/message", title: "留言", dim: false },
        { link: "/project", title: "项目", dim: false },
        { link: "/author", title: "作者", dim: false }
      ],
      isKey: false
    };
  },
  methods: {
    isKeyMh(h) {
      let argSrc = h.link;
      let newSrc = location.pathname;
      if (h.dim && newSrc.startsWith(argSrc)) {
        return true;
      }
      if (argSrc === newSrc) {
        return true;
      }
    }
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