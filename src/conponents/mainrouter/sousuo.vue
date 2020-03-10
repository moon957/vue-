<template>
  <div id="n-sousuo">
    <div class="sou-header">
      <div>
        <img src="public/header/fd.png" alt=""/>
        <input type="text" placeholder="火锅"/>
      </div>
      <div  @click="back()">
        <span>取消</span>
      </div>
    </div>
   <div class="remen-block">
     <div>
       <span>热门搜索</span>
     </div>
     <div>
       <span>推拿</span> <span>中医拔罐</span> <span>盲人按摩</span> <span>少儿英语</span>
        <span>化妆</span> <span>千家粗粮王</span> <span>拔罐</span> <span>凤城二路火锅</span>
         <span>潜水</span> 
     </div>
   </div>
   <div class="soufooter-block">
     <img src="public/icon/maikefeng.png" alt=""/>
     <span>说出你想要的</span>
   </div>
  </div>
</template>

<script>
export default {
  name: 'n-sousuo',
 mounted(){
  //console.log(this.$(window).height())
  this.$("#n-sousuo").css({
    height:this.$(window).height(),
    bottom:-this.$(window).height(),
  })
  this.$(".soufooter-block").css({
     bottom:-(this.$(window).height()+3),
  })
 },
  data () {
    return {
      
    }
  },
  methods:{
    back(){
      
      this.$("#n-sousuo").animate({
   
    bottom:-this.$(window).height(),
  })
  this.$(".soufooter-block").css({
     bottom:-(this.$(window).height()+3),
  })
    },
    chuxian(){
      //console.log("搜索页面该出现了")
      this.$("#n-sousuo").animate({
   
    bottom:0,
  },500)
  this.$(".soufooter-block").animate({
     bottom:0,
  })
    }
  }
 
}
</script>

<style lang="scss" scoped>
#n-sousuo{
  position: fixed;
  left: 0;
  
  z-index: 2000;
  width: 100%;
  background: white;
  
  .sou-header{
    width: 100%;
    height: 3rem;
    background: white;
    display: flex;
    flex-direction: row;
    padding:0 10px;
    box-sizing: border-box;
    border-bottom:1px solid silver; 
    div:nth-child(1){
      flex: 4;
      display: flex;
      align-items: center;
      position: relative;
      img{
        position: absolute;
        left: 6px;
        top: 16px;
        width: 15px;
        height: 15px;
      }
      input{
        width: 75%;
        height: 40%;
        border: none;
       // font-size: 12px;
        color: silver;
        outline: none;
        padding:1rem 0 1rem 30px;
        box-sizing: border-box;
        caret-color:green; 
      }
    
    }
    div:nth-child(2){
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      span{
        font-size: 14px;
        color: gray;
      }
    }
  }
  .remen-block{
    width: 100%;
    //height: 18rem;
    background: white;
    display: flex;
    flex-direction: column;
    padding:0 10px;
    box-sizing: border-box;
    div:nth-child(1){
      flex: 1;
      display: flex;
      align-items: center;
      
      span{
        font-size: 12px;
        color: gray;
        padding:1rem 0;
      }
    }
    div:nth-child(2){
      flex: 6;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      span{
       // margin:1rem 0;
        width: 27.3333336%;
        height: 35px;
        text-align: center;
        font-size: 12px;
        color: black;
        line-height: 35px;
        background: rgb(240, 238, 238);
        margin: .5rem 3%;
      }
    }
  }
  .soufooter-block{
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 3rem;
    background: #f8f8f8;
    z-index: 2000;
    
    img{
      width: 30px;
      height: 20px;
      vertical-align: middle;
    }
    span{
      letter-spacing: .2rem;
      color: black;
      font-size: 14px;
      vertical-align: middle;
    }
  }
}
</style>
