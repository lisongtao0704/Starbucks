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
        <el-menu-item index="1">关于星礼卡</el-menu-item>
        <el-menu-item index="2">管理星礼卡</el-menu-item>
        <el-menu-item index="3">在线申请发票</el-menu-item>
      </el-menu>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "giftCards",
  data() {
    return {
      activeIndex: "1",
    };
  },
  beforeCreate() {},
  created() {
    if (sessionStorage.getItem("card")) {
      this.$router.push("/more/giftCards/" + sessionStorage.getItem("card"));
      this.activeIndex = sessionStorage.getItem("card");
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = key;
      sessionStorage.setItem("card", key);
      console.log(keyPath);
    },
  },
};
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
