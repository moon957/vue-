<template>
  <div id="n-aimeishi">
      <div  v-for="(items,index) in shilist" :key="index">
      <div class="tb-block">
          <div class="top-block">
              <p>
                  #{{items.name}}#
              </p>
          </div>
          <div class="middle-block">
              <p>{{items.shititle}}</p>
              <span>{{items.shimiao}}</span>
              <img class="bofang" src="public/icon/bofang.png" alt=""/>
              <img class="datu" :src="items.src" alt=""/>
          </div>
          <div class="bottom-block">
              <span class="liangbian">{{items.type}}</span>
              <span  class="liangbian"><span>{{items.liulan}}</span>浏览</span>
          </div>
      </div>
      <nthreeimg :paihangbang="paihangbang.slice(index,index+1)"></nthreeimg>
      <ntb :tb="tb.slice(index,index+1)"></ntb>
      <nsb :sb="sb.slice(index*3,index*3+3)"></nsb>
      </div>
  </div>
</template>

<script>
import Emit from "../../../emit/emit.js";
import nthreeimg from '../news/child/threeimg.vue'
import ntb from '../news/child/tb.vue'
import nsb from '../news/child/sb.vue'
export default {
  name: 'n-aimeishi',
  components:{
      nthreeimg,
      ntb,
      nsb
  },
  props:{
      'new':Array,
      
  },
mounted() {
   
    let that = this;
    Emit.$on("sendtmsg1", function(res) {
      //console.log(res[0].dianlist);
      that.$nextTick(function() {
        //console.log(res[0].dianlist[0].shi);
        that.shilist = res[0].dianlist[0].shi;
        that.paihangbang=res[0].dianlist[0].paihang;
        that.tb=res[0].dianlist[0].tb;
        that.sb=res[0].dianlist[0].sb;
        //console.log(that.paihangbang.slice(0,1))
        //  setTimeout(function(){
        //     Emit.$emit("send",that.paihangbang)
        //  },0.1)
        //console.log(that.paihangbang);
      });
    });
   
  },
  data () {
    return {
      shilist:[],
      paihangbang:[],
      tb:[],
      sb:[]
    }
  }
}
</script>

<style lang="scss" scoped>
#n-aimeishi{
    width: 100%;
    margin: 6rem 0 0 0;
    .tb-block{
        height: 15rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        background: white;
        padding:1rem;
        box-sizing: border-box;
    border-bottom:1px solid rgb(245, 244, 244); 
        .top-block{
            flex: 1;
            p{
                width: 100%;
                height: 100%;
                 word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
            }
        }
        .middle-block{
            position: relative;
            flex: 5;
            overflow: hidden;
            .datu{
                width: 100%;
                height: 100%;
            }
            .bofang{
                width: 3rem;
                height: 3rem;
                position: absolute;
                left: 50%;
                top: 50%;
                margin-left: -1.5rem;
            }
            p{
                position: absolute;
                left: 50%;
                top: 1rem;
                width: 14rem;
                margin-left: -7rem;
                font-size: 23px;
                color: white;
                text-align: center;
            }
            span{
                 position: absolute;
                left: 50%;
                top: 3rem;
                width: 14rem;
                display: block;
                margin-left: -7rem;
                text-align: center;
                font-size: 15px;
                color: white;
            }
        }
        .bottom-block{
            flex: 1;
            display: flex;
            justify-content:space-between;
            span{
                font-size: 12px;
                color: gray;
                margin: 3px 0 0 0;
            }
        }
    }
}
</style>