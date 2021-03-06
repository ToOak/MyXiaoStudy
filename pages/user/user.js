// pages/user/user.js
const app = getApp()
Page({

 /**
  * 页面的初始数据
  */
 data: {
  userInfo: {},
  hasUserInfo: false,
  canIUse: wx.canIUse("button.open-type.getUserInfo"),

  longitude: 113.22,
  latitude: 33.97
 },

 /**
  * 生命周期函数--监听页面加载
  */
 onLoad: function(options) {
  if (app.globalData.userInfo) {
   this.setData({
    userInfo: app.globalData.userInfo,
    hasUserInfo: true
   })
  } else if (this.data.canIUse) {
   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
   // 所以此处加入 callback 以防止这种情况
   app.userInfoReadyCallback = res => {
    this.setData({
     userInfo: res.userInfo,
     hasUserInfo: true
    })
   }
  } else {
   // 在没有 open-type=getUserInfo 版本的兼容处理
   wx.getUserInfo({
    success: res => {
     app.globalData.userInfo = res.userInfo
     this.setData({
      userInfo: res.userInfo,
      hasUserInfo: true
     })
    }
   })
  }

  wx.getLocation({
   type: "wgs84",
   // success: function (res) {
   success: res => {
    var tempLatitude = res.latitude //纬度
    var tempLongitude = res.longitude //纬度
    this.setData({
     longitude: tempLongitude,
     latitude: tempLatitude
    })
   },
  })
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

 },

 //事件处理函数
 bindViewTap: function() {
  // TODO 为啥不行？
  wx.navigateTo({
   url: '../log/log'
   // url:'../button/button'
  })
 },

 getUserInfo: function(e) {
  console.log(e)
  app.globalData.userInfo = e.detail.userInfo
  this.setData({
   userInfo: e.detail.userInfo,
   hasUserInfo: true
  })
 },

 clickMe: function() {
  this.setData({
   msg: "Hello World"
  })
  wx.scanCode({
   success: res => {
    console.log(res)
    this.setData({
     msg: JSON.stringify(res)
    })
   }
  })

 },
})