<template>
  <div id="n-pinglun">
      <div  v-for="(items,index) in this.pinglun" :key="index">
      <div class="pingtype-block">
          <div>
              <div>
                  <span>评论<span>({{items.zongshu}})</span></span>
              </div>
              <div>
                <span><img   v-for="(item,index) in Math.floor(parseInt(items.xing)/2)" :key="index" src="public/icon/huang.png" alt=""/></span>
              <span><img  v-for="(item,index) in 5-(Math.floor(parseInt(items.xing)/2))" :key="index"  src="public/icon/xing.png" alt=""/></span>
                  <span>4.6</span>
              </div>
          </div>
          <div>
              <span class="hao">最新评价</span>
             <span> <span class="hao"  v-for="(item,index) in items.haotype" :key="index">{{item.name}}<span>({{item.number}})</span></span></span>
             
              <span><span class="cha"   v-for="(item,index) in items.huaitype" :key="index">{{item.name}}<span>({{item.number}})</span></span></span>
              
             
          </div>
      </div>
    <div class="pingcontent-block">
        <div   v-for="(item,index) in items.pinglun" :key="index">
        <div class="ping-top">
            <div>
                <img src="public/shipin/t1.jpg" alt=""/>
            <div>
                <span>{{item.name}}</span>
                <div class="xingxing">
                <img src="public/icon/huang.png" alt=""/>
                  <img src="public/icon/huang.png" alt=""/>
                  <img src="public/icon/huang.png" alt=""/>
                  <img src="public/icon/huang.png" alt=""/>
                  <img src="public/icon/huang.png" alt=""/>
                </div>
            </div>
            </div>
            <div class="time-block"><span>{{item.shijian}}</span></div>
        </div>
        <div class="ping-middle">
            <span>{{item.content}}</span>
        </div>
        <div class="ping-bottom">
            <span>消费评价</span>
        </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'n-pinglun',
  props:{
      'pinglun':Array
  },
  mounted(){
      //console.log(this.pinglun)
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
#n-pinglun{
    width: 100%;
    .pingtype-block{
        width: 100%;
        display: flex;
        flex-direction: column;
        div:nth-child(1){
            flex: 1;
            display: flex;
            flex-direction: row;
            padding:10px 10px;
            background: white;
            div:nth-child(1){
                flex: 1;
                span{
                    font-size: 12px;
                    color: black;
                }
            }
            div:nth-child(2){
                flex: 2;
                display: inline-block;
                text-align: right;
                span{
                    display: inline-block;
                    img{
                    width: 10px;
                    height: 10px;
                }
                }
                span{
                    position: relative;
                    font-size: 12px;
                    color: rgb(192, 156, 88);
                }
                span::after{
                    position: absolute;
                    right: 0;
                    top: 0;
                    content: "";
                    border-width:3px;
                    border-color: transparent transparent transparent black; 
                }
            }
        }
        div:nth-child(2){
            flex: 3;
            background: white;
            .hao{
                display: inline-block;
                padding:.2rem .5rem;
                margin: .5rem .5rem;
                background: rgb(192, 157, 91);
                border-radius:10px; 
                 font-size: 12px;
            }
            .cha{
                display: inline-block;
                 padding:.2rem .5rem;
                margin:.5rem .5rem;
                background: silver;
                 border-radius:10px; 
                 font-size: 12px;
            }
        }
    }
    .pingcontent-block{
        width: 100%;
        display: flex;
        flex-direction: column;
       .ping-top{
           display: flex;
           flex-direction: row;
           background: white;
           div:nth-child(1){
               flex: 2;
               display: flex;
               flex-direction: row;
              
               img{
                   width: 35px;
                   height: 35px;
                   border-radius: 50%;
                   vertical-align: middle;
               }
               div{
                   padding: 0 0 0 5px;
                   box-sizing: border-box;
                   display: flex;
                   flex-direction: column;
                   //vertical-align: middle;
                   //justify-content: flex-start!important;
                   span{
                        padding: 0 0 0 5px;
                       font-size: 12px;
                       color: black;
                   }
                   .xingxing{
                        display: inline-block;
                        img{
                            width: 10px;
                            height: 10px;
                        }
                   }
               }
           }
           .time-block{
               flex: 1;
               display: flex;
               align-items: center;
               justify-content: center;
               span{
                   font-size: 12px;
                   color: silver;
               }
           }
       }
       .ping-middle{
           width: 100%;
           padding:.5rem 20px .5rem 40px;
           box-sizing: border-box;
           background: white;
           span{
               font-size: 12px;
               color: black;
           }
       }
       .ping-bottom{
           width: 100%;
           padding:.5rem 20px .5rem 40px;
            box-sizing: border-box;
           background: white;
           span{
               font-size: 12px;
               color: gray;
           }
       }
    }
}
</style>