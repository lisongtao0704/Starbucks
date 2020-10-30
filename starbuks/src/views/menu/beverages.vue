<template>
  <div class="merchandise_container">
    <div class="merchandise">
      <header>
        <button class="el-icon-arrow-left" @click="back"></button>
        <span>饮料</span>
      </header>
      	<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
      		<div class="mui-scroll">
            <a class="mui-control-item mui-active" @click="getByCateId('all')">全部</a>
            <a class="mui-control-item" @click="getByCateId('mixology')">星巴克玩味冰调™</a>
            <a class="mui-control-item" @click="getByCateId('icecream')">手工调制浓缩咖啡</a>
            <a class="mui-control-item" @click="getByCateId('coldextra')">星冰乐®</a>
            <a class="mui-control-item" @click="getByCateId('espresso')">茶瓦纳™</a>
            <a class="mui-control-item" @click="getByCateId('frappu')">经典巧克力饮品</a>
            <a class="mui-control-item" @click="getByCateId('gas-coldextra')">咖啡融合冰淇淋</a>
            <a class="mui-control-item" @click="getByCateId('chocolate')">星巴克冷萃咖啡系列</a>
            <a class="mui-control-item" @click="getByCateId('chawana')">气致™冷萃咖啡</a>
      		</div>
      	</div>
    </div>

    <!-- 图片列表区域 -->
    <ul class="photo-list">
    	<router-link v-for="item in list" :to="'goodinfo/' + item.ProductID" tag="li">
        <img :src="item.ProductImage"/>
        <p>{{item.ProductName}}</p>
      </router-link>
    </ul>
    <router-link to="/menu/search" class="menu-bun">搜索菜单</router-link>
  </div>
</template>
<script>
// 1. 导入 mui 的js文件
import mui from '../../lib/mui/js/mui.min.js'
export default {
  data () {
    return {
      list: [],
      cates: []
    }
  },
  created () {
    this.getByCateId('all')
  },
  methods: {
    back () {
      this.$router.push('/menu')
    },
    getByCateId (val) {
      this.$http.get('http://123.56.129.223/starbucks/menu.php?category=beverages&type=' + val).then(res => {
        this.list = res.data
        // console.log( res.data)
      })
    }
  },
  mounted () {
    	mui('.mui-scroll-wrapper').scroll({
    		deceleration: 0.0005 // flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    	})
  }
}
</script>

<style lang="less" scoped>
  ul{
    display: flex;
    padding: 7px;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: 1px -2px 2px #ccc;

    li{
      width: 49%;
      margin: 4px 0;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      img{
        width: 100%;
        box-sizing: border-box;
        padding: 12px;
        border-radius: 50%;
      }
      p{
        font-size: 16px;
        line-height: 19px;
        padding: 0 7px;
        color: #000000;
        margin: 12px 0 24px 0;
        font-weight: 700;
      }
    }
  }
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
     header{
       text-align: left;
        margin-bottom: 12px;
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
      .mui-scroll{
        height: 50px;
        margin-bottom: -8px;
        a {
          padding-bottom: 1px;
          color: rgba(0, 0, 0, 0.56);
          padding: 4px 0;
          text-decoration: none;
          margin-right:18px;
          font-size:14px;
        }
        .mui-control-item{
          display:inline;
        }
        .mui-control-item.mui-active{
          color:rgba(0, 0, 0, 0.76) !important;
          font-weight: 700;
          border-bottom: 3px solid #00a862;
        }
       }
       .mui-slider-indicator.mui-segmented-control {
           position: relative;
           bottom: auto;

       }
   }

</style>
