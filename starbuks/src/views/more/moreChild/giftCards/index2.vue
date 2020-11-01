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
            v-if="query"
          />
          <input
            ref="inputNum3"
            v-model="valueNums3"
            @blur="blur2"
            @focus="focus2"
            type="text"
            id="num3"
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
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gift2',
  data () {
    return {
      query: true,
      nums: false,
      nums2: false,
      nums3: false,
      valueNums: '',
      valueNums2: '',
      valueNums3: ''
    }
  },
  watch: {
    valueNums: function () {
      if (!/^\d{16,19}$/.test(this.$refs.inputNum.value)) {
        this.nums = true
      } else this.nums = false
    },
    valueNums2: function () {
      if (!/^\d{6}$/.test(this.$refs.inputNum2.value)) {
        this.nums2 = true
      } else this.nums2 = false
    },
    valueNums3: function () {
      if (!/^[a-z0-9]+$/i.test(this.$refs.inputNum3.value)) {
        this.nums3 = true
      } else this.nums3 = false
    }
  },
  methods: {
    focus () {
      this.$refs.inputUp.style =
        'font-size: 14px;color: rgba(0, 0, 0, 0.56); transition: all 0.2s;top: -18px;'
    },
    focus2 () {
      if (this.query) {
        this.$refs.inputUp2.style =
          'font-size: 14px;color: rgba(0, 0, 0, 0.56); transition: all 0.2s;top: -18px;'
      } else {
        this.$refs.inputUp3.style =
          'font-size: 14px;color: rgba(0, 0, 0, 0.56); transition: all 0.2s;top: -18px;'
      }
    },
    blur () {
      if (this.$refs.inputNum.value == '') {
        this.$refs.inputUp.style =
          'font-size: 16px;color: rgba(0, 0, 0, 0.38); transition: all 0.2s;top: 5px;'
      }
      if (!/^\d{16,19}$/.test(this.$refs.inputNum.value)) {
        this.nums = true
      } else this.nums = false
    },
    blur2 () {
      if (this.query) {
        if (this.$refs.inputNum2.value == '') {
          this.$refs.inputUp2.style =
            'font-size: 16px;color: rgba(0, 0, 0, 0.38); transition: all 0.2s;top: 5px;'
        }
        if (!/^\d{6}$/.test(this.$refs.inputNum2.value)) {
          this.nums2 = true
        } else this.nums2 = false
      } else {
        if (this.$refs.inputNum3.value == '') {
          this.$refs.inputUp3.style =
            'font-size: 16px;color: rgba(0, 0, 0, 0.38); transition: all 0.2s;top: 5px;'
        }
        if (!/^[a-z0-9]+$/i.test(this.$refs.inputNum3.value)) {
          this.nums3 = true
        } else this.nums3 = false
      }
    },
    changeLeft () {
      this.$refs.right.style = 'background: #FFF ;color:#00a862'
      this.$refs.left.style = 'background: #00A862;color: #fff;'
      this.query = true
    },
    changeRight () {
      this.$refs.right.style = 'background: #00A862;color: #fff;'
      this.$refs.left.style = 'background: #FFF ;color:#00a862'
      this.query = false
    }
  }
}
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
    .form-input {
      position: relative;
      margin-top: 17px;
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
  }
}
</style>
