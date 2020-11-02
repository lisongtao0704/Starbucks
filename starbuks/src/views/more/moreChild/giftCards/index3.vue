<template>
  <div class="gift3">
    <h2>管理您的发票</h2>
    <hr />
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="在线申请发票" name="first">
        <p>输入您的购卡小票信息</p>
        <p>
          请准确输入您购卡小票上的8或10位销售单号和6位授权码，以确保开票成功。
        </p>
        <form method="GET">
              <div class="input-frame">
            <input
              ref="input1"
              type="text"
              name="销售单号"
              required
              autocomplete="off"
              id="num1"
              @focus="onFocus1"
              @blur="onBlur1"
            />
            <label ref="lab1" for="num1">销售单号</label>
          </div>
            <div class="input-frame">
            <input
              ref="input2"
              type="text"
              required
              autocomplete="off"
              name="授权码"
              id="num2"
              @focus="onFocus2"
              @blur="onBlur2"
            />
            <label ref="lab2" for="num2">授权码</label>
          </div>
          <input class="next" type="submit" value="下一步" />
        </form>
      </el-tab-pane>
      <el-tab-pane label="发票处理进度查询" name="second"
        ><p>请根据您的发票填写收据信息</p>
        <form method="GET">
          <div class="input-frame">
            <input
              ref="input3"
              type="text"
              name="销售单号"
              required
              autocomplete="off"
              id="num3"
              @focus="onFocus3"
              @blur="onBlur3"
            />
            <label ref="lab3" for="num3">销售单号</label>
          </div>
          <div class="input-frame">
            <input
              ref="input4"
              type="text"
              required
              autocomplete="off"
              name="授权码"
              id="num4"
              @focus="onFocus4"
              @blur="onBlur4"
            />
            <label ref="lab4" for="num4">授权码</label>
          </div>
          <input class="next" type="submit" value="下一步" />
        </form>
      </el-tab-pane>
    </el-tabs>
    <p>温馨提示</p>
    <ol>
      <li>一张购卡小票对应一张发票，支持最多十张购卡小票合开一张发票。</li>
      <li>发票金额等于购卡小票全额。</li>
      <li>请使用同一城市购卡小票上的销售单号申请合开发票，不同城市的购卡小票不可合并开发票。</li>
      <li>在线申请发票的有效期为购买星礼卡后30日内，请核对购卡小票上的日期并确认其在有效期内。</li>
      <li>我们会在受理之日起5个工作日内将电子发票发送至您提供的邮箱。</li>
    </ol>
    <hr>
    <p class="p-content">尊敬的消费者，您好：</p>
    <p class="p-content">根据《关于推行通过增值税电子发票系统开具的增值税电子普通发票有关问题的公告》（国家税务总局公告2015年第84号），星巴克（上海）商业有限公司开始逐步实施增值税电子普通发票，直到最终全面过渡到增值税电子普通发票。</p>
    <p class="p-content">我们会将电子发票直接发到您指定的电子邮箱，您可以自行打印增值税电子普通发票的版式文件，其法律效力、基本用途、基本使用规定等与税务机关监制的增值税纸质普通发票相同。</p>
  </div>
</template>

<script>
export default {
  name: "gift3",
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    onFocus1() {
      this.$refs.lab1.style =
        "font-size: 14px;color: rgba(0, 0, 0, 0.56); transition: all 0.2s;top: -18px;";
    },
    onBlur1() {
      if (this.$refs.input1.value == "") {
        this.$refs.lab1.style =
          "font-size: 16px;color: rgba(0, 0, 0, 0.38); transition: all 0.2s;top: 5px;";
      }
    },
    onFocus2() {
      this.$refs.lab2.style =
        "font-size: 14px;color: rgba(0, 0, 0, 0.56); transition: all 0.2s;top: -18px;";
    },
    onBlur2() {
      if (this.$refs.input2.value == "") {
        this.$refs.lab2.style =
          "font-size: 16px;color: rgba(0, 0, 0, 0.38); transition: all 0.2s;top: 5px;";
      }
    },
    onFocus3() {
      this.$refs.lab3.style =
        "font-size: 14px;color: rgba(0, 0, 0, 0.56); transition: all 0.2s;top: -18px;";
    },
    onBlur3() {
      if (this.$refs.input3.value == "") {
        this.$refs.lab3.style =
          "font-size: 16px;color: rgba(0, 0, 0, 0.38); transition: all 0.2s;top: 5px;";
      }
    },
    onFocus4() {
      this.$refs.lab4.style =
        "font-size: 14px;color: rgba(0, 0, 0, 0.56); transition: all 0.2s;top: -18px;";
    },
    onBlur4() {
      if (this.$refs.input4.value == "") {
        this.$refs.lab4.style =
          "font-size: 16px;color: rgba(0, 0, 0, 0.38); transition: all 0.2s;top: 5px;";
      }
    },
    handleClick(tab, event) {},
  },
};
</script>

<style lang='less' scoped>
.gift3 {
  background-color: #f7f7f7;
  color: #000;
  padding: 20px 25px 55px;
  letter-spacing: 0.4px;
  .p-content{
    margin: 0 0 24px;
    color: rgba(0, 0, 0, 0.87);
    font-size: 16px;
    font-weight: 400;
  }
  p{
    text-align: left;
    font-size:16px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.56);
  }
  ol{
    margin-left: 20px;
    margin-top: 30px;
    li{
      margin: 0 0 10px;
    color: rgba(0, 0, 0, 0.87);
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    }
  }
  hr{
    width: 100% !important;
    margin: 35px 0;
    border: 0;
    height: 1px;
    position: unset !important;
    background-color: #80808036;
  }
  h2 {
    margin: 0;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 20px;
    text-align: left;
  }
  hr {
    width: 100vw;
    border: 0;
    height: 1px;
    position: absolute;
    left: 0;
    background-color: #80808036;
  }
  /deep/ .el-tabs {
    .el-tabs__content {
      form {
        .next:active{
box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.38);
color: rgba(0, 0, 0, 0.5);
        }
        .next {
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.38);
          margin-bottom: 4px;
          font-weight: 700;
          padding: 4px 24px;
              border-radius: 50px;
          background: #f7f7f7;
          border-color: #f7f7f7;
          color: rgba(0, 0, 0, 0.38);
        }
        .input-frame {
          position: relative;
          label {
            position: absolute;
            top: 5px;
            left: 0;
            color: rgba(0, 0, 0, 0.38);
            font-size: 16px;
          }
        }
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
          margin-bottom: 35px;
          border-radius: 0;
          padding: 0;
        }
      }
      .el-tab-pane {
        p {
          color: rgba(0, 0, 0, 0.56);
          font-size: 16px;
          font-weight: 400;
          text-align: left;
          margin: 0;
          margin-bottom: 20px;
          line-height: 25px;
        }
      }
    }
    .el-tabs__active-bar.is-top {
      border-bottom: 2px solid #00a862;
      background-color: #00a862;
    }
    .is-active {
      color: rgba(0, 0, 0, 0.87) !important;
      font-weight: 700 !important;
      font-size: 16px !important;
    }
    .is-top {
      color: rgba(0, 0, 0, 0.56);
      font-size: 16px;
      font-weight: 400;
    }
    .el-tabs__nav-wrap::after {
      // content: "";
      height: 0;
    }
  }
}
</style>
