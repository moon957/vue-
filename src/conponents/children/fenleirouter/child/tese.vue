<template>
  <div id="n-jtese">
      <div class="jtese-block">
          <div class="jtese-top">
              <span>特色美食<span>为你推荐最有特色的城市好味</span></span>
              <span>查看全部</span>
          </div>
          <div class="jtese-bottom">
             <span><span><p>凉皮</p><span>23家好店</span> </span><img src="public/shipin/t1.jpg" alt=""/></span>
              <span> <span><p>凉皮</p><span>23家好店</span> </span><img src="public/shipin/t1.jpg" alt=""/></span>
               <span> <span><p>凉皮</p><span>23家好店</span> </span><img src="public/shipin/t1.jpg" alt=""/></span>
          </div>
      </div>
   
  </div>
</template>

<script>
export default {
  name: 'n-jtese',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
#n-jtese{
    width: 100%;
    .jtese-block{
        width: 100%;
        height: 10rem;
        display: flex;
        flex-direction: column;
        padding:10px;
        box-sizing: border-box;
        background: white;
        .jtese-top{
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            span:nth-child(1){
                flex: 1;
                color:black;
                font-size: 18px;
                display: flex;
                flex-direction: column;
                span{
                    color: gray;
                    font-size: 12px;
                    
                }
            }
            span:nth-child(2){
                flex: 1;
                color: black;
                font-size: 14px;
                text-align: right;
            }
        }
        .jtese-bottom{
            flex: 3;
            display: flex;
            flex-direction: row;
            
           span:nth-child(1){
               position: relative;
               flex: 1;
               margin: 0 10px 0 0;
                img{
                width: 100%;
                height: 100%;
            }
            span{
                position: absolute;
                width: 100%;
                height: 100%;
                background: rgba(128, 128, 128, 0.26);
                color: white;
                display: flex;
                //align-items: center;
                justify-content: center;
                p{
                    font-size: 14px;
                    text-align: center;
                    padding: 2rem 0 0 0;
                    box-sizing: border-box;
                }
                span{
                    font-size: 12px;
                    text-align: center;
                     padding: 3rem 0 0 0;
                     box-sizing: border-box;
                }
            }
           }
           span:nth-child(2){
               position: relative;
               flex: 1;
               margin: 0 10px 0 0;
                img{
                width: 100%;
                height: 100%;
            }
             span{
                position: absolute;
                width: 100%;
                height: 100%;
                background: rgba(128, 128, 128, 0.26);
                color: white;
                display: flex;
                //align-items: center;
                justify-content: center;
                p{
                    font-size: 14px;
                    text-align: center;
                    padding: 2rem 0 0 0;
                    box-sizing: border-box;
                }
                span{
                    font-size: 12px;
                    text-align: center;
                     padding: 3rem 0 0 0;
                     box-sizing: border-box;
                }
            }
           }
           span:nth-child(3){
               position: relative;
               flex: 1;
               
                img{
                width: 100%;
                height: 100%;
            }
             span{
                position: absolute;
                width: 100%;
                height: 100%;
                background: rgba(128, 128, 128, 0.26);
                color: white;
                display: flex;
                //align-items: center;
                justify-content: center;
                p{
                    font-size: 14px;
                    text-align: center;
                    padding: 2rem 0 0 0;
                    box-sizing: border-box;
                }
                span{
                    font-size: 12px;
                    text-align: center;
                     padding: 3rem 0 0 0;
                     box-sizing: border-box;
                }
            }
           }
          
        }
    }
}
</style>