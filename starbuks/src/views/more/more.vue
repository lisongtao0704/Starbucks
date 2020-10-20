<template>
  <div class="more">
    <div class="moreUp">
      <router-link to="/"
        ><img src="../../assets/images/logo.svg"
      /></router-link>
      <i class="el-icon-close"></i>
    </div>
    <div class="main">
      <ul>
        <li><router-link to="/stores">门店</router-link></li>
        <li><router-link to="#">星俱乐部</router-link></li>
        <li><router-link to="/menu">菜单</router-link></li>
        <li><hr /></li>
        <li><router-link to="#">星巴克移动应用</router-link></li>
        <li><router-link to="#">星礼卡</router-link></li>
        <li><router-link to="#">星巴克臻选™</router-link></li>
        <li><router-link to="#">啡快™ - 在线点 到店取</router-link></li>
        <li><router-link to="#">专星送™</router-link></li>
        <li><router-link to="#">咖啡星讲堂</router-link></li>
        <li><router-link to="#">上海烘焙工坊</router-link></li>
        <li><router-link to="#">关于星巴克</router-link></li>
        <li><router-link to="#">帮助中心</router-link></li>
        <li><hr /></li>
      </ul>
      <div class="reg">
        <div>
          <img src="../../assets/images/icon-account.svg" />
          <span>登录</span>
        </div>
        <div>注册</div>
      </div>
    </div>
    <div class="footer">
      <router-link to="">English</router-link>
      <router-link to="">隐私政策</router-link>
      <router-link to="">使用条款</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "more",
};
</script>

<style lang='less' scoped>
.more {
  background: #fff;
  height: 100vh;
  position: relative;
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
    a {
      color: rgba(0, 0, 0, 0.38);
      list-style: none;
      text-decoration: none;
    }
  }
}
</style>

