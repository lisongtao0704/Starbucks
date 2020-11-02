<template>
  <div class="xbkChoose">
    <h2>关于星巴克臻选™</h2>
    <section>
      <div class="bg-hreo"></div>
      <div class="hide"></div>
      <div class="logo-info">
        <img src="../../../assets/images/reserve-logo-s.png" />
        <h1>代表我们更高品质的<br />星巴克臻选™咖啡</h1>
      </div>
    </section>
    <div class="map">
      <article>
        我们走访世界各地搜罗品质出众的咖啡豆，当中只有少量珍贵而独特风味的
        品种，才会被冠以星巴克臻选™的称号。 它们不可多得，且拥有让人着迷的风味。
        这些臻选™咖啡豆只在指定星巴克门店限量供应。
      </article>
      <a href="/stores">查看星巴克臻选™咖啡门店</a>
    </div>
    <div class="coffee">
      <p>限量供应</p>
      <p>最新星巴克臻选™咖啡</p>
      <div class="kind-father">
        <div class="kind">
          <img src="../../../assets/images/china-yunnan-puer-baoshan.png" />
          <p>中国云南普洱保山综合咖啡豆</p>
        </div>
        <div class="kind">
          <img src="../../../assets/images/china-qingkai-farm.png" />
          <p>中国云南晴开农场咖啡豆</p>
        </div>
      </div>
      <div class="kind">
        <img src="../../../assets/images/ethiopia-bitta-farm.png" />
        <p>埃塞俄比亚比塔庄园咖啡豆</p>
      </div>
    </div>
    <img class="bg-pattern" src="../../../assets/images/bg-pattern-1.jpg" />
    <article>
      <h2>什么是星巴克臻选™咖啡</h2>
      <div class="bg1">
        <img src="../../../assets/images/article-1.jpg" />
      </div>
      <span
        >每年，我们的伙伴环游世界，只为找到上乘的咖啡。每隔一段时间，我们都会找到一款珍贵而独特的咖啡豆，并且迫不及待地想将他们带回来和大家分享。我们在支持中心的采购部门以及农业学家们一直致力于帮助全世界的咖啡种植者们，通过与他们合作，我们希望获得发现不同寻常并且独特的咖啡种类的机会。而在我们的品鉴部门，我们的专业品鉴师每年会品尝超过25万杯咖啡，然后再从中选取稀有而独特的几个种类来制作星巴克臻选™咖啡。</span
      >
      <p>风土条件</p>
      <span
        >咖啡的生长，就如同酿酒的葡萄，受到不同产区的具体生长环境的影响，形成了大部分的风味。咖啡生长地区的土地，气温，海拔，降雨量和阳光等众多可变因素赋予了咖啡一系列特殊的个性，呈现出一杯美味的咖啡。</span
      >
      <div class="bg2">
        <img src="../../../assets/images/article-2.jpg" />
      </div>
      <p>加工方法</p>
      <span
        >每一颗咖啡豆的生命都始于一颗咖啡浆果的种子。这颗咖啡果实如何被从咖啡豆中取出
        – 也就是我们说的咖啡豆的加工 –
        对于咖啡的风味有着直接的，甚至是巨大的影响。咖啡在烘焙前的收获，碾磨，水洗或者自然加工，甚至陈年豆的处理都可以成就一杯口味令人惊叹的咖啡。</span
      >
      <div class="bg1">
        <img src="../../../assets/images/article-3.png" />
      </div>
      <p>咖啡品种</p>
      <span
        >咖啡品种有着悠久的历史，可以创造出一杯珍贵稀有的咖啡。最常见的四种阿拉比卡咖啡的变种为波旁，铁毕卡，卡杜拉和卡杜艾。波旁和铁毕卡是原生种咖啡豆，是所有咖啡树的原型。卡杜拉和卡杜艾是波旁混合种的后代，混合了（通过自然混合或人工方法）两种现有咖啡的变种后得到，创造出一杯崭新的咖啡。</span
      >
      <p>人文故事</p>
      <span
        >每一款星巴克臻选™咖啡的背后都讲述了一个关于家庭，种植农和社区的故事。这些人文故事带给我们的是星巴克臻选™体验中不可或缺的一部分。</span
      >
      <div class="bg1">
        <img src="../../../assets/images/article-4.jpg" />
      </div>
    </article>
    <div class="bg-logo">
      <img class="bg-pattern2" src="../../../assets/images/bg-pattern-2.jpg" />
      <img src="../../../assets/images/reserve-logo.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "xbkChoose",
};
</script>
  
<style lang="less" scoped>
.xbkChoose {
  letter-spacing: 0.4px;
  padding-bottom: 55px;
  h2 {
    font-weight: 700;
    margin: 0;
    font-size: 22px;
    padding: 16px;
    text-align: left;
    background: #fff;
    color: rgba(0, 0, 0, 0.87);
  }
  section {
    position: relative;
    .bg-hreo {
      width: 100vw;
      height: 300px;
      background: url("../../../assets/images/hero.jpg") no-repeat;
      background-size: cover;
      background-position: center;
    }
    .hide {
      background-image: linear-gradient(
        -180deg,
        rgba(0, 0, 0, 0.35) 0%,
        rgba(0, 0, 0, 0.7) 81%
      );
      content: "";
      height: 100%;
      position: absolute;
      width: 100%;
      top: 0;
      z-index: 998;
    }
    .logo-info {
      z-index: 999;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
        width: 72px;
      }
      h1 {
        font-size: 24px;
        color: #c48d69;
        font-weight: 700;
        display: block;
        width: 225px;
        line-height: 40px;
      }
    }
  }
  .map {
    width: 100vw;
    height: 280px;
    background: url("../../../assets/images/map.jpg") no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    article {
      color: rgba(0, 0, 0, 0.87);
      padding: 0 50px;
      font-size: 16px;
      font-weight: 400;
    }
    a {
      font-weight: 700;
      padding: 12px 24px;
      background: #c48d69;
      border-color: #c48d69;
      color: #fff;
      border-radius: 48px;
      margin-top: 52px;
    }
  }
  .coffee {
    background-color: #231f20;
    padding-bottom: 20px;
    p:first-of-type {
      color: #c48d69;
      padding-top: 30px;
      font-size: 14px;
      font-weight: 700;
      margin: 0;
    }
    p:last-of-type {
      color: #c48d69;
      font-size: 16px;
      font-weight: 700;
      margin: 0;
    }
    .kind-father {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 25px;
    }
    .kind {
      margin: 20px;
      img {
        width: 120px;
        border-radius: 50%;
      }
      p {
        color: #fff;
        font-weight: 700;
        width: 130px;
        margin: auto;
        font-size: 16px;
      }
    }
  }
  .bg-pattern {
    border-top: 1px solid;
    width: 100%;
    vertical-align: middle;
  }
  .bg-logo {
    position: relative;
    .bg-pattern2 {
      width: 100%;
      vertical-align: middle;
    }
    .bg-pattern2 + img {
      width: 150px;
      position: absolute;
      top: 85px;
      left: 15px;
    }
  }

  article {
    background: #fff;
    h2 {
      text-align: center;
      margin: 0;
      padding-bottom: 18px;
      color: #000;
      font-size: 20px;
      font-weight: 400;
    }
    .bg1 {
      text-align: left;
      img {
        width: 75vw;
      }
    }
    .bg2 {
      text-align: right;
      img {
        width: 75vw;
      }
    }
    p {
      font-weight: 700;
      font-size: 16px;
      color: #000;
      text-align: left;
      padding: 0 20px;
    }
    span {
      color: rgba(0, 0, 0, 0.87);
      font-size: 16px;
      font-weight: 400;
      display: block;
      padding: 20px;
      text-align: left;
    }
  }
}
</style>
