<template>
  <section class="register_content">
    <div class="app-register-desc">
      <h2>使用星巴克App进行注册</h2>
      <p>
        <span>现在就下载</span>
        <a href="/more/xbkMobileApp/app/" class="link ga-view-app-page">
          <span>星巴克App</span>
         </a>
        <span>便可直接用手机进行注册、支付、查看消费记录及管理卡片。</span>
      </p>
    </div>
    <div><img width="193" height="409" src='../../assets/images/register02.png'></div>
    <div class="up_down">
      <a href="https://apps.apple.com/cn/app/xing-ba-ke-zhong-guo/id499819758?ls=1">
        <img src="../../assets/images/udp-starbucks-cn.png" />
      </a>
    </div>
  </section>
</template>

<script>
</script>

<style lang="less" scoped>
  .register_content {
    padding-top: 24px;
    background-color: #fff;
    box-shadow: 1px -2px 2px #ccc;
    height: 100vh;
    .app-register-desc {
      padding: 0 24px;

      h2 {
        margin-bottom: 12px;
        text-align: left;
        font-size: 22px;
        font-weight: 500;
        color: #000;
      }
      p{
        margin:5px 0 24px 0;
        text-align: left;
        line-height: 23px;
        font-size: 16px;
        span{
          color:#000;
        }
        a{
          span{
            color: #00a862;
          }
        }
      }
    }
  }
  .up_down{
    position: fixed;
    bottom: 72px;
    right: 14px;
    width: 160px;
    height: 50px;
    a{
      display: block;
      img{
        width: 100%;
      }
    }
  }
</style>
