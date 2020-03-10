<template>
  <div id="n-news">
    <nheader :headertitle="title"></nheader>
    <ntlistmenu :menul="menulist"></ntlistmenu>
    <nnewst  v-show="iscunzai==0"></nnewst>
    <naimeishi  v-show="iscunzai==1"></naimeishi>
    <nshangdapian   v-show="iscunzai==2"></nshangdapian>
    <nquxiuxian v-show="iscunzai==3"></nquxiuxian>
    <nxiangqinzi v-show="iscunzai==4"></nxiangqinzi>
    <naixuexi v-show="iscunzai==5"></naixuexi>
    我是新闻
    
  </div>
</template>

<script>
import nfooter from '../children/footer.vue'
import nheader from '../children/gheader.vue'
import ntlistmenu from '../children/news/child/theader.vue'
import nnewst from '../children/news/newstmo.vue'
import naimeishi from '../children/news/aimeishi.vue'
import nshangdapian from '../children/news/shangdapian.vue'
import nquxiuxian from '../children/news/quxiuxian.vue'
import nxiangqinzi from '../children/news/xiangqinzi.vue'
import naixuexi from '../children/news/aixuexi.vue'


import Emit from '../../emit/emit.js'

export default {
  name: 'n-news',
  components:{
    nfooter,
    nheader,
    ntlistmenu,
   nnewst,
   naimeishi,
   nshangdapian,
  nquxiuxian,
  nxiangqinzi,
  naixuexi
  },
  mounted(){
    var that=this;
    
     Emit.$on("senddata",function(count){
       that.$nextTick(function(){
      //console.log(that.$refs.listmenu.count);
      that.iscunzai=count;
      //console.log(that.iscunzai)
    })
    })
   
  },
  data () {
    return {
      iscunzai:0,
     title:"头条",
     menulist:[]
    }
  }
}
</script>

<style lang="scss">
#n-news{
  margin: 0 0 3.5rem 0;
}
</style>