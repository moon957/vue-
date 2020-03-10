<template>
  <div id="n-fouricon">
      <div class="icon-block">
          <div  v-for="(items,index) in list==null?iconlist:list" :key="index">
              <img :src="items.src" alt=""/>
              <p class="iconname">{{items.name}}</p>
          </div>
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'n-fouricon',
  props:[
      'list'
  ],
  mounted(){
      if(this.list==null){
           //console.log(this.$(".iconname").offset().top)
        this.icontop=this.$(".iconname").offset().top
      }
     
  },
  data () {
    return {
      icontop:null,
      iconlist:[{
          name:"待付款",
          src:"public/icon/daifukuan.png",
          action:""
      },
      {
          name:"可使用",
          src:"public/icon/keshiyong.png",
          action:""
      },{
          name:"待评价",
          src:"public/icon/daipingjia.png",
          action:""
      },{
          name:"全部订单",
          src:"public/icon/dingdan.png",
          action:""
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
#n-fouricon{
    width: 100%;
    height: 5rem;
    background: white;
    border-top:1px solid silver; 
    .icon-block{
        
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        div{
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            img{
                width: 30px;
                height: 30px;
            }
            p{
                font-size: 12px;
                color: rgb(80, 79, 79);
                display: block;
                margin: 8px 0 0 0;
            }
        }
    }
}
</style>