<template>
  <div class="gift1">
    <div class="issue">
      <span>星巴克星礼卡</span>
      <h2>心意相随</h2>
      <p>
        将星礼卡绑定至星享俱乐部帐户，使用星巴克App移动支付，即可加速积星，每消费40元获得一颗星星，比其他支付方式积星快25%。
      </p>
      <p>50元/100元/200元/300元/500元 （全国通用）</p>
      <a href="#">常见问题</a>
    </div>
    <div class="cards">
      <img src="../../../../assets/images/svc-cards.png" />
    </div>
    <div class="wave">
      <img src="../../../../assets/images/svc-wave.svg" />
      <p>天猫商城</p>
      <h3>浓浓心意，送给特别的TA</h3>
      <img src="../../../../assets/images/svc-tmall-1.png" />
      <a href="#">前往天猫购买</a>
      <img src="../../../../assets/images/svc-tmall-2.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "gift",
};
</script>

<style lang='less' scoped>
.gift1 {
  text-align: left;
  .issue {
    padding: 48px 32px 0;
    background-color: #00a862;

    span {
      font-size: 14px;
      color: rgba(255, 255, 255, 0.7);
      font-weight: 700;
    }
    h2 {
      color: #fff;
      font-size: 24px;
      font-weight: 400;
      margin: 24px 0 12px;
    }
    p {
      margin: 0 0 24px;
      color: #fff;
      font-size: 16px;
      font-weight: 400;
    }
    a {
      color: #fff;
      border: 1px solid #fff;
      border-radius: 48px;
      padding: 5px 10px;
    }
  }
  .cards {
    background-color: #00a862;
    img {
      width: 180px;
      display: block;
      padding: 18px 0;
      margin: auto;
    }
  }
  .wave {
    overflow: hidden;
    background-color: #c7bc87;
    text-align: center;
    p {
      color: #aa7a4a;
      font-size: 14px;
      font-weight: 700;
      margin: 0 0 24px;
    }
    h3 {
      color: #fff;
      margin-bottom: 24px;
      font-weight: 700;
      font-size: 18px;
    }
    img:nth-child(4) {
      width: 85%;
    }
    img:last-of-type {
      width: 60%;
       display: block;
    margin: auto;
    }
    a{
      margin: 24px 0 0;
    border: 1px solid #fff;
    border-radius: 48px;
    box-sizing: border-box;
    font-weight: 500;
    padding: 6px 18px;
    color: #FFF;
    font-size: 16px;
    display: inline-block;
    }
  }
}
</style>