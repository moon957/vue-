<template>
  <div id="n-rtopblock">
        <nrheader  ref="white"  :name="name"></nrheader>
      <ncailist :cailist="cailist"></ncailist>
      <nsouandtit :name="name"></nsouandtit>
      <ngongju :gongju="gongju"></ngongju>
  </div>
</template>

<script>
import nrheader from '../child/gheader.vue'
import ncailist from '../child/cailist.vue'
import nsouandtit from '../child/souandtitle.vue'
import ngongju from '../child/gongju.vue'
export default {
  name: 'n-rtopblock',
  props:{
      'cailist':Array,
      'name':String,
      'gongju':Array
  },
  components:{
    nrheader,
    ncailist,
    nsouandtit,
    ngongju
  },
  mounted(){
      this.headerheight=this.$refs.white.headerheight
  },
  data () {
    return {
     headerheight:0
    }
  },
  methods:{
      white(){
          this.$refs.white.white();
      }
     
  }
}
</script>

<style lang="scss" scoped>
</style>