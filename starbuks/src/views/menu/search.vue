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
          <div class="item" v-for="item in searchData">
               <img :src="'https://www.starbucks.com.cn/'+item.preview"/>
              <p>{{item.title}}</p>
          </div>
      </div>
      <!-- 搜索前的 -->
      <div class="grid" v-else>
        <div class="item">
          <img src="../../assets/images/menu-img2.jpg" />
          <p>爱尔兰奶油冷萃</p>
        </div>
        <div class="item">
          <img src="../../assets/images/menu-img2.jpg" />
          <p>爱尔兰奶油冷萃</p>
        </div>
        <div class="item">
          <img src="../../assets/images/menu-img2.jpg" />
          <p>爱尔兰奶油冷萃</p>
        </div>
        <div class="item">
          <img src="../../assets/images/menu-img2.jpg" />
          <p>爱尔兰奶油冷萃</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
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
      }
    },
    created(){
       this.getAllShop()
    },
    methods:{
      getAllShop(){
        this.$http.get('http://localhost:8080/allShop.json').then(res=>{
          this.products=res.data;
          for(let key in this.products){
            this.list.push(this.products[key])
          }
          //console.log(this.list)
        })
      },
      back(){
        this.$router.back()
      },
      Search(){
          var search = this.search;
          if (search) {
            this.searchData = this.list.filter(product=>{
                //console.log(product)
              return Object.keys(product).some(key=>{
                 console.log(key)
                 console.log(this.searchData)
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
=======
export default {
  data () {
    return {
      search: '',
      // 原本展示数据
      list: [],
      // 搜索后的展示数据
      searchData: [],
      products: [
        // 假数据
        {
          name: '爱尔兰奶油冷萃1',
          date: '2018-01-04',
          depart: '/img/menu-img2.253f8708.jpg'
        },
        {
          name: '爱尔兰奶油冷萃2',
          date: '2018-01-25',
          depart: '/img/menu-img2.253f8708.jpg'
        },
        {
          name: '爱尔兰奶油冷萃3',
          date: '2018-02-10',
          depart: '/img/menu-img2.253f8708.jpg'
        },
        {
          name: '爱尔兰奶油冷萃4',
          date: '2018-03-04',
          depart: '/img/menu-img2.253f8708.jpg'
        },
        {
          name: '爱尔兰奶油冷萃5',
          date: '2018-05-24',
          depart: '/img/menu-img2.253f8708.jpg'
        },
        {
          name: '爱尔兰奶油冷萃6',
          date: '2018-10-29',
          depart: '/img/menu-img2.253f8708.jpg'
        }
      ]
    }
  },
  methods: {
    back () {
      this.$router.back()
    },
    Search () {
      var search = this.search
      if (search) {
        this.searchData = this.products.filter(function (product) {
          // console.log(product)
          return Object.keys(product).some(function (key) {
            // console.log(key)
            return String(product[key]).toLowerCase().indexOf(search) > -1
          })
        })
        if (this.searchData == '') {
          alert('未查询到商品')
          console.dir(this.searchData)
        };
      } else if (search.length === 0) {
        this.searchData = this.list
        alert('请输入查找内容')
      } else {
        return this.searchData
      }
>>>>>>> 957366dbd68c8b08925a30337817614d6965afa6
    }
  }
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
