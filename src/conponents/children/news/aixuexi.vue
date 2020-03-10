<template>
  <div id="n-aixuexi">
      <nthreeimg :apaihang="paihangbang" :atb="atb" :asb="asb"></nthreeimg>
  
  </div>
</template>

<script>
import Emit from '../../../emit/emit.js'
import nthreeimg from '../news/child/threeimg.vue'

export default {
  name: 'n-aixuexi',
  components:{
      nthreeimg,
      
  },
   mounted() {
   
    let that = this;
    Emit.$on("sendtmsg5", function(res) {
      //console.log(res[0].dianlist);
      that.$nextTick(function() {
        //console.log(res[0].dianlist[0].shi);
        that.paihangbang = res[0].dianlist[0].paihang;
        that.atb=res[0].dianlist[0].atb;
         that.asb=res[0].dianlist[0].asb;
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
     atb:[],
     asb:[]
    }
  }
}
</script>

<style lang="scss" scoped>
#n-aixuexi{
    margin: 6rem 0 0 0;
}
</style>