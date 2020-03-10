<template>
  <div id="n-dianlist">
    <div v-for="(items,index) in dianlist" :key="index">
      <router-link :to="{path:items.action,query:{name:items.name,address:items.address}}">
        <div class="dian-block" @click="send(index)">
          <div>
            <img :src="items.src" alt />
          </div>
          <div>
            <p class="title">
              {{items.name}}
              <span v-if="items.address">({{items.address}})</span>
            </p>
            <div class="d-font-block">
              <span>{{items.juli}}</span>
              <span v-if="items.jiage=='暂无价格'">{{items.jiage}}</span>
              <span class="money" v-if="items.jiage!='暂无价格'">
                ￥
                <h4>{{items.jiage}}</h4>/人
              </span>
            </div>
            <span class="type">{{items.type}}</span>
          </div>
        </div>
         </router-link>
        <nmovie v-if="index==1"></nmovie>
        <nthreeimgdian v-if="index==2" :threeimgdian="dian.slice(0,1)"></nthreeimgdian>
        <nthreeimgdian
          v-if="(index%4)==2&&index!=2"
          :threeimgdian="dian.slice((index/4),(index/4)+1)"
        ></nthreeimgdian>
     
    </div>
  </div>
</template>

<script>
import Emit from '../../emit/emit.js'
import nthreeimgdian from "../children/threeimgdian.vue";
import nmovie from "../children/movie.vue";
import Axios from 'axios'
export default {
  name: "n-dianlist",

  components: {
    nthreeimgdian,
    nmovie
  },

  mounted() {
    //this.list=this.datalist;
    //console.log(this.list);
    Axios.post("/").then((res)=>{
       // console.log(res.data.return.ulmenu);
        this.dianlist=res.data.result.dianlist;
        this.dian=res.data.result.dian;
    })
  },
  data() {
    return {
      //list:null,
      dianlist:[],
      dian:[]
    };
  },
  methods:{
      send(index){
          var that=this;
        setTimeout(function(){
             Emit.$emit("senddianmsg",that.dianlist[index].dianinfo)
             
        },0.1)
             
         
      }
  }
};
</script>

<style lang="scss" scoped>
#n-dianlist {
  width: 100%;

  //background: white;

  //margin: 10px 0 0 0;
  .dian-block {
    width: 100%;
    height: 7rem;
    display: flex;
    flex-direction: 1;
    padding: 10px 10px;
    box-sizing: border-box;
    background: white;
    margin: 0.1rem 0;
    div:nth-child(1) {
      flex: 1.5;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    div:nth-child(2) {
      flex: 3;
      padding: 0 0 0 10px;
      box-sizing: border-box;
      .title {
        font-size: 16px;
        font-weight: 530;
      }
      .d-font-block {
        display: flex;
        justify-content: space-between;
        vertical-align: middle;
        padding: 0 10px;
        box-sizing: border-box;
        margin: 10px 0 10px 0;
        span {
          font-size: 12px;
          color: gray;
          vertical-align: middle;
        }
        .money {
          text-align: right;

          font-size: 12px;
          color: black;
          h4 {
            display: inline;
            color: black;
            font-size: 16px;
          }
        }
      }
      .type {
        font-size: 12px;
        color: rgb(219, 176, 97);
        border-radius: 5px;
        padding: 0.2rem 0.1rem;
        background: rgb(241, 239, 235);
      }
    }
  }
}
</style>