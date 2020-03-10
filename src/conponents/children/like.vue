<template>
  <div id="n-like">
      <div class="like-block">
          <div>
              <span>猜你喜欢</span>
              </div>
          <div>
              <span>换一批</span>
              </div>
      </div>
   
  </div>
</template>

<script>
export default {
  name: 'n-like',
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
#n-like{
    width: 100%;
    height: 3rem;
    background: white;
    margin-top: 10px;
    .like-block{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
       justify-content: flex-end;
        align-content: flex-end;
        div:nth-child(1){
            width: 33.33333336%;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            
            span{
                padding:1rem 0;
                box-sizing: border-box;
                display: block;
                width: 8rem;
                height: 100%;
                background-image: url("http://localhost:8080/public/header/bg.jpg");
                background-repeat: no-repeat;
                background-size: 100% 110%;
            }
        }
        div:nth-child(2){
            padding: 0 10px 0 0;
            box-sizing: border-box;
             width: 33.33333336%;
             text-align: end;
             //display: flex;
             align-content: center;
             
             span{
                 display: inline-block;
                 font-size: 12px;
                 padding:1rem 0;
                 box-sizing: border-box;
             }
        }
    }
}
</style>