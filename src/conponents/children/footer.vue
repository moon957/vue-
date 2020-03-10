<template>
  <div id="n-footer">
    <div class="n-footer-block">
      <router-link :to="items.action" v-for="(items,index) in footerdata" :key="index">
        <div :class="items.isck?'fontcolor ing':'ing'" @click="color(index)">
          <img :src="items.isck?items.ckimg:items.img" alt />
          <span>{{items.title}}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "n-footer",
  mounted() {
    var that = this;
    var old;
    
    this.$(window).on("scroll", function() {
      //console.log(that.$(window).scrollTop());

      if (old != that.$(window).scrollTop()) {
        old = that.$(window).scrollTop();
        // that.$("#n-footer").hide(1000);
      }
    });
    //that.$("#n-footer").hide(100);
  },
  data() {
    return {
      footerdata: [
        {
          img: "public/Footer/fang.png",
          ckimg: "public/Footer/fang1.png",
          title: "首页",
          isck: true,
          action: "/"
        },
        {
          img: "public/Footer/dingwei.png",
          ckimg: "public/Footer/dingwei1.png",
          title: "附近",
          isck: false,
          action: "/fujin"
        },
        {
          img: "public/Footer/shipin.png",
          ckimg: "public/Footer/shipin1.png",
          title: "视频",
          isck: false,
          action: "/shipin"
        },
        {
          img: "public/Footer/huo.png",
          ckimg: "public/Footer/huo1.png",
          title: "头条",
          isck: false,
          action: "/news"
        },
        {
          img: "public/Footer/fang.png",
          ckimg: "public/Footer/fang1.png",
          title: "我的",
          isck: false,
          action: "/my"
        }
      ]
    };
  },
  methods: {
    color(index) {
      //console.log(this.$refs.footer_small_block[index]);
      this.footerdata.map((val, index) => {
        // console.log(val);
        val.isck = false;
      });
      this.footerdata[index].isck = true;
      this.$(window).scrollTop(0);
    },
    runbottom: function() {
      
      for (var i = 0; i < this.$(".ing").length; i++) {
        if (
          this.$(".ing")
            .eq(i)
            .hasClass("fontcolor") == true
        ) {
          //console.log(i);
          if (i != 1 && i != 3&&i!=4) {
            this.$("#n-footer").stop().animate(
              {
                bottom: "-3.5rem"
              },
              300
            );
          }
        }
        // console.log(this.$(".ing").eq(i).hasClass("fontcolor"))
      }

      //console.log(this.$("#n-footer"));
    },
    back:function(){
      
      for (var i = 0; i < this.$(".ing").length; i++) {
        if (
          this.$(".ing")
            .eq(i)
            .hasClass("fontcolor") == true
        ) {
          //console.log(i);
          if (i != 1 && i != 3&&i!=4) {
            this.$("#n-footer").stop().animate(
              {
                bottom: 0
              },
              500
            );
          }
        }
       
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.fontcolor {
  color: rgb(143, 34, 194);
}
#n-footer {
  position: fixed;
  left: 0;
  bottom: 0rem;
  z-index: 1000;
  width: 100%;
  height: 3.5rem;
  background: white;
  .n-footer-block {
    display: flex;
    height: 100%;
    flex-direction: row;
    a {
      display: block;
      text-decoration: none;
      flex: 1;
      display: flex;
      justify-content: center;

      color: grey;
    }
    div {
      padding: 3px 0 0;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 25px;
        height: 25px;
      }
      span {
        margin-top: 8px;
        font-size: 13px;
      }
    }
  }
}
</style>