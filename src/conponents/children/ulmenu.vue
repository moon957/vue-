<template>
  <div id="n-menu">
    <div class="menu-block">
      <ul class="menu-ul">
       
          <li class="menu-li" v-for="(items,index) in ulmenu" :key="index"   @click="routername(items.action,items.name)">
            
              <img :src="items.src" alt />
              <p>{{items.name}}</p>
             <!-- <router-link :to="items.action"></router-link> -->
        </li>
        
      </ul>
    </div>
  </div>
</template>

<script>
import Emit from "../../emit/emit.js";
import Axios from 'axios'
export default {
  name: "n-menu",
  mounted() {
    this.ultop = this.$(".menu-ul").offset().top - 48;
    //console.log(this.ultop);
    Emit.$emit("senddata", this.ultop);
    this.touchmove();
     Axios.post("/").then((res)=>{
       // console.log(res.data.return.ulmenu);
        this.ulmenu=res.data.result.ulmenu;
    })
  },
  data() {
    return {
      ultop: null,
     ulmenu:[]
    };
  },
  methods: {
    routername(path,title){
      
      this.$router.push({
        path:path,
        query:{
          name:title
        }
      })
      
    },
    touchmove() {
      var that = this;
      var startx;
      var movex;
      var old;
      var count = 0;

      that
        .$(".menu-ul")
        .on("touchstart", function(e) {
          old = parseInt(that.$(".menu-ul").css("marginLeft"));
          //console.log(old)
          startx = e.originalEvent.targetTouches[0].pageX;
        })
        .on("touchmove", function(e) {
          movex = e.originalEvent.targetTouches[0].pageX;
          if (movex - startx < 0) {
            //console.log(Math.floor(that.$(".menu-ul").width()/that.$(window).width()))
            if (
              count >=
              Math.floor(that.$(".menu-ul").width() / that.$(window).width()) -
                1
            ) {
              console.log(count);
              that.$(".menu-ul").css({
                marginLeft: -that.$(window).width() * count
              });
            } else {
              that.$(".menu-ul").css({
                marginLeft: -Math.abs(movex - startx) + old
              });
            }
          } else if (movex - startx > 0) {
            if (count == 0) {
              that.$(".menu-ul").css({
                marginLeft: 0
              });
            } else {
              that.$(".menu-ul").css({
                marginLeft: Math.abs(movex - startx) + old
              });
            }
          }
        })
        .on("touchend", function(e) {
         
          if (movex - startx < 0) {
            if (Math.abs(movex - startx) > that.$(window).width() - 150) {
              count++;
             // console.log("走",count);
              if (
                count >=
                Math.floor(
                  that.$(".menu-ul").width() / that.$(window).width()
                ) -1
              ) {
                count =
                  Math.floor(
                    that.$(".menu-ul").width() / that.$(window).width()
                  ) - 1;
              }
              that.$(".menu-ul").animate(
                {
                  marginLeft: -that.$(window).width() * count
                },
                200
              );
            } else {
              that.$(".menu-ul").animate(
                {
                  marginLeft: -that.$(window).width() * count
                },
                200
              );
            }
          } else if (movex - startx > 0) {
            if (Math.abs(movex - startx) > that.$(window).width() - 150) {
              count--;
              if (count < 0) {
                count = 0;
              }
              that.$(".menu-ul").animate(
                {
                  marginLeft: -that.$(window).width() * count
                },
                200
              );
            } else {
              that.$(".menu-ul").animate(
                {
                  marginLeft: -that.$(window).width() * count
                },
                200
              );
            }
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#n-menu {
  width: 100%;
  height: 14rem;
  background-image: url("../../assets/2.jpg");
  background-size: 100%;
  padding: 4rem 0 0 0;
  box-sizing: border-box;
  .menu-block {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .menu-ul {
      width: 300%;
      height: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      .menu-li {
        list-style: none;
        width: 6.666666667%;
        text-align: center;
        img {
          width: 3rem;
          height: 3rem;
        }
        p {
          font-size: 10px;
          color: gray;
        }
      }
    }
  }
}
</style>
