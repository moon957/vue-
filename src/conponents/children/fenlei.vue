<template>
  <div id="fenlei">
    <div class="fen-block">
      <div class="fen-left">
        <div class="left-top">
          <router-link to="/jingxuan">
            <p>精选排行</p>
          <span>最好都在这里</span>
          <div>
            <img src="public/fenlei/huangguan.jpg" alt />
          </div>
        
          </router-link>
          </div>
        <div class="left-bottom">
          <div>
            <p>马力全开</p>
            <span>双森硬核开打</span>
          </div>

          <div>
            <img src="public/fenlei/sudu.jpg" alt />
          </div>
        </div>
      </div>
      <div class="fen-right">
        <div class="right-top">
          <router-link :to="{path:'/dianying',query:{name:'哪吒逆天改命'}}">
            <div>
              <p>最燃国漫</p>
            <span>哪吒逆天改命</span>
          </div>
          <div>
               <img src="public/fenlei/nezha.jpg" alt=""/>
          </div>
          </router-link>
        </div>
        <div class="right-middle">
          <router-link to="/dianying">
            <div>
              <p>最燃国漫</p>
            <span>哪吒逆天改命</span>
          </div>
          <div>
               <img src="public/fenlei/nezha.jpg" alt=""/>
          </div>
          </router-link>
        </div>
        <div class="right-bottom">
           <router-link to="/dianying">
            <div>
              <p>最燃国漫</p>
            <span>哪吒逆天改命</span>
          </div>
          <div>
               <img src="public/fenlei/nezha.jpg" alt=""/>
          </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fenlei",
  data() {
    return {};
  },
  methods:{
      
  }
};
</script>

<style lang="scss" scoped>
#fenlei {
  width: 100%;
  height: 16rem;
  background: white;
  margin: 10px 0;
  .fen-block {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
   
    .fen-left {
      flex: 1;
      display: flex;
      flex-direction: column;

      .left-top {
        flex: 2;
        width: 100%;
        border-right: 1px solid hsl(0, 8%, 95%);
        padding: 1.3rem 0 1.4rem 1rem;
        box-sizing: border-box;
        a{
          display: block;
          text-decoration: none;
           p {
          font-size: 16px;
          letter-spacing: 1.3rem;
          font-weight: 530;
        }
       span {
          font-size: 12px;
        }
      div {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        img {
            width: 50%;
            height: 50%;
          }
        }
      
        }
      }
      .left-bottom{
        padding: 1.3rem 0 0rem 1rem;
        box-sizing: border-box;
        flex: 1;
        border-top: 1px solid hsl(0, 8%, 95%);
        display: flex;
        flex-direction: row;
        div:nth-child(1) {
          flex: 1;
          p{
              font-size: 16px;
              font-weight: 530;
          }
          span{
              font-size: 12px;
          }
        }
        div:nth-child(2){
            flex: 1;
        
            img {
            width: 3.5rem;
            height: 3.5rem;
            
          }
        }
      }
    }
    .fen-right {
      flex: 1;
      display: flex;
      flex-direction: column;
      .right-top,.right-middle,.right-bottom{
        flex: 1;
        padding:1.3rem 0 0 1rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        border-bottom:1px solid  hsl(0, 8%, 95%);
        a{
          text-decoration: none;
          display: block;
          flex: 1;
          height: 100%;
          display: flex;
        flex-direction: row;
          div:nth-child(1){
            flex: 1;
            height: 100%;
            p{
                font-size: 16px;
                font-weight: 530;
            }
            span{
                font-size: 12px;
            }
        }
        div:nth-child(2){
            flex: 1;
           
            img{
               
             width: 3.5rem;
            height: 3.5rem;
            border-radius: 50%;
            }
        }
        }
        
      }
    }
  }
}
</style>