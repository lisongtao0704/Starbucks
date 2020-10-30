<template>
  <div class="inchina history">
    <div class="inchina-bg">
      <div class="in-china-bg"></div>
      <section>
        <h1>历史回顾</h1>
        <p>
      多年以来，我们一直坚信我们一切的成功和进步都来源于我们勤奋专业的伙伴（员工），以及我们尊敬的顾客。虽然这些年来我们经历了令人瞩目的成长，但我们仍将继续为中国顾客提供热情周到的服务，并且和这些珍贵的顾客一起，分享我们引以为豪的咖啡文化。
        </p>
      </section>
    </div>
    <div class="plate">
      <router-link to="/more/asXbk/history">
        <h5>历史</h5>
      </router-link>
      <section>
        <div class="svg">
          <img src="../../../../assets/images/icon-opennow.svg" />
          <div>
            <p>1999</p>
            <p>星巴克内地第一家门店</p>
          </div>
        </div>
        <div class="main">
          星巴克于1999年1月，在北京中国国际贸易中心开设中国内地第一家门店。对星巴克来说，中国目前已成为星巴克发展速度最快、最大的海外市场。
        </div>
      </section>
    </div>
    <div class="plate">
      <router-link to="/stores">
        <h5>门店</h5>
      </router-link>
      <section>
        <div class="svg">
          <img src="../../../../assets/images/icon-pin.svg" />
          <div>
            <p>4,400</p>
            <p>多家门店遍布中国内地180多个城市</p>
          </div>
        </div>
        <div class="main">
          目前，星巴克已经在中国内地180多个城市开设了超过4,400家门店，拥有58,000多名星巴克伙伴。这一独特优势使我们能够在每一天，通过每一家星巴克门店，践行我们的承诺。
        </div>
      </section>
    </div>
    <div class="plate">
      <router-link to="/more/asXbk/duty">
        <h5>社会关注</h5>
      </router-link>
      <section>
        <div class="svg">
          <img src="../../../../assets/images/icon-history.svg" />
          <div>
            <p>1,000,000</p>
            <p>小时社区服务</p>
          </div>
        </div>
        <div class="main">
          进入中国以来，星巴克始终致力于回馈社会，持续在中国内地不同地区和城市开展企业社会责任项目，对于当地社会发展做出自己的一份贡献。自2011年起，星巴克中国的伙伴和志愿者们一共贡献了超过100万小时的社区服务，增进了与社区和顾客的情感联系。
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'History'
}
</script>

<style scoped lang="less">
.inchina {

  letter-spacing: 0.4px;
  z-index: -1;
  .plate {
    background-color: #f7f7f7;
    padding: 0 12px;
    h5 {
      color: #00a862;
      font-size: 16px;
      margin: 0;
      font-weight: 400;
      line-height: 55px;
    }
    section {
      box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.12);
      .main {
        background: #fff;
        color: rgba(0, 0, 0, 0.87);
        font-size: 16px;
        font-weight: 400;
        text-align: justify;
        padding: 22px 21px 50px;
        letter-spacing: 0.4px;
      }
      .svg {
        position: relative;
        padding: 10px 0 5px;
        width: 100%;
        background-color: #00a862;
        border-top: 4px solid #00653e;

        img {
          height: 71px;
          opacity: 0.3;
        }
        div {
          position: absolute;
          margin-top: 10px;
          width: 100%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          p:first-of-type {
            font-weight: 700;
            font-size: 24px;
          }
          p:last-of-type {
            font-weight: 400;
            font-size: 14px;
          }
        }
      }
    }
  }
  height: 216px;
  .inchina-bg {
    background: url('../../../../assets/images/Starbucks0-In-China-History.jpg') no-repeat;
    background-size: cover;
    width: 100%;
    height: 216px;

    padding: 0 26px;
  }
  background-color: #f7f7f7;

  section {
    height: 100%;
    position: relative;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      font-weight: 700;
      color: #fff;
      margin-bottom: 12px;
      font-size: 24px;
    }
    p {
      color: #fff;
      font-weight: 400;
      font-size: 14px;
    }
  }
  letter-spacing: 0.4px;

  position: relative;
  .in-china-bg::before {
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
    left: 0;
  }
  .in-china-bg {
  }
}
</style>
