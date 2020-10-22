<template>
  <div v-if="isok"><button @click="tuichu">退出登录</button></div>
  <div class="account" v-else>
    <div class="accountbtn menubtn account">
      <h2>登录或创建一个新帐户 🌟</h2>
      <div class="router-div">
        <router-link to="/account/login">登录</router-link>
        <router-link to="/account/register">注册</router-link>
        <router-link to="/account/starbucks-rewards"
          >关于兴享俱乐部</router-link
        >
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "account",
  data() {
    return {
      isok: 0,
    };
  },
  mounted() {
    this.isok = this.$store.state.token;
    console.log(this.isok);
  },
  methods: {
    tuichu() {
      this.isok = 0;
      this.$store.commit("setToken", this.isok);
      sessionStorage.clear();
    },
  },
};
</script>

<style lang='less' scoped>
.login-content {
  height: 85vh;
  background-color: rgb(247, 247, 247);
  border-top: 1px solid #ccc;
  box-shadow: 0px -2px 2px #eee;
  padding-top: 20px;
}
.menubtn {
  h2 {
    font-weight: 700;
    line-height: 140%;
    margin: 15px 0 0 15px;
    color: #333;
    text-align: left;
    margin-left: 15px;
    font-size: 26px;
  }
}
.router-div {
  text-align: left;
  line-height: 50px;
  margin-left: 15px;
  margin-bottom: -8px;
}
.router-div a {
  padding-bottom: 1px;
  margin-bottom: 6px;
  color: rgba(0, 0, 0, 0.56);
  padding: 4px 0;
  text-decoration: none;
  margin-right: 18px;
  font-size: 14px;
}
.router-link-active {
  color: rgba(0, 0, 0, 0.76) !important;
  font-weight: 700;
  border-bottom: 3px solid #00a862;
}
</style>
