<template>
  <div id="n-xiangqinzi">
      <nthreeimg :xpaihang="paihangbang" :xtb="xtb" :xsb="xsb"></nthreeimg>
  
  </div>
</template>

<script>
import Emit from '../../../emit/emit.js'
import nthreeimg from '../news/child/threeimg.vue'

export default {
  name: 'n-quxiuxian',
  components:{
      nthreeimg,
      
  },
   mounted() {
   
    let that = this;
    Emit.$on("sendtmsg4", function(res) {
      //console.log(res[0].dianlist);
      that.$nextTick(function() {
        //console.log(res[0].dianlist[0].shi);
        that.paihangbang = res[0].dianlist[0].paihang;
        that.xtb=res[0].dianlist[0].xtb;
         that.xsb=res[0].dianlist[0].xsb;
        //console.log(that.paihangbang)
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
     paihangbang:[],
     xtb:[],
     xsb:[]
    }
  }
}
</script>

<style lang="scss" scoped>
#n-xiangqinzi{
    margin: 6rem 0 0 0;
}
</style>