<template>
  <div id="n-tb">
      <div  v-for="(items,index) in this.new!=undefined?this.new:this.tb!=undefined?this.tb:this.stb!=undefined?this.stb:this.qtb!=undefined?this.qtb:this.xtb!=undefined?this.xtb:this.atb" :key="index">
      <div class="tb-block">
          <div class="top-block">
              <p>
                  {{items.name}}
              </p>
          </div>
          <div class="middle-block">
              <img :src="items.src" alt=""/>
          </div>
          <div class="bottom-block">
              <span class="liangbian">{{items.type}}</span>
              <span  class="liangbian"><span>{{items.liulan}}</span>浏览</span>
          </div>
      </div>
    <nsnewsb v-if="stb!=undefined" :snew="snew.slice(index*3,index*3+3)"></nsnewsb>
    </div>
  </div>
</template>

<script>
import nsnewsb from '../child/snewsb.vue'
export default {
  name: 'n-tb',
  components:{
       nsnewsb
  },
  props:{
      'new':Array,
      'tb':Array,
      'stb':Array,
      'snew':Array,
      'qtb':Array,
      'xtb':Array,
      'atb':Array
  },
  mounted(){
      //console.log(this.snew);
    // console.log(this.qtb)
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
#n-tb{
    width: 100%;
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
            flex: 2;
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
            img{
                width: 100%;
                height: 100%;
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