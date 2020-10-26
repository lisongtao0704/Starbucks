<template>
  <div class="club">
    <div class="head">
      <h2>星享俱乐部</h2>
      <p>在门店展示我的二维码可积星星享好礼...</p>
    </div>
    <div class="img">
      <img src="../../../../../assets/images/apps-mobile-screens-1.png" />
      <!-- <router-link to="4" class="left">‹</router-link>
      <router-link to="2" class="right">›</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "club"
}
</script>

<style lang="less" scoped>
.club {
  .head {
    height: 170px;
    h2::before {
      content: url("../../../../../assets/images/apps-mobile-star.svg");
    }
    h2 {
      height: 60px;
      font-weight: 400;
      font-size: 20px;
      color: #000;
      margin: 70px 0 -10px;
    }
    p {
      color: rgba(0, 0, 0, 0.56);
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 70px;
    }
  }
  .img {
    background: url("../../../../../assets/images/apps-mobile-circle.svg")
      no-repeat;
    background-size: cover;
    height: 205px;
    width: 100%;
    position: relative;
    img {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 300px;
    }

    // .left {
    //      position: absolute;
    // left: 0;
    // top: 45px;
    // text-decoration: none;
    // font-size: 60px;
    // opacity: .3;
    // }
    // .right {
    //   position: absolute;
    //   right: 0;
    //   top: 45px;
    //   text-decoration: none;
    //   font-size: 60px;
    //   opacity: .3;
    // }
  }
}
</style>
