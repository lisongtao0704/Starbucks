<template>
  <div class="apple">
    <a
      href="https://apps.apple.com/cn/app/xing-ba-ke-zhong-guo/id499819758?ls=1"
    >
      <img
        class="xbkapp-download"
        src="../../../../assets/images/udp-ios-cn.svg"
      />
    </a>
    <div class="head">
      <h1>美妙咖啡随时相伴</h1>
      <p>
        现在您可以在您的Apple Watch上打开星巴克移动应用，使用<a href="#"
          >星享俱乐部会员</a
        >功能，以及查找附近门店。
      </p>
    </div>
    <div class="img">
      <img src="../../../../assets/images/apple-watch.gif" />
    </div>
    <div class="goods">
      <div>
        <h2>积星享好礼</h2>
        <p>随时关注您的星享俱乐部好礼，扫一扫我的二维码累积星星兑换好礼。</p>
      </div>
      <div>
        <img src="../../../../assets/images/apple-watch-rewards@2x.png" />
      </div>
    </div>
    <div class="goods">
      <div>
        <h2>移动支付</h2>
        <p>扫一扫星礼卡完成支付，查看卡内余额，Apple Watch轻松搞定。</p>
      </div>
      <div>
        <img src="../../../../assets/images/apple-watch-pay@2x.png" />
      </div>
    </div>
    <div class="goods">
      <div>
        <h2>查找门店</h2>
        <p>快速发现离您最近的星巴克门店，为您指引路线并显示所需时间。</p>
      </div>
      <div>
        <img src="../../../../assets/images/apple-watch-stores@2x.png" />
      </div>
    </div>
    <div class="foot">
      <p>
        为了能正常使用，请确认您IPhone中的<a
          href="https://apps.apple.com/cn/app/xing-ba-ke-zhong-guo/id499819758?ls=1"
          >星巴克移动应用版本为4.1.8或以上</a
        >。苹果公司标志及iPhone是苹果公司在美国及其他国家的注册商标。Apple
        Watch是苹果公司的注册商标，苹果应用商店是苹果公司的服务商标。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'apple'
}
</script>

<style lang="less" scoped>
.apple {
  background-image: linear-gradient(
    -180deg,
    #e8e8e8 4%,
    #f1f1f1 50%,
    #e8e8e8 100%
  );
  padding-bottom: 35px;
  .foot {
        background: #fff;
    padding: 48px 31px 75px;
    p {
      text-indent: 30px;
      letter-spacing: 0.4px;
      color: rgba(0, 0, 0, 0.87);
      text-align: justify;
      font-size: 16px;
      font-weight: 400;
      padding-top: 40px;
      border-top: 1px solid #0000004d;
      a {
        text-decoration: none;
        font-size: 16px;
        font-weight: 400;
        color: #00a862;
      }
    }
  }

  .goods {
    display: flex;
    text-align: justify;
    background: #fff;
    padding-top: 60px;
    div {
      padding: 0px 17px;
      h2 {
        font-size: 20px;
        font-weight: 400;
        color: #000;
        text-align: left;
        margin-bottom: 20px;
      }
      p {
        color: rgba(0, 0, 0, 0.56);
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0.4px;
      }
    }

    img {
      width: 140px;
    }
  }
  .xbkapp-download {
    position: fixed;
    z-index: 999;
    border-radius: 26px;
    bottom: 70px;
    right: 10px;
    height: 60px;
  }
  .head {
    height: 170px;
    padding-top: 45px;
    padding-bottom: 15px;
    // h2::before {
    //   content: url("");
    // }
    h1 {
      height: 60px;
      font-weight: 400;
      font-size: 24px;
      color: #000;
    }
    p {
      color: rgba(0, 0, 0, 0.87);
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 70px;
      padding: 0 42px;
      letter-spacing: 0.4px;
      font-size: 16px;
      font-weight: 400;
      a {
        text-decoration: none;
        color: #00a862;
      }
    }
  }
  .img {
    // background: url("../../../../../assets/images/apps-mobile-circle.svg")
    //   no-repeat;
    // background-size: cover;
    height: 205px;
    width: 100%;
    margin-top: 70px;
    position: relative;
    img {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 300px;
    }
  }
}
</style>
