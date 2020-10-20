<template>
  <div class="xbkMobileApp">
    <div class="headed">
      <h2>星巴克移动应用</h2>
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        text-color="rgba(0, 0, 0, 0.56)"
        active-text-color="rgba(0, 0, 0, 0.87)"
        :router="true"
        class="xbkmobile"
      >
        <el-menu-item index="/more/xbkMobileApp/app"
          >星巴克移动应用</el-menu-item
        >
        <el-menu-item index="/more/xbkMobileApp/apple"
          >星巴克 Apple Watch
        </el-menu-item>
      </el-menu>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'xbkMobileApp',
  data () {
    return {
      activeIndex: '/more/xbkMobileApp/app'
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
.xbkMobileApp {
  padding: 16px 16px 0 16px;
  h2 {
    text-align: left;
  }
  .xbkmobile {
    letter-spacing: 0.4px;
    .el-menu-item {
      font-size: 16px;
      font-weight: 400;
      padding: 0;
      margin: 0 20px 0 0;
    }
    .is-active {
      border-bottom: 3px solid #00a862 !important;
      color: rgba(0, 0, 0, 0.87);
      font-weight: 700;
      font-size: 16px;
      padding: 0;
      margin: 0 20px 0 0;
    }
  }
}
</style>
