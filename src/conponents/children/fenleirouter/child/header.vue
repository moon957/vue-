<template>
  <div id="n-rheader">
     <div class="jheader-block">
         <div>
             <img @click="back()" src="public/icon/back.png" alt=""/>
             <span class="header-text">西安市排行榜</span>
         </div>
        
     </div>
    <div class="whiteceng"></div>
  </div>
</template>

<script>
export default {
  name: 'n-rheader',
 mounted(){
    this.headerheight=parseInt(this.$(".jheader-block").height());
   
  },
  data () {
    return {
      headerheight:0,

    }
  },
  methods:{
    back(){
      this.$router.back(-1);
    },
     white() {
       
      this.$(".whiteceng").css({
        opacity: (Math.abs(this.$(window).scrollTop()) / 200) * 1.3>=1?1:(Math.abs(this.$(window).scrollTop()) / 200) 
      });
      if(parseInt(this.$(".whiteceng").css("opacity"))==1){
        this.$(".header-text").css({
          display:"block"
        })
      }else{
        this.$(".header-text").css({
          display:"none"
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#n-rheader{
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
     .whiteceng{
     position: fixed;
    left: 0;
    top: 0;
    z-index:10;
    width: 100%;
    height: 3rem;
    background:white;
    opacity: 0;
    border-bottom: 1px solid rgb(243, 239, 239);
    box-sizing: border-box;
  }
    .jheader-block{
      position: fixed;
      left: 0;
      top: 0;
      z-index:1000;
        width: 100%;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        div{
            flex: 1;
            display: flex;
            flex-direction: row;
            span{
                font-size: 18px;
                vertical-align: middle;
                padding:0 1rem;
                display: none;
            }
            img{
                width:20px;
                height: 20px;
                vertical-align: middle;
            }
        }
    }
}
</style>