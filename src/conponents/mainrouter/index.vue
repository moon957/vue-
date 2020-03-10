<template>
  <div id="n-index">
   
    <router-view></router-view>
    <nfooter ref="footer"></nfooter>
  </div>
</template>

<script>
import nfooter from '../children/footer.vue'
export default {
  name: 'app',
  components:{
    nfooter
  },
  data () {
    return {
      
    }
  },
  mounted(){
    //綁定事件
    let that=this;
    var startx;
    var movex;
    this.$("#n-index").on("touchstart",function(e){
      
      startx=e.originalEvent.targetTouches[0].pageY;
    }).on("touchmove",function (e){
      movex=e.originalEvent.targetTouches[0].pageY;
      if(Math.abs(movex-startx)>5&&movex<startx){
        
        that.$refs.footer.runbottom();
      } 
    }).on("touchend",function (){
      //console.log("back");
      that.$refs.footer.back()
     
      
    });
  }
}
</script>

<style lang="scss">
#n-index{
  background:hsl(0, 8%, 95%);
}
</style>
