<template>
  <div id="app">
    <div id="nav">
      <div class="nav-bar songtao">
        <el-menu class="el-menu-demo" mode="horizontal">
          <el-menu-item>
            <router-link to="/home" class="home">
              <img class="default" src="./assets/images/icon-home.svg" />
              <img class="active" src="./assets/images/icon-home-active.svg" />
              <div><span>主页</span></div>
            </router-link>
          </el-menu-item>
          <el-menu-item>
            <router-link to="/stores" class="stores">
              <img class="default" src="./assets/images/icon-stores.svg" />
              <img
                class="active"
                src="./assets/images/icon-stores-active.svg"
              />
              <div><span>门店</span></div>
            </router-link>
          </el-menu-item>
          <el-menu-item>
            <router-link to="/account" class="account">
              <img class="default" src="./assets/images/icon-account.svg" />
              <img
                class="active"
                src="./assets/images/icon-account-active.svg"
              />
              <div><span>我的账户</span></div>
            </router-link>
          </el-menu-item>
          <el-menu-item>
            <router-link to="/menu" class="menu">
              <img class="default" src="./assets/images/icon-menu.svg" />
              <img class="active" src="./assets/images/icon-menu-active.svg" />
              <div><span>菜单</span></div>
            </router-link>
          </el-menu-item>
          <el-menu-item>
            <router-link to="/more" class="more">
              <img class="default" src="./assets/images/icon-more.svg" />
              <img class="active" src="./assets/images/icon-more-active.svg" />
              <div><span>更多</span></div>
            </router-link>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
    <transition>
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less">
@media screen and (min-width: 1025px) {
     .nav-bar.songtao{
        display: none;
    }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  // padding-bottom: 70px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  .el-menu--horizontal > .el-menu-item.is-active {
    border: none;
  }
  .nav-bar.songtao {
    width: 100%;
    position: fixed;
    z-index: 999;
    bottom: 0;
    background: #fff;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);

    .el-menu {
      .active {
        display: none;
      }

      .router-link-active {
        .default {
          display: none;
        }

        .active {
          display: inline;
        }

        color: #00a862;
      }

      li {
        line-height: unset;
        width: 20%;
        height: 55px;
        padding: 5px 0;

        a {
          text-decoration: none;

          span {
            font-weight: 400;
            font-size: 12px;
          }
        }
      }
    }
  }
}
.v-enter,
.v-lever-to {
  opacity: 0;
  transform: translate(100%);
}
.v-enter-active,
.v-lever-active {
  transition: all 0.3s ease;
}
* {
  touch-action: pan-y;
}
@media screen and (min-width: 1024px) {
     .nav-bar.songtao{
        display: none;
    }
}
</style>
