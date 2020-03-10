<template>
  <div id="n-zhifu">
      <nzhiheader></nzhiheader>
    <div class="z-first-block">
        <div>
            <span>{{name}}</span>
            <span>￥<span>{{jiage}}</span></span>
        </div>
        <div>
            <span>数量</span>
            <div class="number">
                <span>-</span>
                 <span>1</span>
                  <span>+</span>
            </div>
        </div>
        <div>
            <span>小计</span>
            <span>￥<span>67</span></span>
        </div>
    </div>
    <div class="denglu-text">
        <span>免登陆直接购买</span><span>或<span>立即登录</span></span>
    </div>
    <div class="shoujihao-block">
        <div>
            <div>
                <img src="public/icon/shouji.png" alt=""/>
                <input placeholder="请输入手机号" type="text"/>
            </div>
            <div>
                <span>获取验证码</span>
            </div>
        </div>
        <div>
            <img src="public/icon/yaoshi.png" alt=""/>
            <input placeholder="请输入手机号" type="text"/>
        </div>
    </div>
    <div class="queren">
        <span>确认</span>
    </div>
  </div>
</template>

<script>
import nzhiheader from './child/header.vue'
export default {
  name: 'n-zhifu',
  components:{
      nzhiheader
  },
  mounted(){
      //console.log(this.$route.query.name);
      this.name=this.$route.query.name;
      this.jiage=this.$route.query.jiage;
  },
  data () {
    return {
      name:null,
      jiage:null
    }
  }
}
</script>

<style lang="scss" scoped>
#n-zhifu{
    width: 100%;
    .z-first-block{
        width: 100%;
        height: 8rem;
        background: white;
        display: flex;
        flex-direction: column;
        padding: 0 10px;
        box-sizing: border-box;
        margin: 10px 0 0 0;
        div:nth-child(1){
            flex: 1;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            border-bottom:1px solid rgb(245, 243, 243); 
            span{
                font-size: 12px;
                color: black;
            }
        }
        div:nth-child(2){
            flex: 1;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            border-bottom:1px solid rgb(245, 243, 243); 
            span:nth-child(1){
                font-size: 12px;
                color: black;
            }
            .number{
                font-size: 0;
                flex: 0;
                span:nth-child(1),span:nth-child(3){
                    width: 25px;
                    height: 20px;
                    border: 1px solid gray;
                    display: inline-block;
                    font-size: 22px;
                    text-align: center;
                    line-height: 20px;
                }
                span:nth-child(2){
                    width: 35px;
                    height: 20px;
                    border: 1px solid gray;
                    display: inline-block;
                    font-size: 15px;
                    text-align: center;
                    line-height: 20px;
                }
            }
        }
        div:nth-child(3){
            flex: 1;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            span{
                font-size: 12px;
                color:black;
            }
        }
    }
    .denglu-text{
        width: 100%;
        height: 3rem;
        padding: 1rem 10px;
        box-sizing: border-box;
        span:nth-child(1){
            font-size: 14px;
            color: black;
        }
        span:nth-child(2){
            font-size: 14px;
            color: black;
            span{
                color: red;
            }
        }
    }
    .shoujihao-block{
        width: 100%;
        height: 5rem;
        display: flex;
        flex-direction: column;
        background: white;
        padding:0 10px;
        box-sizing: border-box;
        div:nth-child(1){
            flex: 1;
            display: flex;
            flex-direction: row;
            div:nth-child(1){
                flex: 4;
                display: flex;
                align-items: center;
                //justify-content: center;
                img{
                    width: 20px;
                    height: 20px;
                     vertical-align: middle;
                }
                input{
                    width: 60%;
                    height: 100%;
                    border: none;
                    outline: none;
                     vertical-align: middle;
                      padding:0 0 0 10px;
                }
            }
            div:nth-child(2){
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                span{
                    color: gray;
                    font-size: 13px;
                }
            }
        }
        div:nth-child(2){
            flex: 1;
            display: flex;
            flex-direction: row;
            align-items: center;
            img{
                width: 20px;
                height: 20px;
                vertical-align: middle;
            }
            input{
                 width: 60%;
                    height: 100%;
                    border: none;
                    outline: none;
                    vertical-align: middle;
                    padding:0 0 0 10px;
            }
        }
    }
    .queren{
        width: 100%;
        height: 3rem;
        background: silver;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px 0 0 0;
        border-radius:15px; 
        span{
            color: white;
            font-size: 14px;
        }
    }
}
</style>