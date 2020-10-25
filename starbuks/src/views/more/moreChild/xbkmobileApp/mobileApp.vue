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
          <source src="../../../../assets/apps-mobile-screens-cn.mp4" type="video/mp4">  </source>
        </video>
      </div>
    </div>
    </div>
    <div class="border-bottom">
 <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="handleSelect"
        text-color="rgba(0, 0, 0, 0.56)"
        active-text-color="rgba(0, 0, 0, 0.87)"
        class="xbkmobile xbk-four-nav"
        router
      >
        <el-menu-item index="1"
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
     <div class="foot">
        <p>
    星巴克手机应用目前在
    <a href="https://apps.apple.com/cn/app/xing-ba-ke-zhong-guo/id499819758?ls=1">App Store</a>
    和以下安卓平台均有下载
  </p>
  <ul>
    <li><a href="#">应用宝</a></li>
    <li><a href="#">小米商店</a></li>
    <li><a href="#">360手机助手</a></li>
    <li><a href="#">百度手机助手</a></li>
    <li><a href="#">魅族</a></li>
    <li><a href="#">豌豆荚安装</a></li>
    <li><a href="#">华为应用市场</a></li>
    
  </ul>
  <div class="qr-code">
   <div style="width: 100%;
    display: flex;
    justify-content: center;"><img src="../../../../assets/images/app_qr_20181112.jpg"></div> 
    <div class="xiazai"><img src="../../../../assets/images/苹果.png"><img src="../../../../assets/images/安卓 B.png"></div>
  </div>
  <p class="issue">如果您有任何问题，请查看常见问题，也可以直接与我们联系</p>
      </div>
      <div class="common"><a href="/more/help"><div>常见问题</div></a><a href="https://www.starbucks.com.cn/about/contact/"><div>联系我们</div></a></div>
  </div>
</template>

<script>
export default {
  name: "mobileApp",
  data() {
    return {
      activeIndex: "1",
    };
  },
  created() {
    if (!sessionStorage.getItem("index")) {
      return;
    }
    this.activeIndex = sessionStorage.getItem("index");
  },
  methods: {
    handleSelect(key, keyPath) {
      this.activeIndex = key;
      sessionStorage.setItem("index", key);
      console.log(this.activeIndex);
    },
  },
};
</script>

<style scoped lang="less">
.mobileApp {
  background-color: #efebe8;
  padding-bottom: 165px;
  .common {
    display: flex;
    justify-content: center;
    a {
      text-decoration: none;
    }
    div {
      border: 1px solid #00a862;
      border-radius: 48px;
      margin: 0 5px;
      color: #00a862;
      font-weight: 500;
      padding: 6px 18px;
    }
  }
  .foot {
    .issue {
      margin-top: 48px;
      padding: 0 23px 30px;
      color: rgba(0, 0, 0, 0.87);
      font-size: 16px;
      font-weight: 400;
    }
    .qr-code {
      img {
        width: 160px;
        margin-top: 15px;
      }
      .xiazai {
        img {
          width: 35px;
          padding-top: 0;
          margin: 0 5px;
        }
      }
    }
    letter-spacing: 0.4px;
    padding: 55px 20px 20px;
    p {
      font-size: 18px;
      font-weight: 400;
      line-height: 30px;
      color: #000;
      a {
        text-decoration: none;
        color: #00a862;
      }
    }
    ul {
      padding: 20px 0;
      li:last-of-type a {
        border-right: unset;
      }
      li {
        list-style: none;
        float: left;
        margin-bottom: 3px;
        a {
          padding: 0 17px;
          border-right: 1px solid black;
          text-decoration: none;
          color: #00a862;
        }
      }
    }
  }
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
          margin-top: 0;
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
