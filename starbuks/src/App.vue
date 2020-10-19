<template>
  <div id="app">
    <div id="nav">
      <div class="nav-bar">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item >
            <a href="#" class="home">
              <img src="./assets/images/icon-home.svg" />
              <div><span>主页</span></div>
            </a>
          </el-menu-item>
          <el-menu-item >
            <a href="#" class="stores">
              <img src="./assets/images/icon-stores.svg" />
              <div><span>门店</span></div>
            </a>
          </el-menu-item>
          <el-menu-item >
            <a href="#" class="account">
              <img src="./assets/images/icon-account.svg" />
              <div><span>我的账户</span></div>
            </a>
          </el-menu-item>
          <el-menu-item >
            <a href="#" class="menu">
              <img src="./assets/images/icon-menu.svg" />
              <div><span>菜单</span></div>
            </a>
          </el-menu-item>
          <el-menu-item >
            <a href="#" class="more">
              <img src="./assets/images/icon-more.svg" />
              <div><span>更多</span></div>
            </a>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  .el-menu--horizontal > .el-menu-item.is-active {
    border: none;
  }
  .nav-bar {
    width: 100%;
    position: fixed;
    bottom: 0;
    background: #fff;
    .el-menu {
      .home:hover{
        img{
         content: url("./assets/images/icon-home-active.svg");
        }
          color: #00A862;
      }
      .stores:hover{
        img{
         content: url("./assets/images/icon-stores-active.svg");
        }
          color: #00A862;
      }
      .account:hover{
        img{
         content: url("./assets/images/icon-account-active.svg");
        }
          color: #00A862;
      }
      .menu:hover{
        img{
         content: url("./assets/images/icon-menu-active.svg");
        }
          color: #00A862;
      }
      .more:hover{
        img{
         content: url("./assets/images/icon-more-active.svg");
        }
          color: #00A862;
      }
      li {
        line-height: unset;
        width: 20%;
        height: 55px;
        padding: 0;
        a {
          text-decoration: none;
          // &.router-link-exact-active {
          //   color: #42b983;
          // }
          span{
            font-weight: 400;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
