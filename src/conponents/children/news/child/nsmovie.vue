<template>
    <div id="n-smovie">
        <div class="hottitle">热映影片</div>
        <div class="hotblock">
            <ul class="hot-movielist">
                <li class="hot-one"  v-for="(item,index) in moviedata" :key="index">
                    <div class="imgblock">
                        
                        
                        <img :src="item.src" alt="">
                    </div>
                    <span  class="hotmoviename">{{item.name}}</span>
                    <span class="lastblock">
                        <div>
                            <span><img v-for="(items,index) in Math.floor(parseInt(item.pingfen)/2)" :key="index" src="public/icon/huang.png" alt=""/></span>
                            <span><img v-for="(items,index) in 5-(Math.floor(parseInt(item.pingfen)/2))" :key="index" src="public/icon/xing.png" alt=""/></span>
                            <!-- <img src="public/icon/xing.png" alt=""/>
                            <img src="public/icon/xing.png" alt=""/>
                            <img src="public/icon/xing.png" alt=""/> --> 
                            <span class="ping">{{item.pingfen}}</span>
                        </div>
                        
                        
                        
                    </span>
                </li>
         
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"n-smovie",
    props:{
      'moviedata':Array
    },
    mounted(){
        //console.log(this.moviedata);
        let movex=null;
        let scrollx=null;
        let distance=null;
        let temp=null;
        let _window=this.$(window);
        this.$(".hot-movielist").on("touchstart",(e)=>{
          // console.log(e.targetTouches[0].pageX);
        this.scrollx=e.targetTouches[0].pageX;
        //console.log(this.scrollx)

        }).on("touchmove",(e)=>{
           
            this.movex=e.targetTouches[0].pageX;
            
            if(this.movex>this.scrollx){
                this.distance=this.movex-this.scrollx;
               
              
               this.temp=parseInt(this.$(".hot-movielist").css("marginLeft"));
              
                this.$(".hot-movielist").animate({
                    marginLeft:this.distance+this.temp>0?0:this.distance+this.temp+"px"
                },10)
            }
            else if(this.movex<this.scrollx){
                this.distance=Math.abs(this.movex-this.scrollx);
               this.temp=parseInt(this.$(".hot-movielist").css("marginLeft"));
                // this.temp=Math.parse(this.$(".hot-movielist").css("marginLeft"));
                //console.log(this.distance);
                this.$(".hot-movielist").animate({
                    //<=1000-_window.width()?-this.distance-this.temp:1000-_window.width()   
                marginLeft:-this.distance+this.temp<-(1000-_window.width())?-(1000-_window.width()):-this.distance+this.temp+"px"
                },10)
            }
            
        })
    },
    data(){
        return{
            //scrollx:null,

        }
    },
    methods:{
       
    }
}
</script>

<style lang="scss" scoped>
    #n-smovie{
        margin: 5px 0 0 0;
         background: white;
         width: 100%;
         height: 14rem;
         overflow: hidden;
        .hottitle{
            width: 100%;
            height: 3rem;
            background: white;
            line-height: 3rem;
            font-size: 16px;
            padding-left: 10px;
            font-weight: 600;
        
        }
        
            .hotblock{
                width: 100%;
                height: 10rem;
                .hot-movielist{
                width:1000px;
                height:10rem;
               
                display: flex;
                flex-direction: row;
                padding:0 5px;
                .hot-one{
                    display: flex;
                    flex-direction: column;
                    flex:1;
                    height: 100%;
                    padding:10px 5px 10px 5px;
                    
                     .imgblock{
                        position: relative;
                        width: 100%;
                        height: 80%;
                       
                        img{
                        width: 100%;
                        height: 100%;
                        }
                    }
                    .hotmoviename{
                        display: block !important;
                        width:100%;
                        height:20px;
                        margin: 6px 0 0 0;
                        //display:inline-block;
                        // overflow: hidden;
                        // text-overflow: ellipsis;
                        // white-space: nowrap;
                        font-size: 13px;
                    }
                    .lastblock{
                        display: inline-block;
                        
                        div{
                            font-size: 0;
                            span{

                                img{
                                width: 12px;
                                height: 12px;
                                vertical-align: middle;
                            }
                            
                            }
                            .ping{
                                font-size: 12px;
                                color: orange;
                                vertical-align: middle;
                            }
                        }
                       
                    }
                    
                }
            }
            }
    }
        
</style>
