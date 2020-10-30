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
      <div class="login-form-cpassword">
        <input type="password" @focus="addc" v-model="confirmpassword" @blur="reducec" />
        <label for="password" class="form-label" :class="{ classC: istrue }">确认密码</label>
      </div>
      <div class="login-dl">
        <el-button type="text" @click='register'>注册</el-button>
        <div class="forget-password"><a href="javascript:;" @click="login">立即登录</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
export default {
  data () {
    return {
      ismsg: false,
      isok: false,
      ismove: false,
      classA: 'classA',
      classB: 'classB',
      username: '',
      password: '',
      confirmpassword: '',
      istrue: false,
      signoutShow: []
    }
  },
  methods: {
    pageRedir () {
      this.$router.replace('/account/register')
    },
    add () {
      this.isok = true
    },
    reduce () {
      if (!this.username) {
        this.isok = false
      }
    },
    addp () {
      this.ismove = true
    },
    reducep () {
      if (!this.password) {
        this.ismove = false
      }
    },
    addc () {
      this.istrue = true
    },
    reducec () {
      if (!this.confirmpassword) {
        this.istrue = false
      }
    },
    register () {
      if (this.username.trim() == '') {
        return mui.toast('帐号不能为空')
      }
      if (this.password.trim() !== this.confirmpassword) {
        return mui.toast('两次输入密码不一致')
      }

      this.$store.state.userinfo.forEach(item => {
        var user = JSON.parse(item)
        // console.log(user[0])
        	if (user[0].username != this.username) {
          var obj = { username: this.username, password: this.password }
          this.signoutShow.push(obj)
          this.$store.commit('gettToken', JSON.stringify(this.signoutShow))
          mui.toast('注册成功')
        } else {
          mui.toast('帐号已被注册，请重新输入帐号')
        }
      })
    },
    login () {
      this.$router.push('/account/login')
    }
  }
}
</script>

<style lang="less" scoped>
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
  .login-form-cpassword {
    text-align: center;
    position: relative;
    margin-top: 12px;
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

    .classC {
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
    height: 90vh;
    background-color:#fff;
    border-top: 1px solid #ccc;
    box-shadow: 0px -2px 2px #eee;
    padding-top: 20px;
  }
</style>
