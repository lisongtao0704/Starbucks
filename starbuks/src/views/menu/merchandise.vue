<template>
  <div class="merchandise_container">
    <div class="merchandise">
      <header>
        <button class="el-icon-arrow-left" @click="back"></button>
        <span>商品</span>
      </header>
      <div class="router-div">
        <router-link to="merchandise-all">全部</router-link>
        <router-link to="merchandise-core">常规商品</router-link>
        <router-link to="merchandise-store">甄选商品</router-link>
      </div>
    </div>
    <router-view></router-view>
    <router-link to="/menu/search" class="menu-bun">搜索菜单</router-link>
  </div>
</template>

<script>
  export default{
    methods:{
      back(){
        this.$router.push('/menu')
      }
    }
  }
</script>

<style lang="less" scoped>
  .menu-bun{
      position: fixed;
      bottom: 72px;
      right: 22px;
      background-color: #00a862;
      color: #fff;
      font-weight: 700;
      padding: 14px 24px;
      border-radius: 48px;
      border: none;
      text-decoration: none;
   }
  .merchandise{
    padding: 16px 16px 0;
  }
  .router-div {
    text-align: left;
    line-height: 50px;
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
  header{
    text-align: left;
    button{
      border: none;
      padding: 8px;
    }
    span{
      margin-left: 12px;
      font-size: 22px;
      font-weight: 700;
      display: inline-block;
      height: 100%;
    }
  }
  * { touch-action: pan-y; }
</style>
