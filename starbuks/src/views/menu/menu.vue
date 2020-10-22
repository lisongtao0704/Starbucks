<template>
  <div class="menu-container">
    <h2 class="navTitle-menuIndex">菜单</h2>
    <div class="menubtn-router">
      <router-link to="/menu">季度精选</router-link>
      <router-link to="/menu/beverages">饮料</router-link>
      <router-link to="/menu/food">美食</router-link>
      <router-link to="/menu/coffee">咖啡产品</router-link>
      <router-link to="/menu/merchandise">商品</router-link>
    </div>
    <div class="menu-img">
      <div class="gg">广告</div>
      <a href="#lto-items"><img src="../../assets/images/menu-img.jpg"></a>
    </div>
    <div class="wrapper">
      <h2>用心荟萃</h2>
      <p class="text description" style="padding:0 20px">
        这个秋天，我们用心荟萃4种明星萃型。<br> 全新爱尔兰风情雪绒冷萃，经典爱尔兰奶油风味融入冷萃咖啡基底，<br> 香草风味奶油与可可香气美妙衬托沁滑冷萃咖啡。<br> 更有爱尔兰风情雪绒咖啡，采用经典原萃，口感平衡顺滑。<br>
        海盐焦糖风味馥芮白™采用精萃浓缩咖啡，清新海盐咸香美妙融合焦糖焦甜。<br> 枫糖可芮奇诺以满萃为基底，馥郁焦香，佐以进口枫糖糖浆，余韵悠长。
      </p>
    </div>
    <div class="featured-items">
      <div class="featured-item">
        <a href="#lto-items" class="block relative">
          <img src="../../assets/images/menu-img2.jpg">
        </a>
        <div class="description">
          <h2>尝一口金秋</h2>
          <div class="body">
            <p :class="{ismove:ishidden}">全新花生咖啡慕斯蛋糕，花生与咖啡的碰撞，<br> 香气怡人的花生混合着咖啡慕斯，口感馥郁清香，回味悠长，感受这一口美妙！<br>
              咖啡豆乳味慕斯蛋糕，绵密豆乳味咖啡豆造型慕斯，<br>
              点缀Q弹的咖啡果冻颗粒，淋上巧克力味酱，整体风味清甜的焦香，绵密爽滑。</p>
          </div>
          <span :class="isok?classA:classB" @click="change"></span>
        </div>
      </div>
      <div class="featured-item">
        <a href="#lto-items" class="block relative">
          <img src="../../assets/images/menu-img2.jpg">
        </a>
        <div class="description">
          <h2>尝一口金秋</h2>
          <div class="body">
            <p>全新花生咖啡慕斯蛋糕，花生与咖啡的碰撞，<br> 香气怡人的花生混合着咖啡慕斯，口感馥郁清香，回味悠长，感受这一口美妙！<br> 咖啡豆乳味慕斯蛋糕，绵密豆乳味咖啡豆造型慕斯，<br>
              点缀Q弹的咖啡果冻颗粒，淋上巧克力味酱，整体风味清甜的焦香，绵密爽滑。</p>
          </div>
          <span :class="isok?classA:classB" @click="change"></span>
        </div>
      </div>
      <div class="featured-item">
        <a href="#lto-items" class="block relative">
          <img src="../../assets/images/menu-img2.jpg">
        </a>
        <div class="description">
          <h2>尝一口金秋</h2>
          <div class="body">
            <p>全新花生咖啡慕斯蛋糕，花生与咖啡的碰撞，<br> 香气怡人的花生混合着咖啡慕斯，口感馥郁清香，回味悠长，感受这一口美妙！<br> 咖啡豆乳味慕斯蛋糕，绵密豆乳味咖啡豆造型慕斯，<br>
              点缀Q弹的咖啡果冻颗粒，淋上巧克力味酱，整体风味清甜的焦香，绵密爽滑。</p>
          </div>
          <span :class="isok?classA:classB" @click="change"></span>
        </div>
      </div>
      <div class="featured-item">
        <a href="#lto-items" class="block relative">
          <img src="../../assets/images/menu-img2.jpg">
        </a>
        <div class="description">
          <h2>尝一口金秋</h2>
          <div class="body">
            <p>全新花生咖啡慕斯蛋糕，花生与咖啡的碰撞，<br> 香气怡人的花生混合着咖啡慕斯，口感馥郁清香，回味悠长，感受这一口美妙！<br> 咖啡豆乳味慕斯蛋糕，绵密豆乳味咖啡豆造型慕斯，<br>
              点缀Q弹的咖啡果冻颗粒，淋上巧克力味酱，整体风味清甜的焦香，绵密爽滑。</p>
          </div>
          <span :class="isok?classA:classB" @click="change"></span>
        </div>
      </div>
      <div class="featured-item">
        <a href="#lto-items" class="block relative">
          <img src="../../assets/images/menu-img2.jpg">
        </a>
        <div class="description">
          <h2>尝一口金秋</h2>
          <div class="body">
            <p>全新花生咖啡慕斯蛋糕，花生与咖啡的碰撞，<br> 香气怡人的花生混合着咖啡慕斯，口感馥郁清香，回味悠长，感受这一口美妙！<br> 咖啡豆乳味慕斯蛋糕，绵密豆乳味咖啡豆造型慕斯，<br>
              点缀Q弹的咖啡果冻颗粒，淋上巧克力味酱，整体风味清甜的焦香，绵密爽滑。</p>
          </div>
          <span :class="isok?classA:classB" @click="change"></span>
        </div>
      </div>
    </div>
    <div class="lto-items" id="lto-items">
      <h2>所有新品</h2>
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
        <div class="item">
          <img src="../../assets/images/menu-img2.jpg" />
          <p>爱尔兰奶油冷萃</p>
        </div>
      </div>
    </div>
    <router-link to="/menu/search" class="menu-bun">搜索菜单</router-link>
  </div>
</template>

<script>
  export default {
    name: 'menus',
    data() {
      return {
        ishidden: true,
        isok: true,
        classA: 'el-icon-arrow-down',
        classB: 'el-icon-arrow-up'
      }
    },
    methods: {
      change() {
        this.isok = !this.isok;
        this.ishidden = !this.ishidden
      }
    }
  }
</script>

<style lang='less' scoped>
  .menu-container {
    .navTitle-menuIndex {
      font-weight: 700;
      line-height: 140%;
      margin: 15px 0 0 15px;
      color: #333;
      text-align: left;
      margin-left: 15px;
      font-size: 26px;
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
    .menubtn-router {
      text-align: left;
      line-height: 50px;
      margin-left: 15px;
      margin-bottom: -8px;

      a {
        padding-bottom: 1px;
        margin-bottom: 6px;
        color: rgba(0, 0, 0, 0.56);
        padding: 4px 0;
        text-decoration: none;
        margin-right: 18px;
        font-size: 16px;
      }

      .router-link-active {
        color: rgba(0, 0, 0, 0.76) !important;
        font-weight: 700;
        border-bottom: 3px solid #00a862;
      }
    }

    .menu-img {
      position: relative;

      .gg {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: rgb(89, 87, 90);
        color: #fff;
        font-size: 12px;
        padding: 4px;
        border-radius: 5px;
      }

      a {
        width: 100%;

        img {
          width: 100%;
        }
      }
    }

    .wrapper {
      padding: 30px 0;

      h2 {
        margin-bottom: 12px;
        font-weight: 400;
        font-size: 22px;
      }

      p {
        padding: 0 20px;
        line-height: 25px;
      }
    }

    .featured-items {
      padding: 20px 0;

      .featured-item {
        padding-bottom: 20px;

        a {
          display: block;
          width: 100%;
          margin-bottom: 30px;

          img {
            width: 100%;
          }
        }

        .description {
          h2 {
            margin-bottom: 12px;
            font-weight: 400;
            font-size: 22px;
          }

          .body:after {
            background: linear-gradient(rgba(255, 255, 255, 0) 24px, #eee);
            content: '';
            height: 100%;
            left: 0;
            opacity: 0.4;
            position: absolute;
            top: 0;
            transition-duration: 0.1s;
            transition-property: opacity;
            width: 100%;
          }

          .body {
            position: relative;

            p {
              height: 100%;
              padding: 0 20px;
              line-height: 25px;
              position: relative;
              transition: all 0.4s ease;
            }

            .ismove {
              height: 50px;
              overflow: hidden;
              background: linear-gradient(rgba(255, 255, 255, 0) 24px, #FFF);
            }
          }
        }
      }
    }
    .lto-items{
      background-color: rgb(247,247,247);
      padding: 40px 16px 0;
      h2{
        font-weight: 400;
        margin-bottom: 12px;
        font-size: 20px;
      }
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
          }
          p{
            font-size: 16px;
            line-height: 19px;
            padding: 0 7px;
            color: #000000;
            margin: 12px 0 24px 0;
          }
        }
      }
    }
  }
</style>
