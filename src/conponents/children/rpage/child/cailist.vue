<template>
  <div id="n-cailist">
     <div class="cailist-block">
       <ul>
         <li v-for="(items,index) in cailist" :key="index">
           <img :src="items.src" alt=""/>
           <span>{{items.name}}</span>
         </li>
        
       </ul>
     </div>
   
  </div>
</template>

<script>

export default {
  name: 'n-cailist',
  props:{
    cailist:Array
  },
  mounted(){
    //console.log(this.cailist);
  },
  data () {
    return {
     
    }
  }
}
</script>

<style lang="scss" scoped>
#n-cailist{
  width: 100%;
  
  background-image: url("http://localhost:8080/public/r/meishi/rmeishibg.jpg");
  background-size: 100%;
  padding: 7rem 0 0 0;
  box-sizing: border-box;
  .cailist-block{
    width: 100%;
    height: 100%;
    ul{
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      li{
        width: 25%;
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding:.5rem 0;
        box-sizing: border-box;
        img{
          width: 3rem;
          height: 3rem;
        }
        span{
          font-size: 12px;
          color: black;
          padding:.3rem 0 0 0;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>