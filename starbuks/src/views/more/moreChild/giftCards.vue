<template>
  <div class="giftCards">
    <div class="gift">
      <h2>星礼卡</h2>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        :router="true"
      >
        <el-menu-item index="/more/giftCards/1">关于星礼卡</el-menu-item>
        <el-menu-item index="/more/giftCards/2">管理星礼卡</el-menu-item>
        <el-menu-item index="/more/giftCards/3">在线申请发票</el-menu-item>
      </el-menu>
    </div>
    <transition>
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'giftCards',
  data () {
    return {
      activeIndex: '/more/giftCards/1'
    }
  },
  beforeCreate () {},
  created () {
    if (sessionStorage.getItem('card')) {
      this.activeIndex = sessionStorage.getItem('card')
      if(this.$route.path==sessionStorage.getItem('card'))
      return
      this.$router.push(sessionStorage.getItem('card'))
    }else  this.$router.push("/more/giftCards/1")
  },
  methods: {
    handleSelect (key, keyPath) {
      this.activeIndex = key
      sessionStorage.setItem('card', key)
    }
  }
}
</script>

<style lang="less" scoped>
.giftCards {
  color: rgba(0, 0, 0, 0.87);
  letter-spacing: 0.4px;
  padding-bottom: 58px;
  .gift {
    background: #ffffff;
    padding: 16px 16px 0;
    h2 {
      margin: 0;
      font-weight: 700;
      font-size: 22px;
      text-align: left;
    }
    .el-menu-demo {
      li {
        padding: 0;
        margin: 0 15px 0 0;
        font-size: 16px;
        font-weight: 400;
      }
      .is-active {
        border-bottom: 3px solid #00a862;
        font-weight: 700;
      }
    }
  }
}
</style>
