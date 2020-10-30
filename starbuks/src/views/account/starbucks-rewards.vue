<template>
  <div class="content">
    <div class="tag-ad">广告</div>
    <div class="intro-sbux-rewards-top">
      <a href="javascript:;" class="intro-poster-mobile tablet-hidden mobile-show">
        <img src="../../assets/images/header_cn_mobile.jpg" alt="">
      </a>
    </div>
    <section class="new-sbux-rewards bg-dark">
      <div class="wrapper">
        <div class="rewards-title">
          <img src="../../assets/images/01-new-rewards-title-mobile.png" alt="" class="tablet-hidden mobile-show">
        </div>
        <div class="rewards-content clearfix">
          <div class="item">
            <div class="item-image">
              <img src="../../assets/images/new-rewards-1.png" alt="">
            </div>
            <div class="item-content">
              <h2>消费累积星星</h2>
              <p>
                每累计消费￥50元累积一颗星星
                <br>
                使用星巴克中国App内星礼卡支付，
                <br>
                每累计消费￥40元积一颗星星
                <br>
                (比其他支付方式积星快25%）
              </p>
            </div>
          </div>
          <div class="item">
            <div class="item-image">
              <img src="../../assets/images/new-rewards-2.png" alt="">
            </div>
            <div class="item-content">
              <h2>积星升级 好礼享不停</h2>
            </div>
          </div>
          <div class="item">
            <div class="item-image">
              <img src="../../assets/images/new-rewards-3.png" alt="">
            </div>
            <div class="item-content">
              <h2>会员专享星星奖励活动</h2>
            </div>
          </div>
          <div class="item">
            <div class="item-image">
              <img src="../../assets/images/new-rewards-4.png" alt="">
            </div>
            <div class="item-content">
              <h2>星星兑换丰富好礼</h2>
            </div>
          </div>
        </div>
        <div class="rewards-tips">
          <p class="white" style="font-size: 12px;">
            详情以<a href="javascript:;" class="ga-msr-intro-terms">《星享俱乐部活动的条款和条件》</a>的规定为准
          </p>
        </div>
      </div>
    </section>
    <div class="bg-grey">
    	<img src="../../assets/images/bg-banner-01.png" alt="">
    </div>
    <section class="member-package">
    	<div class="wrapper">
    		<div class="rewards-title">
    			<img src="../../assets/images/04-member-package-title-mobile.png">
    		</div>
        <div class="rewards-title1">
        	<img src="../../assets/images/srkit-mobile.png" alt="">
        </div>
        <div class="rewards-title2">
        	<img src="../../assets/images/coupon-zh.png" alt="">
        </div>

    		<div class="rewards-content1">
          <h3>选购会员星礼包，丰富好礼随心享：</h3>
    					<ul>
    						<li>
    							6张电子好礼券<small>*</small>，适用多种商品种类
    						</li>
    						<li>
    							附赠一张精美星礼卡<small>**</small>，可绑定至星巴克中国App 内充值并支付，享受每消费40元累积1颗星星的专属优惠
    						</li>
    						<li>银星级会员初次将会员星礼包成功绑定至帐户后，即可升级成为玉星级会员</li>
    					</ul>
    					<p class="small">
    						<small>* 每份券将在添加至您的星享俱乐部帐户的当天生效，有效期为90天。</small>
    						<br>
    						<small>** 附赠星礼卡的初始余额为0元。</small>
    					</p>
    		</div>
    		<div class="rewards-tips">
    			<p>
    				详情以<a href="javascript:;" class="ga-msr-intro-terms">《星享俱乐部活动的条款和条件》</a>的规定为准
    			</p>
    		</div>
    	</div>
    </section>
    <div class="bg-grey">
    	<img src="/static/images/sbux-rewards/bg-banner-04.png" alt="">
    </div>
  </div>
</template>

<script>
</script>

<style lang='less' scoped>
  img {
    vertical-align: middle;
  }

  .content {
    position: relative;
  }

  .mobile-show {
    width: 100%;
    overflow: hidden;
    margin-bottom: -6px;
  }

  .mobile-show img {
    width: 100%;
  }

  .tag-ad {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 0 6px;
    color: #FFF;
    background-color: #000;
    font-size: 0.225rem;
    line-height: 180%;
    opacity: 0.6;
    border-radius: 2px;
    z-index: 200;
  }

  .bg-dark {
    background-color: #252525;
    padding: 48px 0 16px;
  }
  .rewards-tips {
      margin-top: 36px;
      margin-bottom: 12px;
      font-size: 10px;
      .white {
          color: #FFF;
          a{
            color:#00A862;;
          }
      }
   }
  .member-package .wrapper {
    padding: 0 24px;
  }

  .rewards-title {
    margin: auto;
    margin-bottom: 24px;
    img{
      width: 100%;
    }
  }

  .wrapper .rewards-content {
    width: 100%;
    text-align: center;
  }

  .rewards-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 7px;
  }

  .rewards-content .item {
    width: 49%;
    margin: 4px 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items:flex-start;
  }

  .rewards-content .item img {
    width: 60%;
  }

  .rewards-content .item-content {
    max-width: 100%;
    margin: 0 auto;

    h2 {
      font-weight: 400;
      color: #FFF;
      line-height: 140%;
      text-align: center;
      margin: 0;
      font-size: 16px;
    }

    p {
      font-size: 12px;
      font-weight: 300;
      color: #FFF;
      line-height: 140%;
      letter-spacing: 0.4px;
      text-align: center;
      margin: 6px 12px;
    }
  }
  .bg-dark>img, .bg-grey>img, .bg-light-grey>img {
      max-width: 100%;
  }
  .bg-grey{
    position: relative;
    top: -0.6rem;
  }
  .rewards-title1{
    width:80%;
    margin-left:13%;
    padding: 20px;
    img{
      width: 100%;
    }
  }
  .rewards-title2{
    width:80%;
    margin-left:13%;
    padding: 20px;
    img{
      width: 100%;
    }
  }
  .rewards-content1{
    h3{
      color: #000;
      font-size: 18px;
      text-align: left;
    }
    ul{
      li{
        text-align: left;
            font-size: 13px;
            line-height: 200%;
            padding-left: 10px;
      }
    }
    .small{
      text-align: left;
    }
  }
</style>
