<template>
  <div id="n-gongju">
      <div class="gongju-block">
          <div v-for="(items,index) in gongju" :key="index">
              <img :src="items.src" alt=""/>
              <span>{{items.name}}</span>
        </div>
          <!-- <div>
              <img src="public/icon/rili.png" alt=""/>
              <span>黄道吉日</span>
          </div>
          <div>
              <img src="public/icon/yusuan.png" alt=""/>
              <span>婚礼预算</span>
          </div> -->
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'n-gongju',
  props:{
      'gongju':Array
  },
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
#n-gongju{
    width: 100%;
    .gongju-block{
        width: 100%;
        display: flex;
        flex-direction: row;
        div:nth-child(1){
            img{
                width: 0;
                height: 0;
            }
            span{
                font-size: 16px;
            }
        }
        div{
            flex: 1;
            display: flex;
            flex-direction: row;
            padding: 1rem .5rem;
            box-sizing: border-box;
            align-items: center;
            justify-content: center;
            span{
                font-size: 14px;
                color: black;
                vertical-align: middle;
            }
            img{
                width: 25px;
                height: 25px;
                vertical-align: middle;
            }
        }
    }
}
</style>