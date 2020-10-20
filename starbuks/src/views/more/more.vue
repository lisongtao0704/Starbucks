<template>
  <div class="more">
    <div class="moreUp">
      <router-link to="/"
        ><img src="../../assets/images/logo.svg"
      /></router-link>
      <i class="el-icon-close" @click="moreMenu()"></i>
    </div>
    <div class="main">
      <ul>
        <li><router-link to="/stores">门店</router-link></li>
        <li><router-link to="#">星俱乐部</router-link></li>
        <li><router-link to="/menu">菜单</router-link></li>
        <li><hr /></li>
        <li><router-link to="/more/xbkMobileApp">星巴克移动应用</router-link></li>
        <li><router-link to="/more/giftCards">星礼卡</router-link></li>
        <li><router-link to="/more/xbkChoose">星巴克臻选™</router-link></li>
        <li><router-link to="/more/feikuai">啡快™ - 在线点 到店取</router-link></li>
        <li><router-link to="/more/starSend">专星送™</router-link></li>
        <li><router-link to="/more/coffeeClassroom">咖啡星讲堂</router-link></li>
        <li><router-link to="/more/baking">上海烘焙工坊</router-link></li>
        <li><router-link to="/more/asXbk">关于星巴克</router-link></li>
        <li><router-link to="/more/help">帮助中心</router-link></li>
        <li><hr /></li>
      </ul>
      <div class="reg">
        <router-link to="">
          <img src="../../assets/images/icon-account.svg" />
          <span>登录</span>
        </router-link>
        <router-link to="" class="login"><span>注册</span></router-link>
      </div>
    </div>
    <div class="footer">
      <router-link to="">English</router-link>|
      <router-link to="/more/privacy">隐私政策</router-link>|
      <router-link to="/more/useClause">使用条款</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'more',
  data () {
    return {}
  },
  methods: {
    moreMenu () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='less' scoped>
.more {
  white-space: nowrap;
  background: #fff;
  min-height: 100vh;
  position: relative;
  z-index: 1000;
  .moreUp {
    padding: 16px;
    display: flex;
    justify-content: space-between;
    img {
      width: 36px;
      height: 36px;
    }
    .el-icon-close {
      font-size: 30px;
    }
  }
  .main {
    padding: 16px;
    .reg {
      display: flex;
      a {
        text-decoration: none;
        color: #00a862;
        font-size: 16px;
        img {
          margin-right: 2px;
          vertical-align: middle;
        }
      }
      .login {
        border: 1px solid #00a862;
        margin-left: 25px;
        padding: 2px 12px;
        border-radius: 48px;
        box-sizing: border-box;
      }
    }
    ul {
      list-style: none;
      li {
        text-align: left;
        padding: 4px 0;
        hr {
          background: rgba(0, 0, 0, 0.12);
          margin: 12px 0;
          border: 0;
          height: 1px;
        }
        a {
          color: #000000bd;
          font-size: 18px;
          font-weight: 700;
          text-decoration: none;
        }
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    color: rgba(0, 0, 0, 0.38);
    padding: 16px 16px 10px 16px;
    a {
      color: rgba(0, 0, 0, 0.38);
      font-size: 14px;
      list-style: none;
      margin-right: 5px;
      text-decoration: none;
    }
  }
}
</style>
