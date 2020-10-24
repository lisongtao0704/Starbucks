<template>
  <div class="shopinfo">
    <div class="order1">
      <button data-v-31f1e9be="" class="el-icon-arrow-left" @click="back"></button>
      <div class="gg">广告</div>
      <img :src="goodInfo.preview"  alt="暂无图片"/>
    </div>
    <div class="order2">
      <div class="order2-section">
        <p class="caption">{{goodInfo.title}}</p>
        <h3 class="display-1">{{goodInfo.title}}</h3>
        <p class="caption-1">{{goodInfo.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        goodInfo: [],
        id: this.$route.params.id,
      }
    },
    created(){
       this.getGoodsInfo()
    },
    methods:{
      back(){
        this.$router.back()
      },
      getGoodsInfo() {
      	this.$http.get('http://123.56.129.223/starbucks/product.php?id=' + this.id).then(res => {
          this.goodInfo=res.data[0];
          console.log(this.goodInfo);
      	})
      },
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
        min-height: 397px;
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
          font-size: 22px;
          font-weight: 700;
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
