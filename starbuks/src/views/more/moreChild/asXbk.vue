<template>
  <div class="asXbk">
    <div class="as">
      <h2>关于星巴克</h2>
      <div class="headed-bar">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          :router="true"
        >
          <el-menu-item index="/more/asXbk/inchina">星巴克在中国</el-menu-item>
          <el-menu-item index="/more/asXbk/work">工作机会</el-menu-item>
          <el-menu-item index="/more/asXbk/news">企业新闻</el-menu-item>
          <el-menu-item index="/more/asXbk/duty">社会责任</el-menu-item>
          <el-menu-item index="/more/asXbk/history">历史回顾</el-menu-item>
          <el-menu-item index="/more/asXbk/we">联系我们</el-menu-item>
        </el-menu>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'asXbk',
  data () {
    return {
      activeIndex: '/more/asXbk/inchina'
    }
  },
  created () {
    if (!sessionStorage.getItem('asxbk')) {
      return
    }
    this.$router.push(sessionStorage.getItem('asxbk'))
    this.activeIndex = sessionStorage.getItem('asxbk')
  },
  methods: {
    handleSelect (key, keyPath) {
      this.activeIndex = key
      sessionStorage.setItem('asxbk', key)
    }
  }
}
</script>

<style lang="less" scoped>
.asXbk {
  padding-bottom: 60px;
  *{
    touch-action: unset;
  }
  letter-spacing: 0.4px;
  .as {
    padding: 16px 16px 0;
    background: #fff;
    .headed-bar::-webkit-scrollbar{
    display:none;
}
    .headed-bar {
      width: 100%;
      overflow: auto;
      .is-active {
        border-bottom: 3px solid #00a862;
        color: rgba(0, 0, 0, 0.87);
        font-weight: 700;
      }
      ul {
        width: 535px;
        li {
          padding: 0;
          margin-right: 18px;
          color: rgba(0, 0, 0, 0.56);
          font-size: 16px;
          font-weight: 400;
        }
      }
    }
    h2 {
      margin: 0;
      text-align: left;
      font-size: 22px;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.87);
    }
  }
}
</style>
