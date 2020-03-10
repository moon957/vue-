<template>
  <div id="n-threeimg">
      <div  v-for="(items,index) in paihangbang!=undefined?paihangbang:qpaihang!=undefined?qpaihang:xpaihang!=undefined?xpaihang:apaihang!=undefined?apaihang:jxpaihang" :key="index">
      <div class="paihang-block">
          <div class="pai-top">
              <p>{{items.title}}</p>
          </div>
          <div class="pai-bottom">
              <div>
                  <span class="num">1</span>
                  <img :src="items.src1" alt=""/>
                  <span>{{items.name1}}<span class="text">({{items.address1}})</span></span>
              </div>
              <div>
                  <span  class="num">2</span>
                  <img :src="items.src2" alt=""/>
                   <span>{{items.name2}}<span>({{items.address1}})</span></span>
                  
              </div>
              <div>
                  <span  class="num">3</span>
                  <img :src="items.src2" alt=""/>
                <span>{{items.name3}}<span>({{items.address1}})</span></span>
              </div>
          </div>
      </div>
         <ntb v-if="qtb" :qtb="qtb.slice(index,index+1)"></ntb>
         <nqsb v-if="qtb" :qsb="qsb.slice(index*3,index*3+3)"></nqsb>
         <ntb v-if="xtb" :xtb="xtb.slice(index,index+1)"></ntb>
         <nqsb v-if="xtb" :xsb="xsb.slice(index*3,index*3+3)"></nqsb>
          <ntb v-if="atb" :atb="atb.slice(index,index+1)"></ntb>
         <nqsb v-if="atb" :asb="asb.slice(index*3,index*3+3)"></nqsb>
    </div>
  </div>
</template>

<script>
import Emit from '../../../../emit/emit.js'
import ntb from '../child/tb.vue'
import nqsb from '../child/sb.vue'
export default {
  name: "n-threeimg",
  components:{
      ntb,
      nqsb
  },
  props:{
      'paihangbang':Array,
      'qpaihang':Array,
      'qtb':Array,
      'qsb':Array,
      'xtb':Array,
      'xsb':Array,
      'xpaihang':Array,
      'apaihang':Array,
      'atb':Array,
      'asb':Array,
      'jxpaihang':Array
  },
  mounted(){
     
      var that=this;
      Emit.$on("send",function(res){
        that.$nextTick(function(){
          //console.log(res);
          //that.paihangbang=res;
      })
      })
     
  },
  data () {
    return {
      //paihangbang:[]
    }
  }
}
</script>

<style lang="scss" scoped>
#n-threeimg{
    width: 100%;
    .paihang-block{
        width: 100%;
        height: 10rem;
        background: white;
        display: flex;
        flex-direction: column;
        padding:1rem;
        box-sizing: border-box;
        .pai-top{
            flex: 1;
            p{
                font-size: 18px;
            }
        }
        .pai-bottom{
            flex: 3;
            display: flex;
            flex-direction: row;
            div{
                position: relative;
                flex: 1;
                padding:0 5px;
                box-sizing: border-box;
                img{
                
                width: 100%;
                height: 60%;
                }
                .num{
                    position: absolute;
                    left: 5px;
                    top: 0;
                    z-index: 10;
                    font-size: 10px;
                    padding:0rem .4rem;
                    box-sizing: border-box;
                    background: rgb(196, 149, 61);
                    color: white;
                }
                span{
                    font-size: 12px;
                    display:inline-block;
                    vertical-align: middle;
                    line-height: 25px;
                    .text{
                    width: 3rem;
                    height: 25px;
                     line-height: 25px;
                   font-size: 12px;
                   display: inline-block;
                   text-overflow: ellipsis;
                   white-space: nowrap;
                   overflow: hidden;
                   vertical-align: middle;
                }
                }
                
            }
            
        }
    }
}
</style>