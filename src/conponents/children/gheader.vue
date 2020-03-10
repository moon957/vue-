<template>
  <div id="n-gheader">
      <div class="gheaader-block">
          <div>{{headertitle}}</div>
          <div>
              <img src="public/header/fd.png" alt=""/>
          </div>
      </div>
   
  </div>
</template>

<script>
export default {
  name: 'n-gheader',
  props:[
      'headertitle'
  ],
  mounted(){
      //console.log(this.headertitle);
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
#n-gheader{
    width: 100%;
    .gheaader-block{
        position: fixed;
        left: 0;
        top: 0;
        z-index: 100;
        width: 100%;
        height: 3rem;
        background: white;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        padding:0 10px;
        box-sizing: border-box;
        border-bottom:1px solid rgb(245, 244, 244); 
        div:nth-child(1){
            width: 33.3333336%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        div:nth-child(2){
            width: 33.33333336%;
             display: flex;
            align-items: center;
            justify-content: flex-end;
            img{
                width: 20px;
                height: 20px;            
                }
        }
    }
}
</style>