<template>
  <div class="index">
    <div class="head">
      <section>帮助中心</section>
    </div>
    <div class="songtao">
      <router-link to="" @click.native="de">
        <div class="block">
          <div>
            <img src="../../../../assets/images/icon-star.svg" />
          </div>
          <p>星巴克中国常见问题</p>
        </div>
      </router-link>
      <router-link to="" @click.native="de">
        <div class="block">
          <div>
            <img src="../../../../assets/images/icon-star.svg" />
          </div>
          <p>星巴克中国常见问题</p>
        </div>
      </router-link>
      <router-link to="" @click.native="de">
        <div class="block">
          <div>
            <img src="../../../../assets/images/icon-star.svg" />
          </div>
          <p>星巴克中国常见问题</p>
        </div>
      </router-link>
      <router-link to="" @click.native="de">
        <div class="block">
          <div>
            <img src="../../../../assets/images/icon-star.svg" />
          </div>
          <p>星巴克中国常见问题</p>
        </div>
      </router-link>
      <router-link to="" @click.native="de">
        <div class="block">
          <div>
            <img src="../../../../assets/images/icon-star.svg" />
          </div>
          <p>星巴克中国常见问题</p>
        </div>
      </router-link>
      <router-link to="" @click.native="de">
        <div class="block">
          <div>
            <img src="../../../../assets/images/icon-star.svg" />
          </div>
          <p>星巴克中国常见问题</p>
        </div>
      </router-link>
      <router-link to="" @click.native="de">
        <div class="block">
          <div>
            <img src="../../../../assets/images/icon-star.svg" />
          </div>
          <p>星巴克中国常见问题</p>
        </div>
      </router-link>
      <router-link to="" @click.native="de">
        <div class="block">
          <div>
            <img src="../../../../assets/images/icon-star.svg" />
          </div>
          <p>星巴克中国常见问题</p>
        </div>
      </router-link>
      <router-link to="" @click.native="de">
        <div class="block">
          <div>
            <img src="../../../../assets/images/icon-star.svg" />
          </div>
          <p>星巴克中国常见问题</p>
        </div>
      </router-link>
      <router-link to="" @click.native="de">
        <div class="block">
          <div>
            <img src="../../../../assets/images/icon-star.svg" />
          </div>
          <p>星巴克中国常见问题</p>
        </div>
      </router-link>
      <router-link to="" @click.native="de">
        <div class="block">
          <div>
            <img src="../../../../assets/images/icon-star.svg" />
          </div>
          <p>星巴克中国常见问题</p>
        </div>
      </router-link>
    </div>
    <h2>精选答案</h2>
    <div class="daan">
      <p>什么是电子发票？</p>
      <p>电子发票就是电子形式的发票，其发票代码、开票机构、金额等信息以及打印后版式均与纸质发票相同。电子发票在保管、查询、调阅时更加便捷。</p>
    </div>
     <div class="daan">
      <p>什么是电子发票？</p>
      <p>电子发票就是电子形式的发票，其发票代码、开票机构、金额等信息以及打印后版式均与纸质发票相同。电子发票在保管、查询、调阅时更加便捷。</p>
    </div>
     <div class="daan">
      <p>什么是电子发票？</p>
      <p>电子发票就是电子形式的发票，其发票代码、开票机构、金额等信息以及打印后版式均与纸质发票相同。电子发票在保管、查询、调阅时更加便捷。</p>
    </div>
     <div class="daan">
      <p>什么是电子发票？</p>
      <p>电子发票就是电子形式的发票，其发票代码、开票机构、金额等信息以及打印后版式均与纸质发票相同。电子发票在保管、查询、调阅时更加便捷。</p>
    </div>
     <div class="daan">
      <p>什么是电子发票？</p>
      <p>电子发票就是电子形式的发票，其发票代码、开票机构、金额等信息以及打印后版式均与纸质发票相同。电子发票在保管、查询、调阅时更加便捷。</p>
    </div>
     <div class="daan">
      <p>什么是电子发票？</p>
      <p>电子发票就是电子形式的发票，其发票代码、开票机构、金额等信息以及打印后版式均与纸质发票相同。电子发票在保管、查询、调阅时更加便捷。</p>
    </div>
     <div class="daan">
      <p>什么是电子发票？</p>
      <p>电子发票就是电子形式的发票，其发票代码、开票机构、金额等信息以及打印后版式均与纸质发票相同。电子发票在保管、查询、调阅时更加便捷。</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    de() {
      alert('这就暴露了，全完了');
      this.$router.push("/more/help/2");
    },
  },
};
</script>

<style lang='less' scoped>
.index {
  .daan {
      background: #FFF;
    border-radius: 2px;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.12);
      padding: 10px 20px;
    width: 345px;
    height: 124px;
    overflow: hidden;
    margin:18px auto;
    p:first-of-type {
      font-size: 20px;
      font-weight: 400;
      text-align: left;
      color: #000;
    }
     p:last-of-type {
      color: rgba(0, 0, 0, 0.87);
      padding-top: 40px;
    font-size: 16px;
    font-weight: 400;
    }
  }
  background: #f7f7f7;
  h2 {
    color: rgba(0, 0, 0, 0.56);
    padding: 16px;
    display: block;
    font-size: 24px;
    font-weight: 400;
    margin: 0;
  }
  .songtao {
    width: 330px;
    height: 1260px;
    margin: auto;
  }
  .block {
    width: 145px;
    border-top: 4px solid #00a862;
    float: left;
    margin: 20px 10px;
    border-radius: 2px;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.12);
    div {
      background: #00a862;
      width: 145px;
      height: 78px;
      img {
        width: 48px;
      }
    }
    p {
      padding: 18px;
      color: rgba(0, 0, 0, 0.87);
      font-size: 16px;
      font-weight: 400;
    }
  }
}
.head {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;
  background: center url("../../../../assets/images/help-center-page-image.png")
    no-repeat;
  background-size: cover;
  section {
    font-size: 24px;
    font-weight: 700;
    color: #fff;
  }
}
</style>