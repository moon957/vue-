<template>
  <div id="n-writepinglun">
      <div class="write-block">
          <div>
              <img src="public/dianinfo/icon/xiepinglun.png" alt=""/>
              <span>写评论</span>
          </div>
      </div>
   
  </div>
</template>

<script>
export default {
  name: 'n-writepinglun',
  data () {
    return {
     
    }
  }
}
</script>

<style lang="scss" scoped>
#n-writepinglun{
    width: 100%;
     height: 3rem;
     position: fixed;
        left: 0;
        bottom: -9px;
        z-index: 100;
     background: white;
    .write-block{
        width: 100%;
       
        background: white;
       
        div{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding:10px 0;
            box-sizing: border-box;
            img{
                width: 25px;
                height: 25px;
            }
            span{
                font-size: 14px;

            }
        }
    }
}
</style>