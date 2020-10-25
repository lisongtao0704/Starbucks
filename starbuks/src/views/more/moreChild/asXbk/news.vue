<template>
  <div class="News">
    <div class="head">
      <div></div>
      <section>
        <p>企业新闻</p>
        <span>了解星巴克全球新闻</span>
      </section>
    </div>
    <ul class="news-list">
      <li v-for="item in newsList">
        <div
          :style="{'background-image':'url('+item.titleImg+')','background-position':'center','background-size':'cover'}"
        ></div>
        <p v-html="item.title"></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      newsList: {},
    };
  },
  created() {
    this.$http.get("http://123.56.129.223/starbucks/cnews.php").then((res) => {
      console.log(res);
      this.newsList = res.data;
      console.log(this.newsList);
    });
  },
};
</script>

<style scoped lang="less">
.News {
  .news-list {
    li {
          min-height: 112px;
      display: flex;
     border-radius: 2px;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.12);
    margin-top: 14px;
      div {
        width: 31%;
      }
      p {
        text-align: left;
         padding: 17px;
        width: 69%;
        margin: 0;
        font-size: 20px;
        font-weight: 400;
        background: #fff;
        color: #000;
      }
    }
  }
  .head {
    position: relative;
    section {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      p {
        font-weight: 700;
        margin-bottom: 12px;
        margin-bottom: 25px;
        font-size: 24px;
        color: #fff;
      }
      span {
        font-size: 16px;
        font-weight: 400;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 48px;
        padding: 8px 10px;
      }
    }
    div::before {
      background-image: linear-gradient(
        -180deg,
        rgba(0, 0, 0, 0.35) 0%,
        rgba(0, 0, 0, 0.7) 81%
      );
      left: 0;
      content: "";
      height: 100%;
      position: absolute;
      width: 100%;
    }
    div {
      background: url("../../../../assets/images/kv-starbucks-store.jpg");
      background-size: cover;
      width: 100%;
      height: 216px;
      position: relative;
    }
  }
}
</style>