<template>
  <div>
    <article class="wrapper">
      <nav class="nav">
        <nav-container
          v-on:showMenuOverlay="showMenuExec"
          v-show="!isshow"
        >
          <span slot="navbody">
            <section class="body" v-if="!NickName">
              <div class="account">
                <div class="greetings">
                  <span>心情惬意，来杯咖啡吧 ☕</span>
                </div>
                <div class="account-entry">
                  <a
                    href="javascript:;"
                    class="sign-in button"
                    @click="pageRedir(2)"
                  >
                    <span>登录</span>
                  </a>
                  <a
                    href="javascript:;"
                    class="register button"
                    @click="pageRedir(4)"
                  >
                    <span>注册</span>
                  </a>
                </div>
              </div>
            </section>
            <section class="body" v-if="NickName">
              <div class="account">
                <a
                  href="javascript:;"
                  class="logo logo-onlogin"
                  @click="pageRedir(0)"
                  v-if="mbMedia"
                >
                  <img src="@/assets/images/logo.svg" alt="星巴克" />
                </a>
                <div class="greetings onlogin" :class="{ withlogo: mbMedia }">
                  <span>{{ loginGreetings[random] }}</span>
                </div>
                <div class="account-info clearfix">
                  <!-- 此处需使用v-show,使用v-if会导致进度条无法渲染 -->
                  <div
                    class="user-stars clearfix"
                    @click="pageRedir(2)"
                    v-show="!loading"
                  >
                    <div class="star-level">
                      <span>
                        <strong>{{ StarsNum }}</strong
                        >/{{ StarsOfNextLevNeed }}
                      </span>
                      <div class="gauge">
                        <div class="gauge-fill"></div>
                      </div>
                    </div>
                    <div class="star-icon">
                      <img
                        src="@/assets/icons/icon-star-white.svg"
                        v-if="StarLev == 'White'"
                      />
                      <img
                        src="@/assets/icons/icon-star-green.svg"
                        v-if="StarLev == 'Green'"
                      />
                      <img
                        src="@/assets/icons/icon-star-gold.svg"
                        v-if="StarLev == 'Gold'"
                      />
                    </div>
                  </div>
                  <div
                    class="user-rewards"
                    @click="pageRedir(7)"
                    v-show="!loading"
                  >
                    <img src="@/assets/icons/icon-gift.svg" /><span>{{
                      MyRewardsNum
                    }}</span>
                  </div>
                </div>
                <div class="loading-svg center" v-if="loading">
                  <img src="@/assets/loading-svg/loading-bubbles.svg" />
                </div>
              </div>
            </section>
          </span>
        </nav-container>
        <nav-overlay
          v-on:closeMenuOverlay="closeMenuExec"
          v-show="isshow"
        >
        </nav-overlay>
      </nav>
    </article>
  </div>
</template>

<script>
import "./../assets/css/bootstrap.min.css";
import "./../assets/css/swiper.min.css";
import "./../assets/css/init.css";
import "./../assets/css/styles.css";
import NavContainer from "@/components/navContainer";
import NavOverlay from "@/components/NavOverlay";

export default {
  name: "Home",
  components: {
    NavContainer,
    NavOverlay,
  },
  data(){
    return{
	isshow: false,
    }
  },
  methods: {
    showMenuExec() {
      this.isshow = true;
    },
    closeMenuExec() {
      this.isshow= false;
    },
  },
  computed: {
			NickName(){
				return this.$store.state.NickName;
			}
		},
};
</script>

