<template>
  <div id="n-header">
    <div class="n-header-block">
      <div class="header-first" @click="tianqi()">
        <div>32</div>
        <div>
          <span>多云</span>
          <span>46优</span>
        </div>
      </div>
      <!-- <div class="header-second">
        
      </div>-->
      <div class="header-third">
        <span>长安区</span>
        <img src="public/header/fd.png" alt />
        <input @click="sousuo()" type="text" placeholder="潜水" />
        <!-- <router-link to="/sousuo">
         
        </router-link> -->
      </div>
      <div class="header-four">
        <div>+</div>
      </div>
    </div>
    <div class="n-white-header" data-show="false">
      <div class="fixed-header">
        <span>长安区</span>
        <img src="public/header/fd.png" alt />
        <input  @click="qihuan()"  type="text" placeholder="潜水" />
      </div>
    </div>
  </div>
</template>

<script>
import Emit from "../../emit/emit.js";
export default {
  name: "n-header",
  props:{
    'chuxian':Function
  },
  mounted() {
    var that = this;
    //  // console.log(
    //     that.$(".header-third").offset().left,
    //     that.$(".header-third").width()
    //   );
    Emit.$on("senddata", function(res) {
      that.ultop = res;
    });
    that.$(".fixed-header").css({
      left: that.$(".header-third").offset().left,
      width: that.$(".header-third").width()
    });

    //that.scrolldata();
   
  },
  data() {
    return {
      ultop: null
    };
  },

  methods: {
    tianqi(){
     this.$router.push("tianqi");
    },
    sousuo(){
      this.chuxian();
    },
    scrolldata() {
      //  if (that.$(".n-white-header").attr("data-show") == "false") {
      //       //console.log("出现");
      //       that
      //         .$(".n-white-header")
      //         .css({
      //           opacity: 1,
      //           background: "white"
      //         }).find(".fixed-header").stop()
      //         .animate(
      //           {
      //             width: that.$(window).width(),
      //             left: 0,
      //             marginLeft: "10px"
      //           },
      //           40,function (){
      //             that.$(".n-white-header").attr("data-show", "true");
      //           }
      //         );
              
      //     }
      //console.log(this.$(".header-third").offset().left);
      var that = this;

      //this.$(window).on("scroll", function() {
        if (that.$(window).scrollTop() > that.ultop) {
         // if (that.$(".n-white-header").attr("data-show") == "false") {
           console.log("c") 
            that
              .$(".n-white-header")
              .css({
                opacity: 1,
                background: "white",
                 zIndex:1000
              }).find(".fixed-header").stop()
              .animate(
                {
                  width: that.$(window).width(),
                  left: 0,
                  marginLeft: "10px",
                 
                },
                40,function (){
                  console.log("lll")
                  that.$(".n-white-header").attr("data-show", "true");
                }
              );
              
         // }
        } else {
         
          that
            .$(".n-white-header")
            .attr("data-show", "false")
            .css({
              background: "transparent",
              zIndex:10
            });
          that.$(".fixed-header").stop().animate(
            {
              width: that.$(".header-third").width(),
              left: that.$(".header-third").offset().left,
              marginLeft: "0px",
              
            },
            40,
            function() {
              that.$(".n-white-header").css({
                opacity: 0
              });
            }
          );
        }
     // });
    },
    qihuan() {
      //console.log(1);
     this.$router.push("sousuo");
    }
  }
};
</script>

<style lang="scss" scoped>
#n-header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  background: transparent;
  width: 100%;
  height: 3rem;

  border-bottom: 1px solid silver;
  .n-white-header {
    width: 100%;
    height: 3rem;
    position: fixed;
    left: 0;
    top: 0;
    background: white;
    //padding: 0 10px;
    box-sizing: border-box;
    opacity: 0;
    transition: opacity .1s linear;
    .fixed-header {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      span {
        position: relative;
        font-size: 12px;
        margin-right: 20px;
      }
      span:after {
        position: absolute;
        content: "";
        right: -10px;
        top: 7px;
        width: 0;
        height: 0;
        border: 4px solid;
        border-color: rgb(155, 154, 154) transparent transparent transparent;
      }
      input {
        width: 70%;
        height: 60%;
        border: 1px solid transparent;
        border-radius: 15px;
        background: rgb(240, 238, 238);
        padding: 0 0 0 30px;
        box-sizing: border-box;
        outline: none;
      }
      img {
        width: 15px;
        height: 15px;
        position: absolute;
        left: 65px;
        top: 16px;
      }
    }
  }
  .n-header-block {
    position: relative;
    z-index: 100;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    .header-first {
      flex: 1.2;
      height: 100%;
      display: flex;
      padding-left: 10px;
      box-sizing: border-box;
      flex-direction: row;

      align-items: center;
      div:nth-child(1) {
        flex: 1;
        font-size: 24px;
      }
      div:nth-child(2) {
        flex: 0.9;
        display: flex;
        flex-direction: column;
        font-size: 10px;
        span {
          flex: 1;
        }
      }
    }
    // .header-second {
    //    height: 100%;
    //   flex: 1;
    //   border-left:1px solid silver;
    //   height: 1.8rem;
    //   text-align: center;
    //   display: flex;
    //   align-items: center;
    //   font-size: 13px;
    //   padding:0 5px;
    //   box-sizing: border-box;
    //  span{
    //    position: relative;

    //  }
    //  span:after{
    //    position: absolute;
    //    content: "";
    //    right: -10px;
    //    top: 7px;
    //    width: 0;
    //    height: 0;
    //    border:4px solid;
    //    border-color: rgb(155, 154, 154) transparent transparent   transparent;
    //  }

    //}
    .header-third {
      position: relative;
      flex: 4;
      height: 100%;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      span {
        position: relative;
        font-size: 12px;
        margin-right: 20px;
      }
      span:after {
        position: absolute;
        content: "";
        right: -10px;
        top: 7px;
        width: 0;
        height: 0;
        border: 4px solid;
        border-color: rgb(155, 154, 154) transparent transparent transparent;
      }

      // a{
      //  display: flex;
      // align-items: center;
      // box-sizing: border-box;
      //   width: 100%;
      //   height: 100%;
      //   text-decoration: none;
      //   outline: none;
       
     // }
         input {
        width: 75%;
        height: 60%;
        border: 1px solid black;
        border-radius: 15px;
        background: rgb(240, 238, 238);
        padding: 0 0 0 30px;
        box-sizing: border-box;
        outline: none;
      }
      img {
        width: 15px;
        height: 15px;
        position: absolute;
        left: 65px;
        top: 16px;
      }
    }
    .header-four {
      flex: 1;
      height: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
      div {
        font-size: 35px;
      }
    }
  }
}
</style>
