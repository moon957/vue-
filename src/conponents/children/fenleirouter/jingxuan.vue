<template>
  <div id="n-jingxuan">
     <nrheader ref="jheader"></nrheader>
     <nrmovie></nrmovie>
     <nquanwei :quanwei="quanweilist"></nquanwei>
     <njtese></njtese>
     <njingxuan></njingxuan>
     <njnews :paihang="paihang" :jnews="jnews"></njnews>
  </div>
</template>

<script>
import nrheader from './child/header.vue'
import nrmovie from '../fenleirouter/child/lunbo.vue'
import nquanwei from '../fenleirouter/child/quanwei.vue'
import njtese from '../fenleirouter/child/tese.vue'
import njingxuan from '../fenleirouter/child/jingxuanzhuanti.vue'
import njnews from './child/jnew.vue'
import Axios from 'axios'
export default {
  name: 'n-jingxuan',
  components:{
      nrheader,
      nrmovie,
      nquanwei,
      njtese,
      njingxuan,
      njnews
  },
  beforeMount(){
    var that=this;
     Axios.post("/jingxuan").then((res)=>{
     that.$nextTick(function(){
        that.jnews=res.data.result.jnews;
      that.paihang=res.data.result.paihang;
      that.quanweilist=res.data.result.quanweilist;
     })
      
    })
  },
  mounted(){
   
    this.whitebg();
  },
  data () {
    return {
    jnews:[],
    paihang:[],
    quanweilist:[],
   
    }
  },
  methods:{
    whitebg(){
      var that=this;
      this.$("#n-jingxuan").on("touchmove",function(){
        //console.log(that.$refs.jheader.headerheight);
         that.$refs.jheader.white();
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#n-jingxuan{
    width: 100%;
    height: 1000px;
}
</style>