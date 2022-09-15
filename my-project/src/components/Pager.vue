<template>
  <div class="pager-container" v-if="totalPage>1">
    <div class="btn-container">
      <div
        class="firstPage btn"
        @click="handlePagerData(1)"
        :class="{disable:current===1}"
        v-show="current !=1"
      >首页</div>
      <div class="btn upPage" @click="handlePagerData(current-1)" v-show="current !=1">上一页</div>
      <div
        @click="handlePagerData(item)"
        class="btn"
        v-for="(item, i) in pagerNum"
        :key="i"
        :class="{active:current=== item}"
      >{{item}}</div>
      <div @click="handlePagerData(current+1)" class="btn downPage" v-show="current!= totalPage">下一页</div>
      <div
        @click="handlePagerData(totalPage)"
        class="endPage btn"
        :class="{disable:current === totalPage}"
        v-show="current!= totalPage"
      >尾页</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    //当前页面
    current: {
      type: Number,
      default: 3
    },
    //总数据量
    totalData: {
      type: Number,
      default: 1000
    },
    //页面容量
    pageContainer: {
      type: Number,
      default: 10
    },
    //可见页码数
    visiblePager: {
      type: Number,
      default: 7
    }
  },
  methods: {
    handlePagerData(data) {
      //抛出
      this.$emit("handleChild", data);
    }
  },
  computed: {
    //总页数
    totalPage() {
      return Math.ceil(this.totalData / this.pageContainer);
    },
    //v-for渲染的pager数据
    pagerNum() {
      var arr = [];
      let left = Math.floor(this.visiblePager / 2);
      let right = this.visiblePager - left - 1;
      // 如果当前页面小于   最左边距离的话，pager不用进行移动
      if (this.current <= left) {
        //如果总页面数小于  小于可见页面数量
        if (this.totalPage <= this.visiblePager) {
          for (var i = 1; i <= this.totalPage; i++) {
            arr.push(i);
          }
        }
        //如果总页面数大于可见页面数量
        if (this.totalPage >= this.visiblePager) {
          for (var i = 1; i <= this.visiblePager; i++) {
            arr.push(i);
          }
        }
        return arr;
      }
      //如果当最后
      if (this.current >= this.totalPage - right) {
        for (
          var i = this.totalPage - this.visiblePager + 1;
          i <= this.totalPage;
          i++
        ) {
          arr.push(i);
        }
        return arr;
      }
      //如果当前页面大于最左边的值
      if (this.current > left) {
        for (var i = this.current - left; i <= this.current + right; i++) {
          arr.push(i);
        }
        return arr;
      }
    }
  }
};
</script>

<style scoped lang='less'>
@import "~@/styles/var.less";
.pager-container {
  padding: 30px 0;
  width: 100%;
  background: rgba(245, 246, 245, 1);
  display: flex;
  justify-content: center;
  .btn-container {
    display: flex;
    .btn {
      &:hover {
        background: @blues;
        color: #fff;
      }
      background: #fff;
      border-radius: 5px;
      color: @blues;
      margin: 0 10px;
      padding: 0 15px;
      cursor: pointer;
      line-height: 30px;
    }
    .disable {
      cursor: not-allowed;
      &:hover {
        background: #fff;
        color: @blues;
      }
    }
    .active {
      background: rgb(78, 116, 220);
      color: #fff;
      &:hover {
        background: rgb(78, 116, 220);
        color: #fff;
      }
    }
  }
}
</style>