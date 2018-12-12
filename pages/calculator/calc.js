// pages/calculator/calc.js
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
  id20: "equ" //等号
 },

 clickButton: function(e) {//单击事件处理函数

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