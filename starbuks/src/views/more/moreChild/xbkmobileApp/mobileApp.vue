<template>
  <div class="mobileApp">
    <a href="https://apps.apple.com/cn/app/xing-ba-ke-zhong-guo/id499819758?ls=1">
      <img class="xbkapp-download" src="../../../../assets/images/udp-starbucks-cn.png">
    </a>
    <div class="main-xbk">
      <div class="first-bg">
      <div class="content">
        <h1>下载星巴克</h1>
        <p>
          加入星享俱乐部，积星星享好礼。轻松管理星礼卡，支付时即可加速积星，每消费40元获得一颗星星，比其他支付方式积星快25%。还能随时点咖啡，体验专星送™。
        </p>
        <p>在App内随心挑选和购买电子星礼卡, 随时查看余额，充值和管理卡片。</p>
      </div>
      <div class="mobile-device">
        <video class="mockup" controls >
          <source src="../../../../assets/apps-mobile-screens-cn.mp4" type="video/mp4"></source>
        </video>
      </div>
    </div>
    </div>
    <div class="border-bottom">
 <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        text-color="rgba(0, 0, 0, 0.56)"
        active-text-color="rgba(0, 0, 0, 0.87)"
        class="xbkmobile xbk-four-nav"
        router
      >
        <el-menu-item index="app/1"
          ><img src="../../../../assets/images/icon-star-active.svg"><p>星享俱乐部</p></el-menu-item
        >
        <el-menu-item index="2"
          ><img src="../../../../assets/images/icon-card-active.svg"><p>星礼卡</p>
        </el-menu-item>
        <el-menu-item index="3"
          ><img src="../../../../assets/images/icon-stores-active.svg"><p>查找新门店</p>
        </el-menu-item>
        <el-menu-item index="4"
          ><img src="../../../../assets/images/icon-message-active.svg"><p>了解星消息</p>
        </el-menu-item>
      </el-menu>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mobileApp',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="less">
.mobileApp {
  background-color: #efebe8;
  padding-bottom: 70px;
  .xbkapp-download {
    position: fixed;
    z-index: 999;
    border-radius: 26px;
    bottom: 70px;
    right: 10px;
    height: 52px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.38);
  }
  .border-bottom {
    background: #fff;
    padding: 0 15px;
    .block {
      /deep/ .el-carousel__indicators {
        background: red;
        top: 0;
        bottom: unset !important;
      }
     /deep/ .el-carousel__container {
        margin-top: 205px;
      }
      .small {
        .bg {
          width: 100%;
          height: 250px;
          background: url("../../../../assets/images/apps-mobile-circle.svg")
            no-repeat;
          background-size: 100%;
          opacity: 0.85;
        }
      }
    }
    .xbk-four-nav {
      border-bottom: solid 1px #15030326;
      .is-active {
        img {
          filter: grayscale(0) !important;
          opacity: 1 !important;
        }
        p {
        }
      }
      .el-menu-item {
        width: 25%;
        padding: 0;
        height: 120px;
        margin-top: 50px;
        img {
          width: 30px;
          height: 30px;
          filter: grayscale(1);
          opacity: 0.5;
        }
        p {
          margin-top: -25px;
        }
      }
      .is-active {
        border-bottom: solid 2px;
        border-bottom-color: #00a862 !important;
        color: #000;
        font-size: 14px;
        font-weight: 700;
      }
    }
  }

  .main-xbk {
    height: 960px;
    .first-bg {
      width: 100%;
      height: 560px;
      background: url("../../../../assets/images/starbuck-mobile-background-mobile.jpg")
        no-repeat;
      background-size: cover;
      background-position: center;
      position: relative;
      .content {
        h1 {
          color: #fff;
          padding-top: 45px;
          margin-bottom: 48px;
          font-weight: 400;
          font-size: 24px;
        }
        p {
          color: #fff;
          word-break: normal;
          font-size: 16px;
          margin: 0 24px 24px;
          font-weight: 400;
          letter-spacing: 0.4px;
          text-align: justify;
        }
      }
      .mobile-device {
        position: absolute;
        top: 105%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 18px;
        background: #00000033;
        border-radius: 49px;
        video {
          width: 225px;
        }
      }
    }
  }
}
</style>
