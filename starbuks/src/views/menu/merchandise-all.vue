<template>
  <div class="merchandise-all">
    <div class="tag_ad">广告</div>
    <div class="merchandise-wrapper">
       <h3 class="caption">常规产品</h3>
       <div class="grid">
         <div class="item">
           <img src="../../assets/images/menu-img2.jpg" />
           <p>爱尔兰奶油冷萃</p>
         </div>
         <div class="item">
           <img src="../../assets/images/menu-img2.jpg" />
           <p>爱尔兰奶油冷萃</p>
         </div>
         <div class="item">
           <img src="../../assets/images/menu-img2.jpg" />
           <p>爱尔兰奶油冷萃</p>
         </div>
         <div class="item">
           <img src="../../assets/images/menu-img2.jpg" />
           <p>爱尔兰奶油冷萃</p>
         </div>
       </div>
       <hr>
    </div>
    <div class="merchandise-wrapper">
       <h3 class="caption">常规产品</h3>
       <div class="grid">
         <div class="item">
           <img src="../../assets/images/menu-img2.jpg" />
           <p>爱尔兰奶油冷萃</p>
         </div>
         <div class="item">
           <img src="../../assets/images/menu-img2.jpg" />
           <p>爱尔兰奶油冷萃</p>
         </div>
         <div class="item">
           <img src="../../assets/images/menu-img2.jpg" />
           <p>爱尔兰奶油冷萃</p>
         </div>
         <div class="item">
           <img src="../../assets/images/menu-img2.jpg" />
           <p>爱尔兰奶油冷萃</p>
         </div>
       </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
  .grid{
    display: flex;
    padding: 7px;
    flex-wrap: wrap;
    justify-content: space-between;
    .item{
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
  .merchandise-all {
    position: relative;
    background-color: rgb(247, 247, 247);
    min-height: 100vh;
    padding-top:24px;
    box-shadow: 0 -2px 2px #eee;
    .tag_ad {
      position: absolute;
      top: 20px;
      right: 10px;
      padding: 0px 6px;
      color: #fff;
      background-color: #000;
      opacity: 0.6;
      border-radius: 2px;
      z-index: 200;
      font-size: 14px;
    }
    .merchandise-wrapper{
      padding: 0 16px 80px;
     .caption{
       text-align: left;
       color: rgba(0, 0, 0, 0.56);
       font-size: 14px;
       font-weight: 700;
       margin-bottom: 12px;
     }
    }
  }
</style>
