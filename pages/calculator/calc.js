// pages/calculator/calc.js


var calculate = function(data1, oper, data2) {
  var data;
  data1 = parseFloat(data1);
  data2 = parseFloat(data2);
  switch (oper) {
    case "+":
      data = data1 + data2;
      break;
    case "-":
      data = data1 - data2;
      break;
    case "*":
      data = data1 * data2;
      break;
    case "/":
      if (data2 !== 0) {
        data = data1 / data2;
      } else {
        data = 0;
      }
      break;
  }
  return data;
};


Page({

  /**
   * 页面的初始数据
   */
  data: {
    num1: '',
    num2: '',
    result: "",

    number1: "",
    number2: "",
    result2: "",

    result: "0", //计算结果
    id1: "history", //历史
    id2: "clear", //清除（删除所有）
    id3: "back", //回退（删除最后一个）
    id4: "div", //除
    id5: "num_7",
    id6: "num_8",
    id7: "num_9",
    id8: "mul", //乘
    id9: "num_4",
    id10: "num_5",
    id11: "num_6",
    id12: "sub", //减
    id13: "num_1",
    id14: "num_2",
    id15: "num_3",
    id16: "add", //加
    id17: "negative", //取负
    id18: "num_0",
    id19: "dot", //小数点
    id20: "equ", //等号

    temp: "0", //上次的临时结果
    lastoper: "+", //上一次的运算符
    flag: false //上一次非数字按钮标志
  },

  clickButton: function(e) { //单击事件处理函数
    var data = this.data.result; // 获取上一个结果值

    var temp = this.data.temp; // 取上次的临时结果
    var lastoper1 = this.data.lastoper; //上一次的运算符
    var noNumFlag = this.data.flag; //上一次非数字按钮标志

    if (e.target.id >= 'num_0' && e.target.id <= 'num_9') { //判断是否按了数字按钮
      data += e.target.id.split("_")[1]; //正常情况串接输入的值
      if (this.data.result == "0" || noNumFlag) { //原值为0 或 上次按为非负数
        data = e.target.id.split("_")[1]; //用输入的值代替
      }
      noNumFlag = false;
    } else { //不是数字按钮
      noNumFlag = true;
      console.log(e.target.id); //在控制台输出按钮的id
      if (e.target.id == "dot") { // 小数点
        noNumFlag = false;
        if (data.toString().indexOf(".") == -1) { //输入的值不包括小数点
          data += ".";
        }
      } else if (e.target.id == "clear") { //清除按钮
        data = 0; //数据清0
        temp = 0; //清楚中间结果
        lastoper1 = "+"; //设置上次运算符号为加
      } else if (e.target.id == "negative") { //数字取负
        noNumFlag = false;
        data = -1 * data;
      } else if (e.target.id == "back") { //回退一个字符
        noNumFlag = false;
        if (data.toString().length > 1) { //长度超过一位数
          data = data.substr(0, data.toString().length - 1); //去掉最后一位
        } else { //长度只有一位
          data = 0; //置0
        }

      } else if (e.target.id == "div") { //除法
        data = calculate(temp, lastoper1, data);
        temp = data;
        lastoper1 = "/";
      } else if (e.target.id == "mul") { //乘法
        data = calculate(temp, lastoper1, data);
        temp = data;
        lastoper1 = "*";
      } else if (e.target.id == "add") { //加法
        data = calculate(temp, lastoper1, data);
        temp = data;
        lastoper1 = "+";
      } else if (e.target.id == "sub") { //减法
        data = calculate(temp, lastoper1, data);
        temp = data;
        lastoper1 = "-";
      } else if (e.target.id == "equ") { //等号
        data = calculate(temp, lastoper1, data);
        temp = 0;
        lastoper1 = "+";
      }

    }
    this.setData({
      result: data,
      lastoper: lastoper1,
      temp: temp,
      flag: noNumFlag
    })
  },

  bindAdd: function(e) {
    // 乘1操作将字符串转换为数值
    // 若不转换为数值 相加结果只是两个字符串相连（如"1"+"1"="11"，而不是2） 
    var r = this.data.num1 * 1 + this.data.num2 * 1
    this.setData({
      result: r
    })
  },

  bindInput1: function(e) {
    var n = e.detail.value
    if (!isNaN(n)) {
      this.setData({
        num1: n
      })
    }
  },

  bindInput2: function(e) {
    var n = e.detail.value
    console.info("bindInput2: " + n)
    if (!isNaN(n)) {
      this.setData({
        num2: n
      })
    }
  },

  bindSlider1: function(e) {
    var n = e.detail.value
    if (!isNaN(n)) {
      this.setData({
        number1: n
      })
    }
  },

  bindSlider2: function(e) {
    var n = e.detail.value
    if (!isNaN(n)) {
      this.setData({
        number2: n
      })
    }
  },

  bindAdd2: function(e) {
    var r = this.data.number1 * 1 + this.data.number2 * 1
    this.setData({
      result2: r
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})