<template>
  <div id="n-threeimg" >
      <div class="parents"  v-for="(items,index) in threeimgdian" :key="index">
          <router-link  :to="{path:items.action,query:{name:items.name,address:items.address}}">
      <div class="threeimg-block" @click="senddian(index)">
          <div class="img-title">
              <p>{{items.name}}<span v-if='items.address'>({{items.address}})</span></p>
              <div class="img-text">
                  <span>{{items.juli}}</span>
                    <span v-if="items.jiage=='暂无价格'">{{items.jiage}}</span>
                <span class="money" v-if="items.jiage!='暂无价格'">￥<h4>{{items.jiage}}</h4>/人</span>
              </div>
          </div>
          <div class="img-block">
              <div><img :src="items.logosrc" alt=""/></div>
              <div><img :src="items.diansrc" alt=""/></div>
              <div><img :src="items.csrc" alt=""/></div>
          </div>
          <div class="img-type">
              <span>{{items.type}}</span>
          </div>

      </div>
      <!-- <ndianlist :datalist="dianlist.slice(index*4,(index+1)*4)"></ndianlist> -->
      </router-link>
      </div>
  </div>
</template>

<script>
import Emit from '../.././emit/emit.js'
export default {
  name: 'n-threeimg',
  props:{
      'threeimgdian':Array
  },
  mounted(){
      
  },
 
  data () {
    return {
       
    
      
    }
  },
  methods:{
      senddian(index){
             var that=this;
        setTimeout(function(){
             Emit.$emit("senddian",that.threeimgdian[index].dianinfo)
             
        },0.1)
             
      }
  }
}
</script>

<style lang="scss" scoped>
#n-threeimg{
    width: 100%;
    .parents{
        width: 100%;
          .threeimg-block{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
         background: white;
        margin: .1rem 0 0 0;
        padding:1.2rem 1rem 1rem 1rem;
        box-sizing: border-box;
        
        .img-title{
            flex: 1.5;
            p{
                font-size: 16px;
                font-weight: 530;

            }
            .img-text{
                display: flex;
                justify-content: space-between;
                margin: 4px 0;
                padding:0  0 0 10px;
                box-sizing: border-box;
                span{
                    font-size: 11px;
                    color: gray;
                }
                .money{
                text-align: right;
                
                font-size: 12px;
                color: black;
                h4{
                    display: inline;
                    color: black;
                    font-size: 16px;
                }
            }
                
            }
        }
        .img-block{
            flex: 3;
            display: flex;
            flex-direction: row;
            div{
                flex: 1;
                height: 4rem;
            }
            div:nth-child(2){
                margin: 0 10px;
            }
            img{
                
                width: 100%;
                height: 100%;
            }
        }
        .img-type{
            flex: 1;
            span{
                padding:.1rem .2rem;
                background: rgb(250, 248, 245);
                color: rgb(189, 159, 103);
                font-size: 11px;
                border-radius: 5px;
            }
        }
    }
    }
   
  
}
</style>