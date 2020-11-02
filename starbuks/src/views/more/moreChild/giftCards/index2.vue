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
      <h2>查询我的星礼卡</h2>
      <hr />
      <p v-if="query">请输入你的星礼卡卡号和密码查询星礼卡余额以及交易记录</p>
      <p v-else>
        请输入你的星礼卡卡号和激活小票上的销售单号查询星礼卡余额以及交易记录
      </p>
      <form method="GET">
        <div class="form-input">
          <input
            ref="inputNum"
            v-model="valueNums"
            @blur="blur"
            @focus="focus"
            type="text"
            id="num"
            name="卡号"
            required
            pattern="^\d{16,19}$"
            autocomplete="off"
          />
          <label ref="inputUp" for="num">卡号</label>
          <div v-show="nums">
            <img src="../../../../assets/images/icon-cross-red.svg" />
            <p>请输入卡片背面16/19位卡号(没有空格和下划线)</p>
          </div>
        </div>
        <div class="form-input">
          <input
            ref="inputNum2"
            v-model="valueNums2"
            @blur="blur2"
            @focus="focus2"
            type="password"
            id="num2"
            pattern="^\d{6}$"
            name="密码"
            required
            v-if="query"
          />
          <input
            ref="inputNum3"
            v-model="valueNums3"
            @blur="blur2"
            @focus="focus2"
            type="text"
            name="单号"
            pattern="[a-zA-Z0-9]+"
            id="num3"
            required
            v-else
          />
          <label ref="inputUp2" for="num2" v-if="query">输入密码</label>
          <label ref="inputUp3" for="num3" v-else>销售单号</label>
          <div v-show="nums2" v-if="query">
            <img src="../../../../assets/images/icon-cross-red.svg" />
            <p>请输入6位PIN密码。您可以在卡片背面刮开涂层获得密码</p>
          </div>
          <div v-show="nums3" v-else>
            <img src="../../../../assets/images/icon-cross-red.svg" />
            <p>此栏不可为空，请输入数字或字母</p>
          </div>
        </div>
        <div class="slide-block" v-if="slideSuccess">
          <div class="slide-msg" ref="slideInfo">{{ msg }}</div>
          <div class="shade">
            <slide-verify
              :l="42"
              :r="10"
              :w="280"
              :h="160"
              @success="onSuccess"
              @fail="onFail"
              @refresh="onRefresh"
              :slider-text="text"
            >
            </slide-verify>
            <div class="success-times" v-show="slideSuccessstime">{{ times }}</div>
          </div>
        </div>
        <div class="slide-success" v-else>
          <img src="../../../../assets/images/icon-done.svg" /><span
            >已验证</span
          >
        </div>
        <input ref="sub" type="submit" value="查询" disabled/>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "gift2",
  data() {
    return {
      msg: "拖动下方滑块完成拼图",
      text: "向右滑",
      query: true,
      nums: false,
      nums2: false,
      nums3: false,
      valueNums: "",
      valueNums2: "",
      valueNums3: "",
      slideSuccess: true,
      slideSuccessstime:false,
      times: "",
    };
  },
  watch: {
    valueNums: function () {
      if (!/^\d{16,19}$/.test(this.$refs.inputNum.value)) {
        this.nums = true;
      } else this.nums = false;
    },
    valueNums2: function () {
      if (!/^\d{6}$/.test(this.$refs.inputNum2.value)) {
        this.nums2 = true;
      } else this.nums2 = false;
    },
    valueNums3: function () {
      if (!/^[a-z0-9]+$/i.test(this.$refs.inputNum3.value)) {
        this.nums3 = true;
      } else this.nums3 = false;
    },
  },
  methods: {
    onSuccess(time) {
      if(time<2000)
      this.times='太厉害了！耗时'+(time / 1000).toFixed(1) + "s，简直比闪电还快。";
      if(time>=2000)
      this.times='耗时'+(time / 1000).toFixed(1) + "s，来和乌龟赛跑吧。";
      this.msg = "验证成功";
      this.slideSuccessstime=true;
      this.$refs.sub.removeAttribute('disabled');
      setTimeout(() => {
        this.slideSuccess = false;
      }, 1500);
    },
    onFail() {
      this.msg = "请控制拼图块对齐缺口";
      this.$refs.slideInfo.style.color = "red";
      setTimeout(() => {
        this.msg = "拖动下方滑块完成拼图";
        this.$refs.slideInfo.style.color = "rgba(0, 0, 0, 0.87)";
      }, 1500);
    },
    onRefresh() {},
    focus() {
      this.$refs.inputUp.style =
        "font-size: 14px;color: rgba(0, 0, 0, 0.56); transition: all 0.2s;top: -18px;";
    },
    focus2() {
      if (this.query) {
        this.$refs.inputUp2.style =
          "font-size: 14px;color: rgba(0, 0, 0, 0.56); transition: all 0.2s;top: -18px;";
      } else {
        this.$refs.inputUp3.style =
          "font-size: 14px;color: rgba(0, 0, 0, 0.56); transition: all 0.2s;top: -18px;";
      }
    },
    blur() {
      if (this.$refs.inputNum.value == "") {
        this.$refs.inputUp.style =
          "font-size: 16px;color: rgba(0, 0, 0, 0.38); transition: all 0.2s;top: 5px;";
      }
      if (!/^\d{16,19}$/.test(this.$refs.inputNum.value)) {
        this.nums = true;
      } else this.nums = false;
    },
    blur2() {
      if (this.query) {
        if (this.$refs.inputNum2.value == "") {
          this.$refs.inputUp2.style =
            "font-size: 16px;color: rgba(0, 0, 0, 0.38); transition: all 0.2s;top: 5px;";
        }
        if (!/^\d{6}$/.test(this.$refs.inputNum2.value)) {
          this.nums2 = true;
        } else this.nums2 = false;
      } else {
        if (this.$refs.inputNum3.value == "") {
          this.$refs.inputUp3.style =
            "font-size: 16px;color: rgba(0, 0, 0, 0.38); transition: all 0.2s;top: 5px;";
        }
        if (!/^[a-z0-9]+$/i.test(this.$refs.inputNum3.value)) {
          this.nums3 = true;
        } else this.nums3 = false;
      }
    },
    changeLeft() {
      this.$refs.right.style = "background: #FFF ;color:#00a862";
      this.$refs.left.style = "background: #00A862;color: #fff;";
      this.query = true;
    },
    changeRight() {
      this.$refs.right.style = "background: #00A862;color: #fff;";
      this.$refs.left.style = "background: #FFF ;color:#00a862";
      this.query = false;
    },
  },
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
  h2 {
    font-size: 20px;
    font-weight: 400;
    color: #000;
    margin: 20px 0 15px;
    text-align: left;
  }
  hr {
    width: 100vw;
    position: absolute;
    left: 0;
    border: 0;
    height: 1px;
    background: rgba(0, 0, 0, 0.12);
  }
  p {
    color: rgba(0, 0, 0, 0.56);
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    padding: 20px 0 10px;
  }
  form {
    input[type='submit']{
          margin: 15px 0 0 62vw;
    }
    .form-input {
      position: relative;
      margin-top: 17px;
      margin-bottom: 10px;
      input:focus {
        border-color: #00a862;
        transition-property: border;
        transition-duration: 0.2s;
      }
      input {
        font-size: 16px;
        height: 30px;
        border: unset;
        background-color: #f7f7f7;
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        margin-bottom: 5px;
        border-radius: 0;
        padding: 0;
      }

      label {
        position: absolute;
        top: 5px;
        left: 0;
        color: rgba(0, 0, 0, 0.38);
        font-size: 16px;
      }
      div {
        display: flex;
        p {
          margin: 0;
          padding: 0;
        }
      }
    }
    .slide-block {
      padding: 0 10px 15px;
      background: #fff;
      border-radius: 10px;
      .slide-msg {
        color: rgba(0, 0, 0, 0.87);
        font-size: 10px;
        font-weight: 400;
      }
      .shade {
        position: relative;
        .success-times {
          position: absolute;
          top: 50%;
          left: 50%;
          padding: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #00a862;
          width: 280px;
          transform: translate(-50%, -64%);
          height: 162px;
          font-weight: 700;
          background-color: #80808085;
        }
        #slideVerify {
          margin: auto;
          /deep/.slide-verify-slider {
            margin-top: 0;
          }
        }
      }
    }
    .slide-success {
      img {
        vertical-align: bottom;
      }
      span {
        color: #00a862;
      }
    }
  }
}
</style>
