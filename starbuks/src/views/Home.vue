<template>
  <div>
    <article class="wrapper">
      <nav class="nav">
        <nav-container @showMenuOverlay="showMenuExec" v-show="!isshow">
          <span slot="navbody">
            <section class="body" v-if="!NickName">
              <div class="account">
                <div class="greetings">
                  <span>心情惬意，来杯咖啡吧 ☕</span>
                </div>
                <div class="account-entry">
                  <a href="javascript:;" class="sign-in button">
                    <span>登录</span>
                  </a>
                  <a href="javascript:;" class="register button">
                    <span>注册</span>
                  </a>
                </div>
              </div>
            </section>
            <section class="body" v-if="NickName">
              <div class="account">
                <a href="javascript:;" class="logo logo-onlogin" v-if="mbMedia">
                  <img src="@/assets/images/logo.svg" alt="星巴克" />
                </a>
                <div class="greetings onlogin" :class="{ withlogo: mbMedia }">
                  <span>{{ loginGreetings[random] }}</span>
                </div>
                <div class="account-info clearfix">
                  <!-- 此处需使用v-show,使用v-if会导致进度条无法渲染 -->
                  <div class="user-stars clearfix" v-show="!loading">
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
                  <div class="user-rewards" v-show="!loading">
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
        <nav-overlay @closeMenuOverlay="closeMenuExec" v-show="isshow">
        </nav-overlay>
      </nav>
      <section class="content" v-if="lgMedia || !isshow">
        <div class="tag-ad">广告</div>
        <ad-slider />
        <promotion></promotion>
        <program></program>
        <tmall></tmall>
        <coffeehouse></coffeehouse>
      </section>
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
import AdSlider from "@/components/adSlider";
import Promotion from "@/components/promotion";
import Program from "@/components/program";
import Tmall from "@/components/tmall";
import Coffeehouse from "@/components/coffeehouse";

export default {
  name: "Home",
  components: {
    NavContainer,
    NavOverlay,
    AdSlider,
    Promotion,
    Program,
    Tmall,
    Coffeehouse,
  },
  data() {
    return {
      isshow: false,
      coverShows:true,
      loading: false,
      lgMedia: window.matchMedia("(min-width: 1025px)").matches,
      mbMedia: window.matchMedia("(max-width: 640px)").matches,
      
    };
  },
  methods: {
    showMenuExec() {
      this.isshow = true;
    },
    closeMenuExec() {
      this.isshow = false;
    },
   
  },
  computed: {
    NickName() {
      return this.$store.state.NickName;
    },
    
  },
};
</script>
<style  scoped>
.wrapper .content {
  padding-top: 0;
  z-index: 998;
}



</style>
