<template>
  <div id="n-quanwei">
    <div class="quanwei-block">
      <div>
        <span class="left-text">权威排行 <span>每周五0点准时更新</span></span>
        <span class="right-text">全部榜单</span>
      </div>
      <div>
        <span class="btnjiaonang" @click="qiehuan(index)" v-for="(items,index) in quanwei" :key="index">{{items.name}}</span>
        <!-- <span class="btn" @click="qiehuan()">休闲娱乐</span>
        <span class="btn" @click="qiehuan()">丽人</span> -->
      </div>
      <div>
        <ul class="dian-ul">
          <li v-for="(item,index) in dianlist" :key="index">
              <div class="ceng"><span>Top1|苏福记（交大店）</span></div>
              <img src="public/shipin/t1.jpg" alt=""/>
              <span>西餐榜</span>
          </li>
        <li>
            <span>更多榜单</span>
        </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "n-quanwei",
  props:{
      'quanwei':Array
  },
  beforeMount(){
    console.log(this.quanwei);
  
  },
  mounted(){
      
       this.$(".btnjiaonang").eq(0).addClass("jinse");
        setTimeout(function(){
      this.dianlist=this.quanwei[0].dianlist;
   },.1)
       
  },
  data() {
    return {
        dianlist:[]
    };
  },
  methods:{
      qiehuan(index){
          //console.log( this.$(".btnjiaonang"))
           this.$nextTick(function(){
           this.$(".btnjiaonang").removeClass("jinse");
           this.$(".btnjiaonang").eq(index).addClass("jinse");
          
                this.dianlist=this.quanwei[index].dianlist;
                
           })
      }

  }
};
</script>

<style lang="scss" scoped>
.jinse{
    color: white!important;
    background: rgb(167, 140, 92)!important;
}
#n-quanwei {
  width: 100%;
  .quanwei-block {
    width: 100%;
    height: 18rem;
    display: flex;
    flex-direction: column;
    background: white;
    padding:1rem 0;
    box-sizing: border-box;
    div:nth-child(1) {
      flex: 2;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
      box-sizing: border-box;
      .left-text {
        font-size: 17px;
        color: black;
        display: flex;
        flex-direction: column;
        span{
            padding:.3rem 0;

            font-size: 12px;
          color: gray;
        }
      }
      .right-text {
        position: relative;
        font-size: 12px;
        color: black;
      }
      .right-text::after {
        position: absolute;
        content: "";
        right: -10px;
        top: 5px;
        width: 0;
        height: 0;
        border: 4px solid;
        border-color:  transparent transparent transparent black;
      }
    }
   
    div:nth-child(2) {
      flex: 2;
       display: flex;
      align-items: center;
     padding:0 10px;
     box-sizing: border-box;
      span{
          font-size: 12px;
          color: rgb(82, 80, 80);
          padding:.2rem 1rem;
          box-sizing: border-box;
          background:white;
          border-radius: 10px;
      }
     
    }
    div:nth-child(3) {
      flex: 7;
     overflow: hidden;
      
      .dian-ul{
          height: 106%;
          display: flex;
          flex-direction: row;
          padding:0 10px;
          box-sizing: border-box;
          overflow-x: scroll;
          li{
              position: relative;
              border: 1px solid gray;
              float: left;
              list-style: none;
              margin-right:10px; 
              height: 91%;
              img{
                  
                  width: 10rem;
                  height: 70%;
              }
              .ceng{
                  position: absolute;
                  left: 0;
                  bottom: 30%;
                  height: 70%;
                  padding: 0;
                  display: flex;
                  align-items: flex-end;
                  background: linear-gradient(to bottom,rgba(255, 255, 255, 0),rgba(0, 0, 0, 0.568));
                  
                  color: white;
                  span{
                      padding: 0 0 .5rem .3rem;
                      color: white;
                      font-size: 12px;
                      word-break: break-all;
                      width: 10rem;
                     
                        display: inline-block;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    vertical-align: middle;
                  }
                 
              }
              span{
                  padding:1rem  0 0 .6rem;
                  box-sizing: border-box;
                  box-sizing: border-box;
                  position: relative;
                  font-size: 16px;
                  color: black;
              }
              span::after {
            position: absolute;
            content: "";
            right: -10px;
            top: 24px;
            width: 0;
            height: 0;
            border: 4px solid;
            border-color:  transparent transparent transparent black;
      }
          }
          li:last-child{
              display: block;
              width: 160px !important;
              height: 91%;
              background: white;
              display: flex;
              align-items: center;
              justify-content: center;
              span{
                  width: 10rem;
                  text-align: center;
                  font-size: 12px;
              }
                span::after {
            position: absolute;
            content: "";
            right: -10px;
            top: 24px;
            width: 0;
            height: 0;
            border: 0px solid;
            border-color:  transparent transparent transparent black;
          }
          }
      }
    }
  }
}
</style>