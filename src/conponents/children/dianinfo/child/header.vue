<template>
  <div id="n-dianheader">
       <div class="dianheader-block">
          <div>
              <img @click="back()" src="public/dianinfo/icon/backhei.png" alt=""/>
              <span class="header-text">{{name}}<span>({{address}})</span></span>
          </div>
          <div>
              <img src="public/dianinfo/icon/fenxinghei.png" alt=""/>
              <img src="public/dianinfo/icon/xingxinghei.png" alt=""/>
              <img src="public/dianinfo/icon/sangedianhei.png" alt=""/>
          </div>
      </div>
        <div class="whiteceng"></div>
  </div>
</template>

<script>

export default {
  name: 'n-dianheader',
  props:{
      'name':String,
      'address':String
  },
  data () {
    return {
     
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
          opacity:1
        })
      }else{
        this.$(".header-text").css({
          opacity:0
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#n-dianheader{
    width: 100%;
    
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
    .dianheader-block{
        position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
        width: 100%;
        height: 3rem;
        background: transparent;
        display: flex;
        flex-direction: row;
        padding:0 10px;
        box-sizing: border-box;
        div:nth-child(1){
            flex: 2;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            img{
                width: 20px;
                height: 20px;
                vertical-align: middle;
            }
            span{
                font-size: 16px;
                color: black;
                vertical-align: middle;
                flex-wrap: nowrap;
                height: 20px;
                display: flex;
                opacity: 0;
                span{
                    vertical-align: middle;
                    
                }
            }
        }
        div:nth-child(2){
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            img{
                width: 20px;
                height: 20px;
                padding:0 .3rem;
              
            }
        }
    }
}
</style>