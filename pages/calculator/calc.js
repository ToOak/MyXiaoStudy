// pages/calculator/calc.js
Page({

 /**
  * 页面的初始数据
  */
 data: {
  num1: '',
  num2: '',
  result: ""
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