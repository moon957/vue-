<template>
  <div id="n-newt">
    <div  v-for="(items,index) in newslist" :key="index">
      <div class="newst-block" v-if="(index+1)%6!=0">
        <div class="newst-left">
          <img :src="items.src" alt />
        </div>
        <div class="newst-right">
          <span class="title">{{items.name}}</span>
          <div>
            <span>{{items.type}}</span>
            <span>
              <span>{{items.liulan}}</span>浏览
            </span>
          </div>
        </div>
      </div>
      <ntb v-if="(index+1)%6==0" :new="newslist.slice(index,index+1)"></ntb>
    </div>
  </div>
</template>

<script>
import Emit from "../../../emit/emit.js";
import ntb from "../news/child/tb.vue";
export default {
  name: "n-newt",
  components: {
    ntb
  },
  mounted() {
   
    let that = this;
    Emit.$on("sendtmsg0", function(res) {
      //console.log(res[0].dianlist);
      that.$nextTick(function() {
        //console.log(res[0].dianlist)
        that.newslist = res[0].dianlist;
         //console.log(this.newslist.slice(0,3));
      });
    });
  },
  data() {
    return {
      newslist: []
      //dianjialist:[],
    };
  }
};
</script>

<style lang="scss" scoped>
#n-newt {
  width: 100%;
  margin: 6rem 0 0 0;
  .newst-block {
    width: 100%;
    height: 8rem;
    background: white;
    display: flex;
    flex-direction: row;
    padding: 1rem;
    box-sizing: border-box;
    border-bottom:1px solid rgb(245, 244, 244); 
    .newst-left {
      flex: 3;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .newst-right {
      flex: 5;
      padding: 0 0 0 5px;
      box-sizing: border-box;
      .title {
        font-size: 17px;
        font-weight: 530;
        display: block;
        //width: 100%;
        height: 3rem;
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: 2rem 0 0 0;
        span {
          color: gray;
          font-size: 12px;
        }
      }
    }
  }
}
</style>