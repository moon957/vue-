<template>
  <div id="n-tianqi">
    <div class="tianqi-block">
      <div class="today">
        <div class="address">
          <div @click="back()">
            <img src="public/icon/back.png" alt />
          </div>
          <div>
            <input type="text" class="inputer" value="苏州" />
          </div>
        </div>
        <div class="sk"></div>
        <div class="weatherblock"></div>
        <div class="advice"></div>
        <div class="qingkuang"></div>
      </div>
      <div>
        <ul class="list"></ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "n-tianqi",
  mounted() {
    var c = [1, 2, 3, 4, 5, 6]
      .join()
      .match(/\d+,\d+/g)
      .map(res => {
        return res.split(",").map(res => {
          return res;
        });
      });
    console.log(c);
    //http://v.juhe.cn/weather/index
    //cityname=%E8%8B%8F%E5%B7%9E&dtype=json&format=1&key=6d1f7529ac9b9e47ac02a812ce4bb780
    //6d1f7529ac9b9e47ac02a812ce4bb780
    //%E8%A5%BF%E5%AE%89
    //"<span>"+data.result.future[a].weather+"</span>"
    this.$("#n-tianqi").css({
      height: this.$(window).height()
    });
    var that = this;
    var inputer = document.getElementsByClassName("inputer")[0];
    var weatherblock = document.querySelector(".weatherblock");
    var advice = document.querySelector(".advice");
    var qingkuang = document.querySelector(".qingkuang");
    var sk = document.querySelector(".sk");
    var week = document.querySelector("#week");
    var list = document.querySelector(".list");

    this.show();
    inputer.onchange = function() {
      sk.innerHTML = "";
      weatherblock.innerHTML = "";
      advice.innerHTML = "";
      qingkuang.innerHTML = "";
      list.innerHTML = "";
      that.show();
    };
  },
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.back();
    },
    show() {
      var that = this;
      var inputer = document.getElementsByClassName("inputer")[0];
      var weatherblock = document.querySelector(".weatherblock");
      var advice = document.querySelector(".advice");
      var qingkuang = document.querySelector(".qingkuang");
      var sk = document.querySelector(".sk");
      var week = document.querySelector("#week");
      var list = document.querySelector(".list");

      this.$.ajax({
        method: "get",
        url:
          "http://v.juhe.cn/weather/index?cityname=" +
          inputer.value +
          "&dtype=json&format=1&key=6d1f7529ac9b9e47ac02a812ce4bb780",
        dataType: "jsonp",
        jsonpCallback: "datalist",
        success: function(data) {
          //console.log(data);
          var num = 0;
          sk.innerHTML = data.result.sk.temp;
          weatherblock.innerHTML +=
            "<span id='w'>" + data.result.today.weather + "</span>";
          advice.innerHTML =
            "<span id='a'>" + data.result.today.dressing_advice + "</span>";
          qingkuang.innerHTML +=
            "<span>今天</span>" +
            "<span>" +
            data.result.today.week +
            "</span>" +
            "<span id='q'>" +
            data.result.today.temperature +
            "</span>";
          for (var index in data.result.future) {
            if (num <= 5) {
              num++;
              var count = parseInt(index.substr(10, 2)) + 1;
              if (count < 10) {
                count = "0" + count;
              }

              var a = index.substr(0, 10) + count;
              //console.log(a,count,num);
              // console.log(data.result.future[a])
              list.innerHTML +=
                "<li>" +
                "<span>" +
                data.result.future[a].date.substr(4, 7) +
                "</span>" +
                "<span>" +
                data.result.future[a].week +
                "</span>" +
                "<span>" +
                data.result.future[a].weather +
                "</span>" +
                "<span>" +
                data.result.future[a].temperature +
                "</span>" +
                "</li>";
              // image(data.result.future[a].weather,num);
              //console.log(data.result.future[a].weather);
            }
            that
            .$(".list")
            .find("li")
            .css({
              flex: 1,
              display: "flex",
              flexdirection: "row",
              lineheight: 60 + "px"
            }).find("span").css({
                flex:1,
                display:"block"
            }).eq(2).css({
                flex:2,
                display:"block",
               
            });
            // that.$(".list").find("span").eq(2).css({
            //     flex:2,
            //     display:"block",
            //     fontSize:13+"px"
            // });
       
          }
          
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#n-tianqi {
  width: 100%;
  height: 100%;
  .tianqi-block {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-image: url("../../assets/tianqi.jpg");
    background-repeat: no-repeat;
    background-size: 100%;
    div:nth-child(1) {
      flex: 3;
      display: flex;
      flex-direction: column;
      padding: 0 10px;
      box-sizing: border-box;
      .address {
        flex: 1;
        text-align: center;
        justify-items: center;
        align-items: center;
        display: flex;
        flex-direction: row;
        padding: 10px 0;
        box-sizing: border-box;
        div:nth-child(1) {
          flex: 1;
          display: flex;
          justify-content: flex-start;
          img {
            margin: 0 0 0 -20px;
            width: 20px;
            height: 20px;
          }
        }
        div:nth-child(2) {
          flex: 10;
          background: transparent;
          border: none;
          input {
            width: 100%;
            height: 35px;
            border: 1px solid black;
            padding-left: 10px;
            box-sizing: border-box;
            border-radius: 10px;
            outline: none;
          }
        }
      }
      .weatherblock {
        flex: 1;
        background: transparent;
      }
      .advice {
        flex: 1;
        background: transparent;
        display: flex;
        flex-direction: row;
      }
      .qingkuang {
        padding-top: 5px;
        flex: 1;
        display: flex;
        flex-direction: row;
        background: transparent;
      }
      .sk {
        flex: 2;
        font-size: 65px;
        color: deepskyblue;
        background: transparent;
        border: none;
      }
      .qingkuang {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        span:nth-child(1) {
          flex: 1;
          display: block;
        }
        span:nth-child(2) {
          flex: 1;
          display: block;
        }
        span:nth-child(3) {
          flex: 3;
          display: block;
          text-align: right;
        }
      }

      #w,
      #q {
        font-size: 16px;
        font-weight: bold;
        color: #717171;
      }
      #a {
        font-size: 14px;
        color: #858585;
      }
    }
    div:nth-child(2) {
      border-top: 1px solid #a8a8a8;
      flex: 6;
      background: white;
      padding: 0 10px;
      box-sizing: border-box;
      display: flex;
      .list {
        flex: 1;
        display: flex;
        flex-direction: column;
        li {
          flex: 1;
          display: flex;
          flex-direction: row;
          line-height: 60px;
          span:nth-child(1) {
            flex: 1;
          }
          span:nth-child(2) {
            flex: 1;
          }
          span:nth-child(3) {
            flex: 2;
            text-align: center;
          }
          span:nth-child(3) > img {
            width: 45px;
            height: 30px;
          }
          span:nth-child(4) {
            flex: 2;
            text-align: right;
          }
        }
      }
    }
  }
}
</style>