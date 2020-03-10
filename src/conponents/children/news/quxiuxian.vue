<template>
  <div id="n-quxiuxian">
      <nthreeimg :qpaihang="paihangbang" :qtb="qtb" :qsb="qsb"></nthreeimg>
  
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
    Emit.$on("sendtmsg3", function(res) {
      //console.log(res[0].dianlist);
      that.$nextTick(function() {
        //console.log(res[0].dianlist[0].shi);
        that.paihangbang = res[0].dianlist[0].paihang;
        that.qtb=res[0].dianlist[0].qtb;
         that.qsb=res[0].dianlist[0].qsb;
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
     qtb:[],
     qsb:[]
    }
  }
}
</script>

<style lang="scss" scoped>
#n-quxiuxian{
    margin: 6rem 0 0 0;
}
</style>