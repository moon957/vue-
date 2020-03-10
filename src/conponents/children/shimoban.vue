<template>
  <div id="n-shimoban">
      <div class="shi-block" v-for="(items,index) in shipin" :key="index">
          <div  @click="bofang($event)" >
              <video @click="zanting($event)" controls  :src="items.mp4" id="video"></video>
                <span class="bofang-icon"><img src="public/icon/bofang.png" alt=""/></span>
                  <img id="img" :src="items.src" alt=""/>
                  
                <span class="time">04:34</span>
          </div>
          <div>
              <span>{{items.title}}</span>
          </div>
          <div>
              <span>{{items.type}}</span>
              <div><img src="public/icon/pinglun.png" alt=""/></div>
              <div><img src="public/icon/xin.png" alt=""/></div>
              <div><img src="public/icon/fenxiang.png" alt=""/></div>
          </div>
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'n-shimoban',
  props:[
      'shipin'
  ],
  mounted(){
      //console.log(this.shipin);
  },
  data () {
    return {
     
    }
  },
  methods:{
      bofang(event){
         // console.log(event.currentTarget.getElementById("img"));
         
            var video=event.currentTarget.firstElementChild;
            var vedio=this.$(event.currentTarget.firstElementChild);
            //console.log(video.paused)
            
            
            	if (video.paused) {
        video.play();
        vedio.css({
              
                zIndex:10000
            })
    } else {
        video.pause();
       vedio.css({
              
                zIndex:1
            })
    }
            //console.log(video.nextElementChild)
        
      },
      zanting(event){
          console.log("我是视频，你电到我了")
      }
  }
}
</script>

<style lang="scss" scoped>
#n-shimoban{
    width: 100%;
    .shi-block{
        position: relative;
        z-index: 10000;
        width: 100%;
        height: 17rem;
        background: white;
        display: flex;
        flex-direction: column;
        div:nth-child(1){
            position: relative;
            overflow: hidden;
            width: 100%;
            flex: 5;
            .bofang-icon{
                position: absolute;
                left: -22.5px;
                top: 50%;
                z-index: 30;
                margin-left: 50%;
                margin-top: -22.5px;
                display: block;
                img{
                    width: 45px;
                    height: 45px;
                }
            }
            .time{
                 position: absolute;
                right: 12px;
                bottom: 5px;
                z-index: 30;
                margin-left: 50%;
                margin-top: -22.5px;
                display: block;
                background: rgba(114, 113, 113, 0.418);
                color: white;
                font-size: 12px;
                padding:.1rem .2rem;
                box-sizing: border-box;
                border-radius: 10px;
            }
           img{
               width: 100%;
               height: 100%;
                position: absolute;
               left: 0;
               top: 0;
               z-index: 20;
           }
           video{
               width: 100%;
               height: 100%;
               position: absolute;
               left: 0;
               top: 0;
               z-index: 10;
           }
        }
        div:nth-child(2){
            flex: 1;
            padding:0 10px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            span{
               
                font-size: 15px;
                font-weight: 530;
            }
        }
        div:nth-child(3){
            flex: 1;
            display: flex;
            flex-direction: row;
            span{
                display: flex;
                align-items: center;
                padding:0 10px;
                flex: 3;
                font-size: 12px;
                color: gray;
            }
            div{
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                img{
                
                width: 21px;
                height: 21px;
            }
            }
            
        }
    }
}
</style>