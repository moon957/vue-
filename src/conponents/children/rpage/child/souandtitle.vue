<template>
  <div id="n-souandtit">
     <div class="st-block">
         <div>
             <p>{{name}}</p>
         </div>
         <div>
             <img src="public/r/meishi/icon/fd.png" alt=""/>
             <input type="text" placeholder="烤肉"/>
         </div>
     </div>
   
  </div>
</template>

<script>

export default {
  name: 'n-souandtit',
 props:{
        name:String
    },
  mounted(){
      var that=this;
  },
  data () {
    return {
     
    }
  }
}
</script>

<style lang="scss" scoped>
#n-souandtit{
    width: 100%;
    .st-block{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height:7rem;
        background: transparent;
        display: flex;
        flex-direction: column;
        padding:0 10px;
        box-sizing: border-box;
        div:nth-child(1){
            flex: 4;
            display: flex;
            align-items: center;
            justify-content:center;
            p{
                font-size: 20px;
                text-align: center;
            }
        }
         div:nth-child(2){
             position: relative;
            flex: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                width: 15px;
                height: 15px;
                position: absolute;
                left: 30px;
                top: 12px;
            }
            input{
                width: 90%;
                border: 1px solid silver;
                background: white;
                outline: none;
                border-radius:16px;
                height: 85%; 
                padding:0 0 0 30px;
                box-sizing: border-box;
            }
        }
    }
}
</style>