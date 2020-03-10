<template>
  <div id="n-shipin">
    <div class="n-lvheader-block">
      <ul class="header-ul">
        <li class="header-li" @click="qiehuanka(index)" v-for="(items,index) in ullist" :key="index"><span :class='index==0?"fontcolor":""'>{{items.name}}</span></li>
      <div class="line"></div>
      </ul>
      
    </div>
    <div class="content-block">
      <ul class="content-ul">
        <li class="content-li"  v-for="(items,index) in ullist" :key="index">
          <nshimoban :shipin="items.child"></nshimoban>
        
        </li>
        

      </ul>
    </div>
    
  </div>
</template>

<script>

import nshimoban from '../children/shimoban.vue'
import Axios from 'axios'
export default {
  name: 'n-shipin',
  components:{
    nshimoban
  },
  mounted(){
    var that=this;
  Axios.post("/shipin").then((res)=>{
    
     this.ullist=res.data.result.ullist;
  })
    that.touchmove();
  },
  data () {
    return {
      count:0,
     ullist:[]
    }
  },
  methods:{
     touchmove() {
      var that = this;
      var startx;
      var movex;
      var old;
     // var count = 0;
      var oldline;
      that
        .$(".content-ul")
        .on("touchstart", function(e) {
          old = parseInt(that.$(".content-ul").css("marginLeft"));
          oldline=parseInt(that.$(".line").css("left"));
         // console.log(old)
          startx = e.originalEvent.targetTouches[0].pageX;
        })
        .on("touchmove", function(e) {
          movex = e.originalEvent.targetTouches[0].pageX;
          if (movex - startx < 0) {
            //console.log(Math.floor(that.$(".menu-ul").width()/that.$(window).width()))
            if (
              that.count >=
              Math.floor(that.$(".content-ul").width() / that.$(window).width()) -
                1
            ) {
              //console.log(count);
              that.$(".content-ul").css({
                marginLeft: -that.$(window).width() * that.count
              });
            } else {
              that.$(".content-ul").css({
                marginLeft: -Math.abs(movex - startx) + old
              });
              
              that.$(".line").css({
                left:Math.abs(movex - startx)/8+oldline
              })
            }
            
          } else if (movex - startx > 0) {
            if (that.count == 0) {
              that.$(".content-ul").css({
                marginLeft: 0
              });
            } else {
              that.$(".content-ul").css({
                marginLeft: Math.abs(movex - startx) + old
              });
              //console.log(Math.abs(movex - startx)/8-oldline)
              that.$(".line").css({
                left:-Math.abs(movex - startx)/8+oldline
              })
            }
          }
        })
        .on("touchend", function(e) {
          //console.log(Math.abs(movex - startx) > that.$(window).width() - 150);
          if (movex - startx < 0) {
            if (Math.abs(movex - startx) > that.$(window).width() - 150) {
              
             // console.log(that.$(".content-li").length-1);
              if(that.count>=that.$(".content-li").length-1){
                that.count==that.$(".content-li").length-1;
                console.log(that.count);
              }
              else{
                that.count++;
              }
             
              // if (
              //   that.count >=
              //   Math.floor(
              //     that.$(".content-ul").width() / that.$(window).width()
              //   ) -
              //     1
              // ) {
              //   that.count =
              //     Math.floor(
              //       that.$(".content-ul").width() / that.$(window).width()
              //     ) - 1;
              // }
               that.qiehuanka(that.count);
              // that.$(".content-ul").animate(
              //   {
              //     marginLeft: -that.$(window).width() * that.count
              //   },
              //   200
              // );
            } else {
              that.$(".content-ul").animate(
                {
                  marginLeft: -that.$(window).width() * that.count
                },
                200
              );
              that.$(".line").animate({
                left:oldline
              },200)
            }
          } else if (movex - startx > 0) {
            if (Math.abs(movex - startx) > that.$(window).width() - 150) {
             
               
              if (that.count <=0) {
                that.count = 0;
                
              }
              else{
                 that.count--;
                
              }
              //   that.$(".content-ul").animate(
              //   {
              //     marginLeft: -that.$(window).width() * that.count
              //   },
              //   200
              // );
              that.qiehuanka(that.count);
             //console.log(that.count);
            } else {
              that.$(".content-ul").animate(
                {
                  marginLeft: -that.$(window).width() * that.count
                },
                200
              );
               that.$(".line").animate({
                left:oldline
              },200)
            }
          }
        });
    },
    qiehuanka(index){
      var that=this;
      //console.log(that.$(".header-li").width());
      that.$(".header-li").find("span").removeClass("fontcolor");
      that.$(".header-li").eq(index).find("span").addClass("fontcolor");
      that.$(".line").animate({
        left:index*4+1+"rem"
      },300)
      that.$(".content-ul").animate({
        marginLeft:-that.$(window).width()*index
      },200)
      this.count=index;
    }
  }
}
</script>

<style lang="scss">
.fontcolor{
  color: black !important;
  
}
.bgcolor{
  background: rgb(231, 136, 231) !important;
}
#n-shipin{
  width: 100%;
  height: 1000px;
  .n-lvheader-block{
    position: relative;
    width: 100%;
    height: 2.5rem;
   overflow: hidden;
   
    ul{
      position: relative;
      width: auto;
      height: 113%;
      display: flex;
      flex-wrap: nowrap;
      overflow-x: scroll;
      .line{
      position: absolute;
      left: 1rem;
      bottom: 6px;
      width: 2rem;
      border-bottom:1.5px solid black;
    }
      li{
        height: 100%;
        float: left;
        list-style: none;
        
        padding:0  1rem;
        box-sizing: border-box;
        display: flex;
        align-items: center;
         background: white;
        span{
          display: block;
          width: 2rem;
          font-size: 13px;
          color: gray;
          text-align: center;
        }
      }
    }
  }
  .content-block{
    width: 100%;
    overflow: hidden;
    .content-ul{
      width: 1200%;
      height: 1000px;
      .content-li{
        list-style: none;
        width: 8.33333333%;
        float: left;
      }
    }
  }
}
</style>