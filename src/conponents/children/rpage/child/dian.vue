<template>
  <div id="n-rmdian">
    <div>
      <div class="dianmenu-block" v-for="(items,index) in dianlist" :key="index">
          <div class="dian-left">
            <img :src="items.src" alt=""/>
          </div>
          
          <div class="dian-right">
            <div class="right-top">
              <span>{{items.name}}<span v-if="items.nameaddress">({{items.nameaddress}})</span></span>
             
            </div>
           <div class="dian-second">
              <div class="xingxing">
                   <span><img v-for="(items,index) in Math.floor(parseInt(items.pingfen)/2)" :key="index" src="public/icon/huang.png" alt=""/></span>
                    <span><img v-if="parseInt(items.pingfen)/2!=0" :key="index" src="public/icon/banxing.png" alt=""/></span>
                    <span><img v-for="(items,index) in Math.floor(5-(parseInt(items.pingfen)/2))" :key="index" src="public/icon/xing.png" alt=""/></span>
              <!-- <img src="public/icon/huang.png" alt=""/>
                <img src="public/icon/banxing.png" alt=""/>
              <img src="public/icon/xing.png" alt=""/>
              -->
         
             
            </div>
            <span>￥<span>22</span>/人</span>
            <span class="address">电子城</span>
           </div>
           <div class="dian-third">
             <span>团</span>
             <span>35.8购苏福记川菜50元代金券</span>
           </div>
           <div class="type">
            <span>西安吃美味糖醋里脊的好去处</span>
          </div>
          </div>
          
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'n-rmdian',
  props:{
      'dianlist':Array
  },
   mounted() {
    console.log(this.dianlist);

  },
  data () {
    return {
     
    
    }
  },
  methods:{
   margintop(){
     
     this.$("#n-rmdian").addClass("margintop");
   },
   quxiaomargintop(){
      this.$("#n-rmdian").removeClass("margintop");
   }
  }
}
</script>

<style lang="scss" scoped>
.margintop{
  margin: 3.5rem 0 0 0;
}
#n-rmdian{
    width: 100%;
   
    .dianmenu-block{
      
        width: 100%;
        height: 8rem;
        background: white;
        display: flex;
        flex-direction: row;
        padding:10px;
       border-bottom: 1px solid rgb(241, 240, 240);
        box-sizing: border-box;
        .dian-left{
          flex: 2;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .dian-right{
          flex: 4;
          padding:0 0 0 6px;
          box-sizing: border-box;
          .right-top{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            span:nth-child(1){
              font-size: 17px;
              font-weight: 545;
            }
            span:nth-child(2){
              color: gray;
              font-size: 12px;
            }
          }
          .dian-second{
            padding:5px 0;
            .xingxing{
            display: inline-block;
            font-size: 0;
            img{
              width: 10px;
              height: 10px;
            }
          }
          span{
            color: rgb(134, 131, 131);
            font-size: 12px;
          }
          .address{
            margin: 0 0 0 10px;
          }
          }
          .dian-third{
            span:nth-child(1){
              padding:0 .2rem;
              background: black;
              color: white;
              font-size: 10px;
              vertical-align: middle;
            }
            span:nth-child(2){
              color: gray;
              font-size: 12px;
              margin: 0 0 0 10px;
            }
          }
           .type{
             padding:10px 0;
            span{
              padding:0 .1rem;
              color: rgb(155, 126, 72);
              background: rgb(233, 230, 225);
              font-size: 12px;
              border-radius:4px; 
            }
          }
        }
       
    }
}
</style>