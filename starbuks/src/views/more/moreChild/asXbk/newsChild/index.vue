<template>
  <div class="news-index">
   <div class="head">
     <img src="../../../../../assets/images/icon-chevron-left.svg" @click="handleClick">
   </div>
   <div class="title"><h1 v-html="listContent.title"></h1><div v-html="listContent.c_time"></div>
   <img src="../../../../../assets/images/wechat.svg"><img src="../../../../../assets/images/weibo.svg">
   </div>
   <div class="content" v-html="listContent.c_content"></div>
  </div>
</template>

<script>
export default {
  name: 'newsList',
  data () {
    return {
      list: 1,
      listContent: {}
    }
  },
  methods: {
    handleClick () {
      this.$router.go(-1)
    }
  },
  created () {
    this.list = this.$route.params.id
    this.$http
      .get('http://123.56.129.223/starbucks/cnews.php?id=' + this.list)
      .then((res) => {
        this.listContent = JSON.parse(res.request.responseText)[0]
        console.log(this.listContent)
      })
  }
}
</script>

<style scoped lang="less">
 .news-index{
   color: rgba(0, 0, 0, 0.87);
    font-size: 16px;
    font-weight: 400;
   .content{
    padding: 12px 32px 60px;
    /deep/ p{
          color: rgba(0, 0, 0, 0.87);
         font-size: 16px;
         font-weight: 400;
    }
  /deep/  img{
          width: 100%;
    }
  /deep/  ul{
          margin: 10px 0 20px;
       li{
      margin: 0 0 6px;
      text-align: left;
    }
    }

   /deep/  figure{
       margin:0 ;
     }
  /deep/  b{
      color: rgba(0, 0, 0, 0.87);
    font-size: 16px;
    font-weight: 700;
    }
   }
    background: #f7f7f7;
    letter-spacing: 0.4px;
    .title{
          background: #fff;
            padding: 24px 16px 14px;
      h1{
text-align: center;
    font-size: 22px;
        font-weight: 700;
        color: #000;
        line-height: 30px;
      }
      div{
    color: #C2A661;
     font-size: 14px;
     margin: 8px 0;
        font-weight: 700;
      }
      img{
width: 30px;
margin: 0 10px;
      }
    }
.head{
   width: 100%;
   height: 62px;
   padding: 16px 16px 0 16px;
   background: #fff;
   border-bottom: 2px solid #f7f7f7;
   img{
     float: left;
    width: 32px;
   }
}
 }
</style>
