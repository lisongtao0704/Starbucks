<template>
  <div class="xbkMobileApp">
    <div class="headed">
      <h2>星巴克移动应用</h2>
      <el-menu
        :default-active="activeIndex"
        @select="handleSelect"
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
      <div class="advertising-right">广告</div>
    </div>
    <transition>
      <router-view />
    </transition>
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
  created () {
    if (!sessionStorage.getItem('index2')) {
      return
    }
    this.activeIndex = sessionStorage.getItem('index2')
    if(this.$route.path==sessionStorage.getItem('index2'))
      return
    this.$router.push(sessionStorage.getItem('index2'))
  },
  methods: {
    handleSelect (key, keyPath) {
      this.activeIndex = key
      sessionStorage.setItem('index2', key)
    }
  }
}
</script>

<style scoped lang="less">
.xbkMobileApp {
  // max-width: 1035px;
  .v-enter,
  .v-lever-to {
    opacity: 0;
    transform: translate(100%);
  }
  .v-enter-active,
  .v-lever-active {
    transition: all 0.3s ease;
  }
  .headed {
    background-color: #fff;
    h2 {
      font-size: 24px;
      font-weight: bold;
    }
    padding: 16px 16px 0 16px;
    .advertising-right {
      position: absolute;
      top: 115px;
      right: 10px;
      font-size: 12px;
      padding: 0px 6px;
      z-index: 999;
      color: #fff;
      background-color: #000;
      opacity: 0.6;
      border-radius: 2px;
    }
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
}
</style>
