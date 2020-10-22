<template>
  <div class="merchandise_container">
    <div class="merchandise">
      <header>
        <button class="el-icon-arrow-left" @click="back"></button>
        <span>咖啡产品</span>
      </header>
      	<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
      		<div class="mui-scroll">
            <a class="mui-control-item mui-active">全部</a>
            <a class="mui-control-item">咖啡豆</a>
            <a class="mui-control-item">星巴克VIA® 免煮咖啡</a>
            <a class="mui-control-item">星巴克臻选™咖啡</a>
            <a class="mui-control-item">Origami™</a>
      		</div>
      	</div>
    </div>

    <!-- 图片列表区域 -->
    <ul class="photo-list">
    	<li>
        <img src="../../assets/images/menu-img2.jpg" />
        <p>爱尔兰奶油冷萃</p>
      </li>
      <li>
        <img src="../../assets/images/menu-img2.jpg" />
        <p>爱尔兰奶油冷萃</p>
      </li>
      <li>
        <img src="../../assets/images/menu-img2.jpg" />
        <p>爱尔兰奶油冷萃</p>
      </li>
      <li>
        <img src="../../assets/images/menu-img2.jpg" />
        <p>爱尔兰奶油冷萃</p>
      </li>
    </ul>

    <router-link to="/menu/search" class="menu-bun">搜索菜单</router-link>
  </div>
</template>
<script>
  // 1. 导入 mui 的js文件
  import mui from "../../lib/mui/js/mui.min.js";
  export default{
    methods:{
      back(){
        this.$router.push('/menu')
      }
    },
    mounted() {
    	mui(".mui-scroll-wrapper").scroll({
    		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    	});
    },
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
       margin-bottom:12px;
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
