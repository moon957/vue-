<template>
  <div id="n-sxlunbo">
     <div class="sx-block">
          <div class="lunbo-block">
          <ul class="lunbo-ul">
              <li class="lunbo-li" v-for="(items,index) in lunbo" :key="index">
                  <div>
                      <img :src="items.src" alt=""/>
                  </div>
                  <div>
                      <div>
                          <span><span>{{name}}</span>头条</span>
                      <span>{{items.name}}</span>
                      </div>
                      <div>
                          <span><span>{{items.liulan}}</span>浏览</span>
                      </div>
                  </div>
              </li>
         
          </ul>
      </div>
        <div class="jiantou-block">
            <img src="public/icon/youjiantou.png" alt=""/>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'n-sxlunbo',
   props:{
    lunbo:Array,
   
  },
  mounted(){
     
      this.name=this.$route.query.name;
      this.lunbodong();
       console.log(this.name)
  },
  data () {
    return {
     name:null
    }
  },
  methods:{
      lunbodong(){
        var that = this;
      var count = 0;
      var time = null;
     
      time = setInterval(t, 2000);
      function t() {
       
        count++;
        that.$(".lunbo-ul").animate(
          {
            marginTop: -96 * count
          },
          500,
          function() {
            if (count >= that.$(".lunbo-li").length - 1) {
              count = 0;
              that.$(".lunbo-ul").css({
                marginTop: 0
              });
            }
          }
        );
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#n-sxlunbo{
    width: 100%;
    .sx-block{
        width: 100%;
        height: 6rem;
        background: white;
        display: flex;
        flex-direction: row;
        padding:0 10px;
        box-sizing: border-box;
        .lunbo-block{
            flex: 6;
           overflow: hidden;
            .lunbo-ul{
                width: 100%;
                //height: 100%;
                .lunbo-li{
                    width: 100%;
                    height:6rem;
                    display: flex;
                    flex-direction: row;
                    padding:1rem 0;
                    box-sizing: border-box;
                     background: white;
                   div:nth-child(1){
                       flex: 1;
                       img{
                           width: 100%;
                           height: 100%;
                       }
                   }
                   div:nth-child(2){
                       flex: 4;
                       display: flex;
                       flex-direction: column;
                       padding:0 0 0 5px;
                       box-sizing: border-box;
                       div:nth-child(1){
                           flex: 3;
                           margin: -0.4rem 0 0 0;
                           span{
                               font-size: 12px;
                               color: gray;
                           }
                       }
                       div:nth-child(2){
                           flex: 1;
                           span{
                               font-size: 12px;
                               color: gray;
                           }
                       }
                   }
                }
            }
        }
        .jiantou-block{
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                width: 15px;
                height: 15px;
            }
        }
    }
}
</style>