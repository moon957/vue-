<template>
  <div id="n-sb">
       <div>
      <div class="newst-block" v-for="(items,index) in qsb!=undefined?qsb:sb!=undefined?sb:xsb!=undefined?xsb:asb" :key="index">
        <div class="newst-left">
          <img :src="items.src" alt />
        </div>
        <div class="newst-right">
          <span class="title">{{items.name}}</span>
          <div>
              <span>￥<span>{{items.jiage}}</span>/人</span>
              <span>{{items.juli}}</span>
              <span>{{items.liulan}}<span>浏览</span></span>
          </div>
          <div>
            <span>{{items.type}}</span>
          </div>
        </div>
      </div>
      
    </div>
   
  </div>
</template>

<script>
export default {
  name: 'n-sb',
  props:{
      'sb':Array,
      'qsb':Array,
      'xsb':Array,
      'asb':Array
  },
  data () {
    return {
     
    }
  }
}
</script>

<style lang="scss" scoped>
#n-sb{
    width: 100%;
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
      div:nth-child(2){
        width: 100%;
        display: flex;
        justify-content: space-between;
        span{
            font-size: 12px;
            color: gray;
        }
      }
      div:nth-child(3){
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: .7rem 0 0 0;
        span {
          color: rgb(212, 178, 113);
          font-size: 12px;
          background: rgb(255, 240, 209);
         
        }
      }
    }
  }
}
</style>