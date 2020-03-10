<template>
  <div id="n-dianmenu">
    <div>
      <div class="dianmenu-block"  v-for="(items,index) in dianjialist" :key="index">
          <div class="dian-left">
            <img :src="items.src" alt=""/>
          </div>
          
          <div class="dian-right">
            <div class="right-top">
              <span>{{items.name}}<span>({{items.address}})</span></span>
              <span>{{items.juli}}</span>
            </div>
           <div class="dian-second">
              <div class="xingxing">
              <img src="public/icon/huang.png" alt=""/>
              <img src="public/icon/huang.png" alt=""/>
              <img src="public/icon/huang.png" alt=""/>
              <img src="public/icon/huang.png" alt=""/>
              <img src="public/icon/huang.png" alt=""/>
             
            </div>
            <span>￥<span>{{items.jiage}}</span>/人</span>
            <span class="address">{{items.juaddress}}</span>
           </div>
           <div class="dian-third">
             <span>团</span>
             <span>{{items.active}}</span>
           </div>
           <div class="type">
            <span>{{items.type}}</span>
          </div>
          </div>
          
      </div>
    </div>
  </div>
</template>

<script>
import Emit from '../../emit/emit.js'
export default {
  name: 'n-dianmenu',

   mounted() {
    //console.log(this.btnlist);
    let that = this;
    Emit.$on("sendmsg", function(res) {
      if(JSON.parse(JSON.stringify(res)).length==1){
        that.$("#n-dianmenu").addClass("margintop")
      }else{
         that.$("#n-dianmenu").removeClass("margintop");
      }
      //console.log(res[0].dianlist);
      //that.$nextTick(function() {
        that.dianlist = res;
        console.log(that.dianlist);
        that.dianjialist=res[0].dianlist;
      //});
    });
    Emit.$on("senddianmsg", function(res) {
      //console.log(res);
      // that.$nextTick(function() {
         that.dianjialist=res;
        
      // });
    });
  },
  data () {
    return {
      dianlist:[],
      dianjialist:[],
    
    }
  },
  methods:{
    margin(){
     this.$("#n-dianmenu").addClass("margintop")
    }
  }
}
</script>

<style lang="scss" scoped>
.margintop{
  margin: 6rem 0 0 0 !important;
}
#n-dianmenu{
    width: 100%;
    margin: 9rem 0 0 0;
    .dianmenu-block{
      
        width: 100%;
        height: 8rem;
        background: white;
        display: flex;
        flex-direction: row;
        padding:10px;
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