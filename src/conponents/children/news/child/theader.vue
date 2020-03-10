<template>
  <div id="n-flistmenu">
    <div class="menu-block">
      <ul class="menu-ul">
        <li
          @click="liline(index)"
          :class='index==0?"menu-li fontblack":"menu-li"'
          v-for="(items,index) in menubtn"
          :key="index"
        >
          <span class="blackline">{{items.name}}<i :class="index==0?'block':''"></i></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Emit from "../../../../emit/emit.js";
import Axios from 'axios'
export default {
  name: "n-flistmenu",
  props: {
    menul: Array
  },
  mounted() {
    var that=this;
      Axios.post("/news").then((res)=>{
      this.menubtn=res.data.result.menulist;
     // this.menubtn = this.menul;
     
      
          var that=this;
        setTimeout(function (){
            Emit.$emit("sendtmsg0", that.menubtn[0].child[0].btnmenu);
            that.$(".menu-li")
        .eq(0)
       
        .find("i")
        .css({
          display: "block"
        });
        },.1);
      
    })
   
     
  },
  data() {
    return {
      menubtn:[],
      count:0
    };
  },
  methods: {
    liline(index) {
      var that=this;
      this.count=index;
      //console.log("附近");
      this.$(".menu-li")
        
        .find("i")
        .css({
          display: "none"
        });
      this.$(".menu-li")
        .eq(index)
       
        .find("i")
        .css({
          display: "block"
        });
      //console.log(this.menubtn[index].child[0].btnmenu[0].dianlist);
      // console.log(this.$(".menu-li").eq(index).find("span").text())
      
     
        
        
       setTimeout(function(){
          Emit.$emit("senddata", that.count);
         Emit.$emit("sendtmsg"+index, that.menubtn[index].child[0].btnmenu);
         
       },1)
      
    }
  }
};
</script>

<style lang="scss" scoped>
.block{
  display: block;
}
#n-flistmenu {
  width: 100%;
  .menu-block {
    position: fixed;
    left: 0;
    top: 3rem;
    z-index: 100;
    width: 100%;
    height: 3rem;
    background: white;

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid rgb(241, 241, 241);
      box-sizing: border-box;
      li {
        flex: 1;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;

        span {
          position: relative;
          font-size: 13px;
          height: 100%;
          display: flex;
          align-items: center;

          i {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;

            border-bottom: 2px solid black;
            display: none;
          }
        }
      }
    }
  }
}
</style>