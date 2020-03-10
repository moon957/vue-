<template>
  <div id="n-snewsb">
    <div>
      <div class="newst-block" v-for="(items,index) in snew" :key="index">
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
     
    </div>
  </div>
</template>

<script>


export default {
  name: "n-snewsb",
 props:{
     'snew':Array,
    
 },
  mounted() {
   //console.log(this.snew)
    let that = this;
   
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
#n-snewsb {
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