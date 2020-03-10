<template>
  <div id="n-my">
    <div class="n-mheader">
      <div>
        <img src="public/icon/zhezhi.png" alt=""/>
      </div>
      <div>
        <img src="public/icon/xinfeng.png" alt=""/>
      </div>
    </div>
    <div class="whiteceng"></div>
    <div class="n-mtopblock">
      <div>
        <img src="public/header/logo.jpg" alt=""/>
      </div>
      <div>
        <span>登录百度账号</span>
        <img src="public/icon/youjiantou.png" alt=""/>
        </div>
    </div>
    <nfouricon ref="fouricon"></nfouricon>
    <nmtitle></nmtitle>
    <div class="m-bottom">
      <div class="big-block">
        <img src="public/icon/zhaopin.png" alt=""/>
        <span>百度百聘</span>
        <p class="btn">兼职热招</p>
      </div>
      <div class="big-block">
        <img src="public/icon/zhaopin.png" alt=""/>
         <span>流量银行</span>
         <p  class="btn">百度神卡</p>
      </div>
      <div class="small-block">
        <img src="public/icon/jinrong.png" alt=""/>
        <span>度小满金融</span>
      </div>
      <div  class="small-block">
        <img src="public/icon/xingkong.png" alt=""/>
        <span>我的收藏</span>
      </div>
      <div  class="small-block">
        <img src="public/icon/zhaopin.png" alt=""/>
        <span>我的简历</span>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import nfouricon from '../children/mfouricon.vue'
import nmtitle from '../children/mtitle.vue'
export default {
  name: 'n-my',
  components:{
   
    nfouricon,
    nmtitle
  },
  mounted(){
    var that=this;
    //console.log(this.$(".n-mheader"))
    var starty;
    var movey;
    this.$("#n-my").on("touchstart",function(e){
      starty=e.originalEvent.targetTouches[0].pageY;
    }).on("touchmove",function(e){
      movey=e.originalEvent.targetTouches[0].pageY;
     
        var top=that.$refs.fouricon.icontop;
        that.$(".whiteceng").css({
        opacity: (Math.abs(that.$(window).scrollTop())/top)*1.3
      })
     
    })
  },
  data () {
    return {
     
    }
  }

}
</script>

<style lang="scss">
#n-my{
  width: 100%;
  margin: 0 0 10rem 0;
  .whiteceng{
     position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 3rem;
    background:white;
    opacity: 0;
  }
  .n-mheader{
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    width: 100%;
    height: 3rem;
    background:transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding:10px 10px;
    box-sizing: border-box;
  
    
    div:nth-child(1){
      flex: 1;
     
      img{
        width: 15px;
        height: 15px;
        float: left;
      }
    }
     div:nth-child(2){
      flex: 1;
      img{
        width: 15px;
        height: 15px;
        float: right;
      }
    }
  }
  .n-mtopblock{
    width: 100%;
    height: 10rem;
    display: flex;
    flex-direction: row;
     background-image: url("http://localhost:8080/public/header/mtbg.jpg");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    
    padding:4rem 0 0;
    box-sizing: border-box;
    div:nth-child(1){
      flex: 1.5;
      display: flex;
      justify-content: center;
      
      img{
        width: 65px;
        height: 65px;
        border-radius: 50%;
        border: 1px solid red;
      }
    }
    div:nth-child(2){
      flex: 4;
      padding:1rem 0;
      span{
        font-size: 15px;
        color: rgb(85, 85, 85);
        vertical-align: middle; 
      }
      img{
        width: 15px;
        height: 15px;
        vertical-align: middle;
      }
    }
  }
  .m-bottom{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    div{
      width: 50%;
      background: white;
      
      span{
        font-size: 13px;
      }
    }
    .small-block{
      text-align: center;
      margin: 0.5px 0px;
      padding:.6rem 1rem;
      box-sizing: border-box;
      border-right:1px solid hsl(0, 8%, 95%);
      img{
        width: 20px;
       height: 20px;
       vertical-align: middle;
      }
      span{
         vertical-align: middle;
      }
    }
    .big-block:nth-child(1){
      border-right:1px solid  hsl(0, 8%, 95%);
    }
    .big-block{
      height: 6rem;
     margin: .1rem 0;
     text-align: center;
     padding:1rem 1rem 0 1rem;
      box-sizing: border-box;
     .btn{
       padding:.2rem 1rem;
       border: 1px solid silver;
       border-radius: 18px;
       vertical-align: middle;
     }
     img{
       width: 20px;
       height: 20px;
       vertical-align: middle;
     }
     p{
       width: 45%;
       margin: 1rem 2rem;
     }

    }
  }

}
</style>