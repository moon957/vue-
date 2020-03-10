<template>
  <div id="n-shangdapian">
    <nsmovie :moviedata="moviedata"></nsmovie>
    <ntb :stb="tb" :snew="snew"></ntb>
    
     
    
  </div>
</template>

<script>
import Emit from '../../../emit/emit.js'
import nsmovie from '../news/child/nsmovie.vue'
import ntb from '../news/child/tb.vue'

export default {
  name: 'n-shangdapian',
  components:{
    nsmovie,
    ntb,
   
  },
  mounted() {
   
    let that = this;
    Emit.$on("sendtmsg2", function(res) {
      //console.log(res[0].dianlist);
      that.$nextTick(function() {
        //console.log(res[0].dianlist[0].shi);
        that.moviedata = res[0].dianlist[0].moviedata;
       that.tb=res[0].dianlist[0].stb;
       that.snew=res[0].dianlist[0].snews;
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
      moviedata:[],
      tb:[],
      snew:[]
    }
  }
}
</script>

<style lang="scss" scoped>
#n-shangdapian{
    margin: 6rem 0 0 0;
}
</style>