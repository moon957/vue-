<template>
  <div id="n-fbtnmenu">
    <div class="btnmenu-block" v-if="JSON.parse(JSON.stringify(btnmenu)).length!=1">
      <div class="scrollx">
        <ul class="btnmenu-ul">
          <li v-for="(items,index) in btnmenu" :key="index">
            <span @click="fontblack(index)" :class='index==0?"black btntext":"btntext"'>{{items.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Emit from "../../emit/emit.js";
export default {
  name: "app",
  // props:{
  //   'btnmenu':Array,
  //   'menulist':Array
  // },
  mounted() {
    //console.log(this.btnlist);
    let that = this;
    Emit.$on("sendmsg", function(res) {
     // console.log(res);
     // that.$nextTick(function() {
        //console.log("哈哈哈哈")
        that.btnmenu = res;
        console.log(that.btnmenu);
        that.$(".btntext").removeClass("black");
        that.$(".btntext").eq(0).addClass("black");
        that.$(".scrollx").scrollLeft(0)
        //that.$(".btnmenu-ul").offset().left=0
     // });
    });
  },
  data() {
    return {
      btnmenu: []
    };
  },
  methods: {
    
    fontblack(index) {
      var that=this;
     // console.log(this.btnmenu[index].dianlist);
      this.$(".btntext").removeClass("black");
      this.$(".btntext").eq(index).addClass("black");
       setTimeout(function (){
            Emit.$emit("senddianmsg",that.btnmenu[index].dianlist);
             
        },1);
    }
  }
};
</script>

<style lang="scss" scoped>
.black {
  color: black !important;
  font-weight: bold;
}

#n-fbtnmenu {
  width: 100%;
  position: fixed;
  left: 0;
  top: 6rem;
  .btnmenu-block {
    position: relative;
    width: 100%;
    height: 3rem;
    background: white;
    border-bottom: 1px solid rgb(238, 237, 237);
    overflow: hidden;
    //overflow-x: scroll;
    div {
      width: 100%;
      height: 111%;
      overflow-x: scroll;
      ul {
        //position: relative;
        width: 700px;

        display: flex;
        flex-direction: row;

        height: 100%;

        flex-wrap: nowrap;
        //overflow-x: scroll;

        li {
          //margin: 0 1rem;
          padding: 0 0.7rem;
          box-sizing: border-box;
          list-style: none;
          display: flex;
          align-items: center;
          justify-content: center;
          span {
            display: inline-block;
            //flex-wrap: nowrap;
            min-width: 2rem;
            text-align: center;
            height: 1rem;
            font-size: 12px;
            color: gray;
            padding: 0.1rem 0.5rem;
            // box-sizing: border-box;
            background: rgb(238, 236, 236);
            //overflow: hidden;
          }
        }
      }
    }
  }
}
</style>