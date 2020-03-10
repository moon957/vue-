<template>
  <div id="n-shouye">
     <nsheader ref="header" :chuxian="chuxian"></nsheader>
     <nmenu></nmenu>
     <nfenlei></nfenlei>
     <nlunbo></nlunbo>
     <nlike></nlike>
     <ndianlist></ndianlist>
     <!-- <nmovie></nmovie> -->
     <!-- <nthreeimg></nthreeimg> -->
     <nsousuo ref="sousuo"></nsousuo>
   
   
  </div>
</template>

<script>
import nfooter from '../children/footer.vue'
import nsheader from '../children/sheader.vue'
import nmenu from '../children/ulmenu.vue'
import nfenlei from '../children/fenlei.vue'
import nlunbo from '../children/lunbo.vue'
import nlike from '../children/like.vue'
import nthreeimg from '../children/threeimgdian.vue'
import ndianlist from '../children/dianlist.vue'
import nmovie from '../children/movie.vue'
import nsousuo from '../mainrouter/sousuo.vue'
import Axios from 'axios'
export default {
  name: 'n-shouye',
  components:{
    nfooter,
    nsheader,
    nmenu,
    nfenlei,
    nlunbo,
    nlike,
    ndianlist,
    nmovie,
    nthreeimg,
    nsousuo
  },
  mounted(){
  
     var that=this;
     var movey;
     var starty;
    this.$("#n-shouye").on("touchstart",function(e){
      //console.log(e.originalEvent.targetTouches[0].pageY);
      starty = e.originalEvent.targetTouches[0].pageY;
    }).on("touchmove",function (e){
      movey = e.originalEvent.targetTouches[0].pageY;
      if(Math.abs(movey-starty)>2){
        //console.log(e.originalEvent.targetTouches[0].pageY);
        that.$refs.header.scrolldata()
      }
      
      
    })
   
  },
  data () {
    return {
      
    }
  },
  methods:{
    chuxian(){
       this.$refs.sousuo.chuxian()
    }
  }
}
</script>

<style lang="scss">
#n-shouye{
  width: 100%;
  height:auto;
  background: hsl(0, 8%, 95%);
  margin: 0 0 3.5rem 0;
}
</style>
