<template>
  <div id="n-dianinfo" >
     <ndianheader :name="name" :address="address" ref="dianheader"></ndianheader>
     <div   v-for="(items,index) in dianinfo" :key="index">
    <div class="img-block">
        <img :src="items.datu" alt=""/>
    </div>
    <div class="dianname-block">
        <div>
            <p>{{name}}<span>({{address}})</span></p>
        </div>
        <div v-for="(item,index) in items.pingfen" :key="index">
            <div>
              <span><img v-for="(items,index) in Math.floor(parseInt(item.pingfen)/2)" :key="index" src="public/icon/huang.png" alt=""/></span>
              <span><img v-for="(items,index) in 5-(Math.floor(parseInt(item.pingfen)/2))" :key="index" src="public/icon/xing.png" alt=""/></span>
           
            </div>
            <span>￥<span>{{item.jiage}}</span>/人</span>
        </div>
    </div>
    <div class="dianjuaddress-block"  v-for="(item,index) in items.address" :key="index">
        <div>
            <img src="public/dianinfo/icon/dingwei.png" alt=""/>
            <span>{{item.address}}</span>
        </div>
        <div>
            <img src="public/dianinfo/icon/dianhua.png" alt=""/>
        </div>
    </div>
    <div class="dianyouhui-block">
        <div>
            <p>本店优惠</p>
        </div>
        <div>
            <div>
                <img src="public/dianinfo/icon/fu.png" alt=""/>
            </div>
            <div>
                <span>在线支付</span>
                <span>商家营业时间均可用</span>
            </div>
            <div>
                <span>优惠买单</span>
            </div>
        </div>
        <div    v-for="(item,index) in items.youhui" :key="index">
            <div>
                <img src="public/dianinfo/icon/tuan.png" alt=""/>
            </div>
            <div>
                <div><img src="public/shipin/t1.jpg" alt=""/></div>
                <div>
                    <p>{{item.name}}</p>
                    <span>￥<span>{{item.jiage}}</span><span><del>{{item.yuanjia}}</del></span></span>
                </div>
            </div>
            <div>
                <div>
                    <router-link :to="{path:item.action,query:{jiage:item.jiage,name:item.name}}"><span class="buy">购买</span></router-link>
                <span class="yishou">已售<span>{{item.yishou}}</span></span>
                </div>
            </div>
        </div>
    </div>
    
    <div class="caidan-block">
        <div    v-for="(item,index) in items.tuijiancai" :key="index">
        <div>
            <p>推荐菜</p>
        </div>
        <div>
            <ul>
                <li v-for="(itemes,indexes) in item.hot" :key="indexes">
                    <img :src="itemes.src" alt=""/>
                    <span>{{itemes.name}}</span>
                </li>
                 
            </ul>
        </div>
        <div>
            <span v-for="(items,index) in item.caidan" :key="index">{{items.name}}</span>
        </div>
        </div>
    </div>
   
    <div class="xiangce-block">
        <div><p>商家相册</p></div>
        <div>
            <ul>
                <li    v-for="(itemes,index) in items.xiangce" :key="index">
                    <img :src="itemes.src" alt=""/>
                    <span>{{itemes.name1}}<span>({{itemes.number}})</span></span>
                </li>
               
            </ul>
        </div>
    </div>
    <npinglun :pinglun="pinglun"></npinglun>
    <nwriteping></nwriteping>
    </div>
  </div>
</template>

<script>
import Emit from '../../../emit/emit.js'
import ndianheader from './child/header.vue'
import npinglun from './child/pinglun.vue'
import nwriteping from './child/writepinglun.vue'
export default {
  name: 'n-dianinfo',
  components:{
      ndianheader,
      npinglun,
      nwriteping
  },
  mounted(){
      this.name=this.$route.query.name;
      this.address=this.$route.query.address;
      this.whitebg();
      var that=this;
      Emit.$on("senddianmsg",function(res){
         that.$nextTick(function(){
              that.dianinfo=res;
              that.pinglun=that.dianinfo[0].pinglun;
              console.log(that.dianinfo)
          
         })
      })
       Emit.$on("senddian",function(res){
         that.$nextTick(function(){
              that.dianinfo=res;
              that.pinglun=that.dianinfo[0].pinglun;
        //   console.log(that.dianinfo);
        //   console.log(that.dianinfo[0].pinglun);
         })
      })
      //console.log(this.$route.query.name)
    //  for(let i=0;i<5;i++){
    //      setTimeout(()=>console.log(i),i*1000);
    //  }
    // console.log(2**3%3);
//     let i=5;
//     function a(i){
//         i*=2;
//         console.log(i)
//     }
//    a(i);
   
//    let l=await(()=>Promise.resolve(10))();
//    console.log(l);
    // let j=0;
    // Array(10).forEach(()=>{
    //     j++;
       
    // })
    //  console.log(j);
    // let k=parseInt('10',16);
    // console.log(k)
  },
  data () {
    return {
     name:null,
     address:null,
     dianinfo:null,
     pinglun:null
    }
  },
  methods:{
       whitebg(){
      var that=this;
      this.$("#n-dianinfo").on("touchmove",function(){
        //console.log(that.$refs.jheader.headerheight);
         that.$refs.dianheader.white();
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#n-dianinfo{
    width: 100%;
    .img-block{
        width: 100%;
        height: 14rem;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .dianname-block{
        width: 100%;
        height: 5rem;
        display: flex;
        flex-direction: column;
        background: white;
        justify-content: center;
        align-items: center;
        div:nth-child(1){
            flex: 1;
            p{
                padding:10px 0;
                box-sizing: border-box;
                font-size: 16px;
                span{
                    font-size: 16px;
                }
            }
        }
        div:nth-child(2){
            flex: 1;
            div:nth-child(1){
                display: inline-block;
                font-size: 0;
                span{
                    display: inline-block;
                    font-size: 0;
                    img{
                    width: 12px;
                    height: 12px;
                }
                }
                
            }
            span{
                    font-size: 12px;
                    color: gray;
                }
        }
    }
    .dianjuaddress-block{
        width: 100%;
        height: 2rem;
        background: white;
        display: flex;
        flex-direction: row;
        div:nth-child(1){
            flex:5;
            
            
            img{
                width: 25px;
                height: 25px;
                vertical-align: middle;
            }
            span{
                display: inline;
                font-size: 12px;
                color: gray;
                // display: flex;
                // flex-wrap: nowrap;
                vertical-align: middle;
                box-sizing: border-box; 
                padding:0px 60px 0 0;
                border-right:1px solid silver;
            }
        }
        div:nth-child(2){
            flex: 1;
            text-align: right;
            padding:0 10px;
            box-sizing: border-box;
            margin-top: .1vh;
            img{
                width: 25px;
                height: 25px;
            }
        }

    }
    .dianyouhui-block{
        width: 100%;
        height: 10rem;
        background: white;
        display: flex;
        flex-direction: column;
        div:nth-child(1){
            flex:1;
            p{
                font-size: 14px;
                text-align: center;
            }
        }
        div:nth-child(2){
            flex:3;
            display: flex;
            flex-direction: row;
            div:nth-child(1){
                flex: 1;
                padding:0 10px;
                box-sizing: border-box;  
                img{
                    width: 20px;
                    height: 20px;
                }
            }
            div:nth-child(2){
                flex: 5;
                display: flex;
                flex-direction: column;
                span:nth-child(1){
                    font-size: 14px;
                    color: black
                }
                span:nth-child(2){
                    font-size: 14px;
                    color: gray;
                }
            }
            div:nth-child(3){
                flex: 2;
                display: flex;
                align-items: center;
                span{
                    padding:.3rem .5rem;
                    box-sizing: border-box;
                    background: rgb(190, 161, 108);
                    border-radius: 15px;
                    font-size: 12px;
                    color: white;
                }
            }
        }
        div:nth-child(3){
            flex:3;
            display: flex;
            flex-direction: row;
            div:nth-child(1){
                flex: 1;
                padding:0 0 0 10px;
                box-sizing: border-box;
                img{
                    width: 20px;
                    height: 20px;
                }
            }
            div:nth-child(2){
                flex: 6;
                display: flex;
                flex-direction: row;
                div:nth-child(1){
                    flex: 1;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                div:nth-child(2){
                    flex: 1.5;
                    display: flex;
                    flex-direction: column;
                    padding:0 .3rem;
                    box-sizing: border-box;
                    p{
                        font-size: 14px;
                    }
                    span{
                          padding:20px 0 0;
                          box-sizing: border-box;
                        font-size: 16px;
                        color: rgb(185, 162, 119);
                        span:nth-child(1){
                             font-size: 16px;
                             color: rgb(185, 162, 119);
                        }
                        span:nth-child(2){
                          
                            margin: 0 0 0 .5rem;
                            font-size: 12px;
                            color: gray;
                        }
                    }
                }
            }
            div:nth-child(3){
                flex: 2;
                display: flex;
                flex-direction: column;
              div{
                  text-align: center;
               a{
                   text-decoration: none;
                   outline: none;
                   color: black;
                   display: block;
                    .buy{
                    padding:0.1rem .5rem;
                    border: 1px solid rgb(218, 175, 97);
                    border-radius: 15px;
                    color: rgb(218, 175, 97);
                     font-size: 12px;
                }
               }
                .yishou{
                   margin: 8px  0 0 0;
                    display: block;
                   font-size: 12px;
                   color: gray;
                }
              }
            }
        }
    }
    .caidan-block{
        width: 100%;
        height: 16rem;
        background: white;
       
        margin: 10px 0 0 0;
        div{
             width: 100%;
            height: 100%;
             display: flex;
             flex-direction: column;
             
             div:nth-child(1){
            flex: 1;
            border-bottom:1px solid silver; 
            float: left;
            display: flex;
            align-items: center;
            justify-content: center;
            p{
                position: relative;
                font-size: 14px;
                text-align: center;
            }
            p::after{
                position: absolute;
                content: "";
                right: -155px;
                top: 9px;
                border: 3px solid;
                border-color: transparent transparent  transparent black;
                
            }
        }
         div:nth-child(2){
            flex: 5;
           
            border-bottom: 1px solid silver;
            box-sizing: border-box;
            overflow: hidden;
            ul{
                height: 110%;
                display: flex;
                flex-direction: row;
                overflow-x: scroll;
                overflow-y: hidden;
                li{
                    list-style: none;
                    padding:10px 5px;
                    img{
                        width: 10rem;
                        height: 75%;
                    }
                    span{
                        margin: 10px 0 0 0;
                        font-size: 12px;
                        display: block;
                        text-align: center;
                        word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
                    }
                }
            }
        }
         div:nth-child(3){
            flex: 2;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            span{
                padding:.2rem .5rem;
                font-size: 12px;
                display: inline;
            }
        }
        }
       
    }
    .xiangce-block{
        width: 100%;
        background: white;
        height: 10rem;
        display: flex;
        flex-direction: column;
        margin: 10px 0 0 0;
        div:nth-child(1){
            flex: 1;
        }
        div:nth-child(2){
            flex: 5;
            overflow: hidden;
            ul{
                height: 107%;
                display: flex;
                flex-direction: row;
                overflow-x: scroll;
                li{
                    list-style: none;
                    padding:10px 5px;
                    img{
                        width: 8rem;
                        height: 75%;
                    }
                    span{
                        font-size: 12px;
                        display: block;
                        text-align: center;
                        span{
                            display: inline;
                        }
                    }
                }
            }
        }
    }
}
</style>