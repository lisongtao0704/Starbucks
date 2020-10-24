<template>
  <div class="menu-search">
    <header class="header">
      <i class="el-icon-close" @click="back"></i>
    </header>
    <div class="search_body">
      <div class="field search">
         <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/icons/icon-search.svg" class="icon" @click="Search">
         <input type="text" id="menu-search-input" placeholder="搜索菜单" v-model="search">
      </div>
      <div id="menu-search-empty"><div>大家都在搜</div></div>

      <!-- 搜索后的 -->
      <div class="grid" v-if="search.length>0">
          <router-link to="shoplist"  class="item" v-for="item in searchData" tag='div'>
               <img :src="'https://www.starbucks.com.cn/'+item.preview"/>
              <p>{{item.title}}</p>
          </router-link>
      </div>
      <!-- 搜索前的 -->
      <div class="grid" v-else>
        <router-link :to="'/menu/goodinfo/' + item.ProductID" class="item" v-for="item in cades" tag='div'>
          <img :src="item.ProductImage" />
          <p>{{item.ProductName}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import mui from '../../lib/mui/js/mui.min.js'
  export default{
    data(){
      return{
        search:'',
        // 原本展示数据
        list: [],
        // 搜索后的展示数据
        searchData:[],
        products: {},
        cades:[]
      }
    },
    created(){
       this.getAllShop();
       this.getByCateId()
    },
    methods:{
      getAllShop(){
        this.$http.get('http://localhost:8080/allShop.json').then(res=>{
          this.products=res.data;
          for(let key in this.products){
            this.list.push(this.products[key])
          }
          console.log(this.list)
        })
      },
      getByCateId(){
        this.$http.get('http://123.56.129.223/starbucks/menu.php?category=beverages&type=chawana').then(res=>{
          this.cades = res.data
          //console.log( res.data)
        })
      },
      back(){
        this.$router.push('/menu')
      },
      Search(){
          var search = this.search;
          if (search) {
            this.searchData = this.list.filter(product=>{
                //console.log(product)
              return Object.keys(product).some(key=>{
                 //console.log(key)
                 //console.log(this.searchData)
                return String(product[key]).toLowerCase().indexOf(search) > -1
              })
            })
            if(this.searchData == ''){
              mui.toast('未查询到商品')
              console.dir(this.searchData)
            };
          }else if(search.length === 0){
              this.searchData = this.list;
              mui.toast('请输入查找内容')
            }else{
              return this.searchData;
            }
       }
},
}
</script>

<style lang="less" scoped>
  .grid{
    display: flex;
    padding: 7px;
    flex-wrap: wrap;
    justify-content: space-between;
    .item{
      width: 49%;
      margin: 4px 0;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      img{
        width: 100%;
        box-sizing: border-box;
        padding: 12px;
        border-radius: 50%;
      }
      p{
        font-size: 16px;
        line-height: 19px;
        padding: 0 7px;
        color: #000000;
        margin: 12px 0 24px 0;
        font-weight: 700;
      }
    }
  }
     .search_body{
       padding: 24px 24px 80px;
     }
     .menu-search{
       min-height: 100vh;
       background-color: #fff;
       position: relative;
       z-index: 1000;
       .header{
         padding: 24px;
         display: flex;
         flex-direction: row-reverse;
         i{
            font-size: 30px;
         }
       }
       .field{
         position: relative;
         img{
           position: absolute;
           bottom: 25px;
           right: 0;
         }
         input{
           border: none;
           border-bottom: 1px solid #ccc;
           width:100%;
           height: 40px;
           font-size: 16px;
         }
         input:focus{
           border-bottom: 1px solid rgb(0,168,98);
         }
       }
       #menu-search-empty{
         text-align: left;
         margin-bottom: 18px;
         div{
           height:28px;
           line-height: 28px;
           display: inline-block;
           padding: 2px 12px;
           background: #00A862;
           font-size: 14px;
           color: #FFF;
         }
       }
     }
</style>
