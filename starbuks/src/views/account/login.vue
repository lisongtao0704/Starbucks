<template>
  <div class="login-content">
    <div class="qrcode-login">
      <div class="login-form-username">
        <input type="text" id="username" name="username" @focus="add" v-model="username" @blur="reduce" />
        <label for="username" class="form-label" :class="{ classA: isok }">用户名或者电子邮箱</label>
      </div>
      <div class="login-form-password">
        <input type="password" id="password" name="password" @focus="addp" v-model="password" @blur="reducep" />
        <label for="password" class="form-label" :class="{ classB: ismove }">密码</label>
      </div>
      <div class="slide" v-if="isslide">
        <p>拖动下方滑块完成拼图</p>
        <slide-verify ref="slideblock" @again="onAgain" @fulfilled="onFulfilled" @success="onSuccess" @fail="onFail"
          @refresh="onRefresh" :accuracy="accuracy" :slider-text="text"></slide-verify>
      </div>
      <div class="msg" v-if="ismsg"><span>✓</span>{{ msg }}</div>
      <div class="login-dl">
        <el-button type="text" @click="login">登录</el-button>
        <div class="forget-password"><a href="javascript:;">忘记密码?</a></div>
      </div>
    </div>
  </div>
</template>

<script>
  import mui from '../../lib/mui/js/mui.min.js'
  export default {
    data() {
      return {
        ismsg: false,
        isslide: true,
        isok: false,
        ismove: false,
        classA: "classA",
        classB: "classB",
        username: "",
        password: "",
        msg: "",
        text: "向右滑",
        // 精确度小，可允许的误差范围小；为1时，则表示滑块要与凹槽完全重叠，才能验证成功。默认值为5
        accuracy: 1,
      };
    },
    methods: {
      pageRedir() {
        this.$router.replace("/account/register");
      },
      add() {
        this.isok = true;
      },
      reduce() {
        if (!this.username) {
          this.isok = false;
        }
      },
      addp() {
        this.ismove = true;
      },
      reducep() {
        if (!this.password) {
          this.ismove = false;
        }
      },
      onSuccess(times) {
        mui.toast("只用了 " + times / 1000 + "s" + ",简直比闪电还快呢");
        this.msg = "验证通过, 耗时" + times / 1000 + "s";
        (this.isslide = false), (this.ismsg = true);
      },
      onFail() {
        mui.toast("验证不通过");
        this.msg = "";
      },
      onRefresh() {
        mui.toast("点击了刷新小图标");
        this.msg = "";
      },
      onFulfilled() {
        console.log("刷新成功啦！");
      },
      onAgain() {
        mui.toast("检测到非人为操作的哦！");
        this.msg = "try again";
        // 刷新
        this.$refs.slideblock.reset();
      },
      login() {
        var _this = this;
        if (!this.ismsg) {
          return mui.toast('验证不通过，请重新验证')
        }
        if (this.username == '' || this.password == '') {
          return mui.toast('请输入帐号或密码')
        }
        if (this.username !== '123456' || this.password !== '123456') {
          return mui.toast('帐号或密码错误');
        }
        this.$http.get('http://localhost:8080/db.json').then(res => {
          console.log(res.data)
          if (res.data.code === 0) {
            this.user = res.data.result
            this.$store.commit("setToken", this.user);
            mui.toast('登录成功，即将跳转')
            setTimeout(function() {
              _this.$router.push('/')
            }, 2000)
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .slide {
    font-size: 16px;
    margin-top: 20px;
    text-align: center;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 4px;
    width: 90%;
    margin-left: 5%;
    padding: 5px 0;

    #slideVerify {
      margin: 0 auto;
    }
  }

  .msg {
    border: 1px solid #ccc;
    font-size: 14px;
    margin-top: 20px;
    height: 40px;
    line-height: 40px;
    width: 90%;
    margin-left: 5%;
    color: #00a862;
    box-shadow: 1px 1px 4px;

    span {
      font-weight: 700;
      font-size: 0.325rem;
    }
  }

  .login-form-username {
    text-align: center;
    position: relative;
    margin: 15px 0;

    input {
      background-color:#fff;
      border: none;
      width: 90%;
      border-bottom: 1px solid #ccc;
      font-size: 16px;
      height: 40px;
    }

    input:focus {
      outline: none;
      border-bottom: 1px solid #00a862;
      background-color: #fff;
    }

    label {
      position: absolute;
      left: 10%;
      bottom: 20px;
      font-size: 16px;
      color: #ccc;
      transition: all 0.3s;
    }

    .classA {
      position: absolute;
      left: 5%;
      bottom: 50px;
      font-size: 14px;
      color: #000;
      opacity: 0.5;
    }
  }

  .login-form-password {
    text-align: center;
    position: relative;

    input {
      border: none;
      width: 90%;
      height: 40px;
      border-bottom: 1px solid #ccc;
      font-size: 16px;
      background-color: #fff;
    }

    input:focus {
      outline: none;
      border-bottom: 1px solid #00a862;
       background-color: #fff;
    }

    label {
      position: absolute;
      left: 10%;
      bottom: 20px;
      font-size: 16px;
      color: #ccc;
      transition: all 0.3s;
    }

    .classB {
      position: absolute;
      left: 5%;
      bottom: 50px;
      font-size: 14px;
      color: #000;
      opacity: 0.5;
    }
  }

  .login-dl {
    display: flex;
    justify-content: space-between;
    padding: 0 5%;
    margin-top: 15px;
    align-items: center;

    .el-button {
      padding: 5px 10px;
      border: 1px solid #00a862;
      border-radius: 10px;
      color: #00a862;
    }

    .forget-password {
      a {
        text-decoration: none;
        font-size: 16px;
        color: #00a862;
      }
    }
  }
  .login-content {
    height: 100vh;
    background-color:#fff;
    border-top: 1px solid #ccc;
    box-shadow: 0px -2px 2px #eee;
    padding-top: 20px;
  }
</style>
