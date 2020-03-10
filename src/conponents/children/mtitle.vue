<template>
  <div id="n-mtitle">
    <div v-for="(items,index) in title" :key="index">
      <div class="n-mtitle-block">
        <div>
          <span>{{items.name}}</span>
        </div>
        <div>
          <span v-if="items.text">{{items.text}}</span>
        </div>
      </div>
      <nfouricon v-if="items.name=='我的资产'" :list="iconlist"></nfouricon>
    </div>
  </div>
</template>

<script>
import nfouricon from "../children/mfouricon.vue";
export default {
  name: "n-mtitle",
  components: {
    nfouricon
  },
  data() {
    return {
      title: [
        {
          name: "积分商城",
          text: "每日签到攒积分",
          action: "/jifen"
        },
        {
          name: "我的资产",
          text: "",
          action: "/jifen"
        },
        {
          name: "更多推荐",
          text: "",
          action: "/jifen"
        }
      ],
      iconlist: [
        {
          name: "糯米券",
          src: "public/icon/quan.png",
          action: ""
        },
        {
          name: "优惠券",
          src: "public/icon/youhui.png",
          action: ""
        },
        {
          name: "卡包",
          src: "public/icon/kabao.png",
          action: ""
        },
        {
          name: "余额",
          src: "public/icon/yue.png",
          action: ""
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#n-mtitle {
  width: 100%;

  .n-mtitle-block {
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: row;
    padding: 0 10px;
    box-sizing: border-box;
    background: white;
    margin: 10px 0 0 0;
    div:nth-child(1) {
      flex: 1;
      display: flex;
      align-items: center;

      span {
        font-size: 18px;
        font-weight: bold;
      }
    }
    div:nth-child(2) {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      span {
        position: relative;
        font-size: 12px;
        color: rgb(77, 75, 75);
        margin-right: 20px;
      }
      span::after {
        position: absolute;
        right: -15px;
        top: 6px;
        content: "";
        border: 3px solid;
        border-color: transparent transparent transparent black;
      }
    }
  }
}
</style>