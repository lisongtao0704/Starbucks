<template>
  <div class="inchina">
    <div class="inchina-bg">
      <div class="in-china-bg"></div>
      <section>
        <h1>星巴克在中国</h1>
        <p>
          我们希望通过每一杯咖啡，将星巴克的咖啡传承与独特的咖啡体验带给我们的顾客。
        </p>
      </section>
    </div>
    <div class="plate">
      <div></div>
      <router-link to="/more/asXbk/history" @click.native=" handleSelect('/more/asXbk/history')">
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
    <div class="mission">
      <p>我们的使命和价值观</p>
      <p>激发并孕育人文精神，每人，每杯，每个社区。</p>
      <p>以我们的伙伴、咖啡和顾客为核心，我们努力践行以下价值观：</p>
      <ul>
        <li>营造一种温暖而有归属感的文化，欣然接纳和欢迎每一个人。</li>
        <li>
          积极行动，勇于挑战现状，打破陈规，以创新方式实现公司与伙伴的共同成长。
        </li>
        <li>在每个连接彼此的当下，我们专注投入，开诚相见，互尊互敬。</li>
        <li>对于每件事，我们都竭尽所能，做到最好，敢于担当。</li>
      </ul>
      <div>
        <router-link to="/more/asXbk/work"><div>加入我们</div></router-link>
      </div>
      <img src="../../../../assets/images/starbucksinchina.jpg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Inchina",
  methods: {
    // handleSelect(key) {
    //   alert(3);
    //   sessionStorage.setItem("asxbk",key);
    // },
  },
};
</script>

<style scoped lang="less">
.inchina {
  .mission {
    background: #fff;
    text-align: left;
    padding: 47px 39px;
    div {
      width: 70px;
      margin: auto;
          display: flex;
    justify-content: center;

      div {
        border: 1px solid #00a862;
        border-radius: 48px;
        box-sizing: border-box;
        color: #00a862;
            width: 108px;
    padding: 6px 18px;
    margin: 30px 0;
      }
    }
    img {
      width: 100%;
    }
    ul {
      text-align: justify;
      margin: 0 25px;
      li {
        color: rgba(0, 0, 0, 0.87);
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 5px;
      }
    }
    p:first-of-type {
      color: #c2a661;
      margin-bottom: 12px;
      font-size: 20px;
      text-align: center;
      font-weight: 400px;
      margin-bottom: 20px;
    }
    p:nth-child(2),
    p:nth-child(3) {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.87);
      font-weight: 400;
      padding-bottom: 15px;
    }
  }
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
    background: url(/img/starbucks-in-china.9e98a223.jpg) no-repeat;
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