<template>
  <div id="n-rheader">
    <div class="header-block">
      <div>
        <img src="public/icon/back.png" alt="" @click="back()"/>
        <span class="header-text">{{name}}</span>
      </div>
      <div>
        <img src="public/icon/sousuo.png" alt=""/>
      </div>
      
    </div>
    <div class="whiteceng"></div>
  </div>
</template>

<script>
export default {
  name: "n-rheader",
  props:{
    'name':String
  },
  mounted(){
    this.headerheight=parseInt(this.$(".header-block").height());
   
  },
  data() {
    return {
      headerheight:0
    };
  },
  methods: {
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
};
</script>

<style lang="scss" scoped>
#n-rheader {
  width: 100%;
   .whiteceng{
     position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 3rem;
    background:white;
    opacity: 0;
    border-bottom: 1px solid rgb(243, 239, 239);
    box-sizing: border-box;
  }
  .header-block {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    width: 100%;
    height: 3rem;
    background: transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10px;
    box-sizing: border-box;
    align-items: center;
    div:nth-child(1) {
      flex: 1;
      display: flex;
      flex-direction: row;
      .header-text{
        font-size: 17px;
        display: none;
        padding: 0 .5rem;
        vertical-align: middle;
      }
      img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
      }
    }
    div:nth-child(2) {
      flex: 1;
      text-align: right;
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>