<template>
  <div id="n-middleheader">
      <div class="middleheader-block">
          <div v-for="(items,index) in middleheader" :key="index"><span>{{items.name}}</span></div>
          <!-- <div><span>附近</span></div>
          <div><span>综合榜</span></div>
          <div><span>筛选</span></div> -->
      </div>
   
  </div>
</template>

<script>
export default {
  name: 'n-middleheader',
  props:{
    'middleheader':Array
  },
  mounted(){
    this.offsettop=this.$("#n-middleheader").offset().top;
    
  },
  data () {
    return {
      offsettop:0
    }
  },
  methods:{
    fixed(){
     this.$("#n-middleheader").css({
       position:"fixed",
       left:0,
       top:"3rem",
        marginTop: 0
     })
    },
    quxiaofix(){
        this.$("#n-middleheader").css({
       position:"relative",
       left:0,
       top:0,
       marginTop: ".5rem"
     })
    }
  }
}
</script>

<style lang="scss" scoped>
#n-middleheader{
   position: relative;
   left: 0;
   top: 0;
    width: 100%;
    //border-top: .5rem solid transparent;
    margin-top: .5rem;
    .middleheader-block{
        width: 100%;
        height: 3rem;
        background: white;
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid rgb(250, 250, 250);
        box-sizing: border-box;
        div{
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            span{
                position: relative;
                color: gray;
                font-size: 12px;
                
            }
           span::after{
                    content: "";
                    position: absolute;
                    right: -11px;
                    top: 6px;
                    border: 3px solid;
                    border-color:black transparent transparent  transparent ;
                    //width: 1rem;
                    
                } 
        }
    }
}
</style>