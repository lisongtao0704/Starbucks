<template>
  <div class="shopinfo">
    <div class="order1">
      <button data-v-31f1e9be="" class="el-icon-arrow-left" @click="back"></button>
      <div class="gg">广告</div>
      <img src="../../assets/images/kv-bev-1-mobile.jpg" />
    </div>
    <div class="order2">
      <div class="order2-section">
        <p class="caption">三明治、帕尼尼、卷</p>
        <h3 class="display-1">牛油果鸡肉焙果</h3>
        <p class="caption-1">牛油果鸡肉焙果内含熏煮过的香嫩鸡胸肉，搭配美洲进口牛油果酱和车达芝士，口味清新健康<br>
          焙果一定要趁热吃，热腾腾的焙果外部松脆，内部坚韧，嚼劲十足<br><br>
          咖啡搭配推荐：冷萃咖啡</p>
      </div>
    </div>
  </div>
</template>

<script>
  // export default{
  //   data(){
  //     return{
  //       id:this.$route.params.id
  //     }
  //   },
  //   created:{
  //     getGoodsInfo()
  //   }
  //   methods:{
  //     getGoodsInfo() {
  //     	this.$http.get('http://localhost:8080/allShop.json'+this.id).then(res => {
  //     		//console.log(res.body.message[0]);
  //     		console.log()
  //     	})
  //     },
  //   }
  // }
  export default{
    methods:{
      back(){
        this.$router.push('/menu/search')
      }
    }
  }
</script>

<style lang="less" scoped>
  .shopinfo {
    .order1 {
      position: relative;
      button {
        position: absolute;
        border: none;
        padding: 8px;
        top: 10px;
        left: 10px;
      }
      .gg {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: #59575a;
        color: #fff;
        font-size: 12px;
        padding: 4px;
        border-radius: 5px;
      }
      img{
        width: 100%;
      }
    }
    .order2{
      .order2-section{
        margin: 24px;
        .caption{
          color: #C2A661;
          margin-bottom: 12px;
          text-align: left;
          font-size: 14px;
          font-weight: 700;
        }
        .display-1{
          margin-bottom: 12px;
          color:#000;
          text-align: left;
        }
        .caption-1{
          line-height: 160%;
          text-align: left;
          color:#000;
          font-size: 16px;
        }
      }
    }
  }
</style>
