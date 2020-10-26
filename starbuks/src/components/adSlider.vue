<template>
	<section class="slider-ad">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in sliderList" :key="index" @click="itemClick"> 
					<a href="javascript:;">
						<img :src="item.sliderImage"
						class="tablet-show mobile-hidden">
						<img :src="item.sliderImageMobile"
						class="tablet-hidden mobile-show">
					</a>
				</div>
			</div>
		    <div class="swiper-button-next transition"></div>
		</div>
	
	</section>
</template>
<script>

	import Swiper from 'swiper/dist/js/swiper.min.js'
	import 'swiper/dist/css/swiper.min.css'

	export default {
		data(){
			return{
				sliderList: [
					{
						sliderImage: require('./../assets/images/kv-1.jpg'),
						sliderImageMobile: require('./../assets/images/kv-1-mobile.jpg')
					},
					{
						sliderImage: require('./../assets/images/kv-cold-brew.jpg'),
						sliderImageMobile: require('./../assets/images/kv-cold-brew-mobile.jpg')
					},
					{
						sliderImage: require('./../assets/images/kv-2.jpg'),
						sliderImageMobile: require('./../assets/images/kv-2-mobile.jpg')
					},
					{
						sliderImage: require('./../assets/images/kv-5-icecream.jpg'),
						sliderImageMobile: require('./../assets/images/kv-5-icecream-mobile.jpg')
					},
					{
						sliderImage: require('./../assets/images/kv-ice.jpg'),
						sliderImageMobile: require('./../assets/images/kv-ice-mobile.jpg')
					}
				]
			}
		},
		mounted(){
			 this.swiperSlideConfig();
		},
		methods: {
			itemClick(){
      this.$router.push('/menu')
    },
			swiperSlideConfig(){
				let swiper_slider_ad = new Swiper ('.slider-ad .swiper-container', {

			    	direction: 'horizontal',
			    	loop: true,
			    	speed: 800,
			    	autoplay: {
			    		delay: 3600,
			   	 		stopOnLastSlide: false,
			    		disableOnInteraction: false
			    	},
			    	navigation: {
			      		nextEl: '.swiper-button-next'
			    	}
			  	})

			  	swiper_slider_ad.el.mouseover = function(){
			  		swiper_slider_ad.autoplay.stop();
				};

				swiper_slider_ad.el.mouseout = function(){
			  		swiper_slider_ad.autoplay.start();
				};

				// $('.slider-ad .swiper-button-next').click(()=>{
				// 	swiper_slider_ad.autoplay.start();
				// });
			}
		}
	}

</script>
<style scoped>
 .slider-ad {
	 overflow:hidden;
 }
 
</style>
