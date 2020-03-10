<template>
  <div id="n-zhiheader">
      <div class="zhifu-block">
          <img @click="back()" src="public/icon/back.png" alt=""/>
          <span>支付订单</span>
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'n-zhiheader',
  data () {
    return {
      
    }
  },
  methods:{
    back(){
       //this.$router.push("dianinfo");
       window.history.go(-2)
    }
  }
}
</script>

<style lang="scss" scoped>
#n-zhiheader{
    width: 100%;
    .zhifu-block{
        width: 100%;
        height: 3rem;
        background: white;
        display: flex;
        align-items: center;
        padding:0 10px;
        box-sizing: border-box;
        img{
            width: 20px;
            height: 20px;
            vertical-align: middle;
        }
        span{
            font-size: 16px;
            color: black;
            padding:0 1rem;
            
        }
    }
}
</style>