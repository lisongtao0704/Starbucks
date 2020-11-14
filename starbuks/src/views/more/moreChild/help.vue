<template>
  <div class="help">
    <div class="head">
      <h2>帮助中心</h2>
      <div class="head-list">
           <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :router=true
        @select="handleSelect"
      >
        <el-menu-item index="1">全部</el-menu-item>
        <el-menu-item index="2">星巴克中国常见问题</el-menu-item>
        <el-menu-item index="3">星享俱乐部常见问题解答</el-menu-item>
        <el-menu-item index="4">星享俱乐部会员星礼包的常见问题解答</el-menu-item>
        <el-menu-item index="5">星巴克专星送常见问题</el-menu-item>
        <el-menu-item index="6">啡快服务常见问题</el-menu-item>
        <el-menu-item index="7">星礼卡常见问题</el-menu-item>
        <el-menu-item index="8">星巴克移动应用常见问题（手机应用）</el-menu-item>
        <el-menu-item index="9">电子发票常见问题解答</el-menu-item>
        <el-menu-item index="10">星巴克线上点单门店列表</el-menu-item>
        <el-menu-item index="11">臻选店和旗舰店清单</el-menu-item>
        <el-menu-item index="12">不可兑换会员星礼包好礼门店清单</el-menu-item>
        <el-menu-item index="13">不能使用星巴克纸质饮料券兑换的饮品列表</el-menu-item>
        <el-menu-item index="14">不可销售星礼卡等预付卡券的门店列表</el-menu-item>
        <el-menu-item index="15">隐私权政策</el-menu-item>
        <el-menu-item index="16">其他条款与规定</el-menu-item>
      </el-menu>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "help",
  data() {
    return {
      activeIndex: "1",
    };
  },
  mounted () {
    this.$router.push('/more/help/1');
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped lang="less">
.help {
  letter-spacing: 0.4px;
      padding-bottom: 58px;
 *{
   touch-action: unset;
 } 
  color: rgba(0, 0, 0, 0.87);
  .head {
    background: #fff;
    padding:16px 0 0 16px;
   .head-list::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
    .head-list{
      width: 100%;
    overflow: auto;
    }
    h2 {
      font-size: 22px;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.87);
      margin: 0;
      text-align: left;
    }
    ul{
     width: 3015px;
      overflow: auto;
      li.is-active{
        border-bottom: 3px solid #00A862;
       color: rgba(0, 0, 0, 0.87);
        font-weight: 700;
      }
      li{
        height: 48px;
        float: left;
        padding: 0;
        margin-right: 10px;
        color: rgba(0, 0, 0, 0.56);
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
}
</style>
