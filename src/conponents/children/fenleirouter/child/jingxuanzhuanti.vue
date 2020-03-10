<template>
  <div id="n-jingxuanzhuanti">
      <div class="jingxuan-bloxk">
          <div>
              <p>精选专题</p>
              <span>解锁城市格式生活</span>
          </div>
          <div>
              <img src="public/shipin/t1.jpg" alt=""/>
          </div>
          <div>
              <p>较大超级实惠的餐厅都在这儿</p>
              <span>吃饭这件事，有时候不在于餐厅多么华丽，价格多么昂贵环境设计阿就</span>
          </div>
          <div>
              <span class="type">4家好店上线</span>
              <span><span>90291</span>浏览</span>
          </div>
      </div>
   
  </div>
</template>

<script>
export default {
  name: 'n-jingxuanzhuanti',
  data () {
    return {
     
    }
  }
}
</script>

<style lang="scss" scoped>
#n-jingxuanzhuanti{
    width: 100%;
    .jingxuan-bloxk{
        width: 100%;
        height: 24rem;
        background: white;
        display: flex;
        flex-direction: column;
        padding:10px;
        box-sizing: border-box;
        border-bottom: 1px solid rgb(233, 233, 233);
        div:nth-child(1){
            flex: 1;
            display: flex;
            flex-direction: column;
            p{
                font-size: 18px;
                color: black;
            }
            span{
                font-size: 12px;
                color: gray;
                padding:0 0 .5rem 0;
                box-sizing: border-box;
            }
        }
        div:nth-child(2){
            flex: 6;
            img{
                width: 100%;
                height: 90%;
            }
        }
        div:nth-child(3){
            flex: 1;
            p{
                font-size:16px;
                color: black;
            }
            span{
                font-size: 12px;
                color: gray;
                width: 100%;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    vertical-align: middle;
            }
        }
        div:nth-child(4){
            flex: 1;
            display: flex;
            //flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .type{
                 height: 18px!important;
                background: rgb(233, 224, 208);
                color: rgb(167, 142, 96);
                font-size: 12px;
            }
            span:nth-child(2){
               
                color: gray;
                font-size: 12px;
            }
        }
    }
}
</style>