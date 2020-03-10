<template>
  <div id="n-fujin">
    <nheader :headertitle="title"></nheader>
    <nflistmenu ></nflistmenu>
    <nfbtnmenu  :btnmenu="btnlist"  :menulist="menulist"></nfbtnmenu>
    <ndianmenu></ndianmenu>
我是附近
  </div>
</template>

<script>
import nfooter from "../children/footer.vue";
import nheader from "../children/gheader.vue";
import nflistmenu from "../children/flistmenu.vue";
import nfbtnmenu from "../children/fbtnmenu.vue";
import ndianmenu from "../children/dianmenu.vue";
import Axios from 'axios'
export default {
  name: "n-fujin",
  components: {
    nfooter,
    nheader,
    nflistmenu,
    nfbtnmenu,
    ndianmenu
  },
  mounted(){
   
  },
  data() {
    return {
      title: "附近",
     menulist:[],
     btnlist:[]
    };
  },
  methods: {
   
  }
};
</script>

<style lang="scss">
#n-fujin {
  width: 100%;
  height: 1000px;
}
</style>