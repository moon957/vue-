<template>
  <div id="n-rxiuxian">
     <nrtopblock :cailist="cailist" :name="name" ref="topblock" :gongju="gongju"></nrtopblock>
     
      <nmiddleheader ref="middleheader" :middleheader="middleheader"></nmiddleheader>
      <nrdian :dianlist="dianlist" ref="dian"></nrdian>
      <p>没有更多了</p>
  </div>
</template>

<script>
import nrtopblock from '../rpage/child/topblock.vue'
import nsxlunbo from '../rpage/child/shangxialunbo.vue'
import nmiddleheader from '../rpage/child/middleheader.vue'
import nrdian from '../rpage/child/dian.vue'
import Axios from 'axios'
export default {
  name: 'n-rmeishi',
  components:{
    nrtopblock,
    nsxlunbo,
    nmiddleheader,
    nrdian
  },
   
  data () {
    return {
     name:null,
   
      middleheader:[],
     dianlist:[],
     lunbo:[],
    gongju:[],
     cailist:[]
    }
  },
  mounted(){
    
     var that=this;
     
    //console.log(this.$(".n-mheader"))
    var starty;
    var movey;
    this.$("#n-rxiuxian").on("touchstart",function(e){
      starty=e.originalEvent.targetTouches[0].pageY;
    }).on("touchmove",function(e){
      movey=e.originalEvent.targetTouches[0].pageY;
      
       that.$refs.topblock.white();
       //that.$refs.middleheader.offsettop-that.$refs.white.headerheight
       if(parseInt(that.$(window).scrollTop())>=that.$refs.middleheader.offsettop-that.$refs.topblock.headerheight){
          that.$refs.middleheader.fixed();
          that.$refs.dian.margintop();
       }
       else{
          that.$refs.middleheader.quxiaofix();
          that.$refs.dian.quxiaomargintop();
       }
       
    })
    //setTimeout(function(){
    that.name=that.$route.query.name
     //console.log(that.name)
    //},0.1)
    Axios.post("/xiuxian").then((res)=>{
       this.middleheader=res.data.result.middleheader;
      this.dianlist=res.data.result.dianlist;
      this.lunbo=res.data.result.lunbo;
    })
    
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
#n-rxiuxian{
  width: 100%;

  p{
    text-align: center;
    font-size: 12px;
    color: gray;
    padding: 1rem 0;

  }
}
</style>