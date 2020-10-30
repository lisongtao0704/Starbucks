<template>
	<section class="program">
		<div class="wrapper">
			<div class="grid clearfix">
				<div class="program-describe">
					<h2>星享俱乐部</h2>
					<p class="program-detail">
						开启您的星享之旅，星星越多、会员等级越高、好礼越丰富。
						<a href="javascript:;" class="program-more">
							<span @click="myClick">了解更多 ›</span>
						</a>
					</p>
					<p class="account-entry" v-if="!NickName">
						<a href="javascript:;" class="sign-in button btn-bigger" >
							<span @click="loginClick">登录</span>
						</a>
						<a href="javascript:;" class="register button btn-bigger" >
							<span @click="btnClick">注册</span>
						</a>
					</p>
				</div>
				<div class="program-image" :class="{'onlogin':NickName}">
					<img src="@/assets/images/logo-msr-new.svg">
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
  computed: {
    NickName () {
      return this.$store.state.NickName
    }
  },
  methods: {
    loginClick () {
      this.$router.push('/account')
    },
    btnClick () {
      this.$router.push('/account')
    },
    myClick () {
      this.$router.push('/account')
    }
  }

}
</script>
