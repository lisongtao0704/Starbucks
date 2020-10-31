<template>
  <div>
    <div class="gift2">
      <div class="inquire">
        <span class="inquire-left" @click="changeLeft" ref="left"
          >使用星礼卡密码查询</span
        ><span class="inquire-right" @click="changeRight" ref="right"
          >使用销售单号查询</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "gift2",
  mounted () {

  },
  methods: {
    changeLeft(){
        this.$refs.right.style.cssText="background: #FFF ;color:#00a862";
        this.$refs.left.style.cssText="background: #00A862;color: #fff;";
    },
    changeRight(){
        this.$refs.right.style.cssText="background: #00A862;color: #fff;";
        this.$refs.left.style.cssText="background: #FFF ;color:#00a862";
    },
  }
};
</script>

<style lang='less' scoped>
.gift2 {
  padding: 20px 24px 55px;
  background-color: #f7f7f7;
  .inquire {
    padding: 5px 10px;
    text-align: center;
    span {
      color: #00a862;
      font-size: 14px;
      font-weight: 500;
      padding: 5px 10px;
      border: 1px solid #00a862;
    }
    span.inquire-left {
      border-radius: 48px 0 0 48px;
      background: #00a862;
      color: #fff;
    }
    span.inquire-right {
      border-radius: 0 48px 48px 0;
    }
  }
}
</style>
