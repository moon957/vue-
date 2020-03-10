<template>
  <div id="n-lunbo">
    <div class="img-block">
      <ul class="img-ul">
        <li class="img-li" v-for="(items,index) in lunbodata" :key="index">
          <img :src="items.src" alt />
        </li>
       
      </ul>
      <div class="btn-block">
        <div v-for="(items,index) in lunbodata" :key="index">
          <span class="btn" v-if="index<lunbodata.length-1"></span>
        </div>

       
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: "n-lunbo",
  mounted() {
    this.$(".btn")
      .eq(0)
      .addClass("bgcolor");
      Axios.post("/").then((res)=>{
        this.lunbodata=res.data.result.lunbodata;
      })
    this.lunbo();
  },
  data() {
    return {
     lunbodata:[]
    };
  },
  methods: {
    lunbo() {
      var that = this;
      var count = 0;
      var time = null;
      var is = false;
      time = setInterval(t, 2000);
      function t() {
        is = true;
        count++;

        that.$(".btn").removeClass("bgcolor");
        that.$(".img-ul").animate(
          {
            marginLeft: -that.$(window).width() * count
          },
          500,
          function() {
            if (count >= that.$(".img-li").length - 1) {
              count = 0;
              that.$(".img-ul").css({
                marginLeft: 0
              });
            }
          }
        );
        //因为总共有六张图片  但是只显示五张  本来将下面对按钮操作的代码可以写成一个函数放在animate里，但是按钮变颜色会有一点延迟，
        //所以进行下面的处理：下面一段代码吗和animate是同时执行的，所以count在等于最后一张图片的时候（最后一张和第一张一样），就应该让第一张变色
        if (count == that.$(".img-li").length - 1) {
          that
            .$(".btn")
            .eq(0)
            .addClass("bgcolor");
        } else {
          that
            .$(".btn")
            .eq(count)
            .addClass("bgcolor");
        }
      }
      //这一段代码我注了  mouseenter事件是相对于浏览器网页的   手机没有mouseenter 鼠标进入事件   手机的时间是触摸事件touch
      // $(".img-ul").on("mouseenter", function () {
      //     clearInterval(time);
      //    // console.log(1);
      // }).on("mouseleave", function () {
      //     time = setInterval(t, 1000);
      //     // console.log(2);
      // })
      var startx; //开始触摸的坐标
      var movex; //触摸过程中的坐标
      var old; //获取ul之前的marginleft
      that
        .$(".img-ul")
        .on("touchstart", e => {
          //console.log($(".img-ul").css("marginLeft"));
          old = parseInt(that.$(".img-ul").css("marginLeft")); //在每次刚触摸时获取之前的marginleft，在触摸的过程中使用
          //要使图片紧接着之前的marginleft移动
          clearInterval(time);
          startx = e.originalEvent.targetTouches[0].pageX;
        })
        .on("touchmove", e => {
          movex = e.originalEvent.targetTouches[0].pageX;
          //console.log($(window).width()/2-10)

          if (movex - startx < 0) {
            //向右滑
            //console.log(count);
            if (count >= that.$(".img-li").length - 1) {
              //这个判断是当时第四张图片时 count就++成5（在end里面）再滑最后最后一张图也就是第五张的时候，让ul marginleft等于0，count也等于0
              // console.log(-that.$(window).width()*($(".img-li").length-1));
              that.$(".img-ul").animate(
                {
                  marginLeft: -that.$(window).width() * 0
                },
                1,
                function() {
                  count = 0;
                  //console.log("重置");
                }
              );
            } else {
              if (count == 0) {
                //针对上面的if  在移动最后一张图片时在move这个过程中进行完上面的if代码  立即进行这个if  .在移动时设置marginleft，这里写判断的原因是：当ul的marginleft=0时，它的移动距离就不能再加减old，而是手移动多少他就移动多少
                // console.log("重置0");
                that.$(".img-ul").css({
                  marginLeft: -Math.abs(movex - startx)
                });
              } else {
                that.$(".img-ul").css({
                  marginLeft: -Math.abs(movex - startx) + old
                });
              }
            }
          }
          // if (movex - startx < 0) {
          //     //console.log(Math.abs(movex-startx));
          //     $(".img-ul").css({
          //         marginLeft: -Math.abs(movex - startx) + old
          //     })
          // }
          else if (movex - startx > 0) {
            //向左滑
            //count--;

            if (count <= 0) {
              //左滑到第0个左边就在没有图片了，再滑就是空白的，所以这里就有了判断
              //console.log(-$(window).width() * ($(".img-li").length - 1));
              that.$(".img-ul").animate(
                {
                  //当滑的是第0个的时候   将ul的最后一张图片放在第一张图片的位置
                  marginLeft:
                    -that.$(window).width() * (that.$(".img-li").length - 1)
                },
                1,
                function() {
                  //放完之后再jiangcount的值变成最后一张图片的值   因为end里面刚进去就是count--所以这里的值就是5
                  count = that.$(".img-li").length - 1;
                }
              );

              //$(".img-ul")
            } else {
              //这里的判断出现的原因是：紧接着上面的if  在这个move执行的过程中  当count== $(".img-li").length - 1时
              //它的移动距离就和其他的不一样了，不能再加减old了，因为ul的marginleft发生了变化，不是触摸开始时获取的old了
              if (count == that.$(".img-li").length - 1) {
                that.$(".img-ul").css({
                  marginLeft:
                    -that.$(window).width() * (that.$(".img-li").length - 1) +
                    Math.abs(movex - startx)
                });
              } else {
                that.$(".img-ul").css({
                  marginLeft: Math.abs(movex - startx) + old
                });
              }
            }
          }
        })
        .on("touchend", function() {
          if (movex - startx < 0) {
            if (Math.abs(movex - startx) >= that.$(window).width() / 2 - 10) {
              that.$(".btn").removeClass("bgcolor");

              if (count == that.$(".img-li").length-2) {
                //这里处理了一个bug   就是如果没有这段代码count=5时还会进行下面的count++，count就会等于六，而六是没有图片的，就会有空白，动画不流畅

                t(); //为啥这里要这样处理这个bug呢？
                //因为在计时器函数中我们就处理了当count=5时！在这里count=4，就要处理计时器一进去就count++，
                //这里调用了一次计时器里面的函数而不是直接启动计时器，因为计时器刚开始有一个1000ms的延时，我为了动画更流畅，所有调用一次
              } else {
                count++;
                that.$(".img-ul").animate(
                  {
                    marginLeft: -that.$(window).width() * count
                  },
                  500
                );
                that
                  .$(".btn")
                  .eq(count)
                  .addClass("bgcolor");
              }
              // console.log(count);

              time = setInterval(t, 2000);
            } else {
              that.$(".img-ul").animate(
                {
                  marginLeft: -that.$(window).width() * count
                },
                500
              );
              time = setInterval(t, 2000);
            }
          } else if (movex - startx > 0) {
            //处理移动什么范围决定图片是否移动到下一个还是不动
            if (Math.abs(movex - startx) >= that.$(window).width() / 2 - 10) {
              count--; //count只一个全局变量  用count操纵点的颜色还有计时器函数正常进行  保证一系列动画流畅
              that.$(".btn").removeClass("bgcolor");
              that.$(".img-ul").animate(
                {
                  marginLeft: -that.$(window).width() * count
                },
                500
              ); //当移动结束时控制图片的左间距marginleft  确保它是显示完整的图片而不是半个图片
              that
                .$(".btn")
                .eq(count)
                .addClass("bgcolor");
              time = setInterval(t, 2000); //重新启动计时器   这个计时器刚开始相当于有100ms的延时   所以上面采用了一个anmite，使得touchend立即出发，图片就可以滑动到该在的位置，因为计时器函数一开始就是count++直接走下一个图片等等，所以，动画就这样流畅的走下去了
            } else {
              //滑动的距离如果小于规定的距离就让图片还保持在原来的图片原来的位置，这里给的是animate，count也不发生变化
              that.$(".img-ul").animate(
                {
                  marginLeft: -that.$(window).width() * count
                },
                500
              );
              time = setInterval(t, 2000); //同上animate结束后重新启动计时器
            }
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#n-lunbo {
  width: 100%;
  height: 6rem;
}
.img-block {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.img-ul {
  width: 600%;
  height: 100%;
  background: white;
}
.img-li {
  list-style: none;
  width: 16.66666667%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  float: left;
}
.img-li > img {
  width: 100%;
  height: 100%;
}
.btn-block {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2rem;
  text-align: center;
  line-height: 2rem;
  padding: 10px 5px;
  box-sizing: border-box;
  div {
      position: relative;
      left:0;
      top:-10px;
    display: inline-block;
    width: 6px;
    margin: 0 6px;
  }
}
 .btn {
      display: inline-block;
      width: 6px;
      height: 6px;
      border: 1px solid black;
      border-radius: 50%;
      background: white;
    }
.bgcolor {
  background: red;
}
</style>