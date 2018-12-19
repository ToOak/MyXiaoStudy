// pages/button/button.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'defualt',
    disabled: false, //按钮初始禁用状态
    plain: false, //按钮初始镂空状态
    loading: false, //按钮初始显示loading图标状态

    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: [
      "red", 'orange', "yellow", "green", "rgb(0,255,255)", 'blue', "pink", "purple"
    ],
    iconType: [
      "success", 'info', "warn", "waiting", "safe_success", "safe_warn", "success_circle", "success_no_circle",
      "waiting_circle", "circle", 'download', "info_circle", "cancel", 'search', "clear"
    ],

    var1: "开",
    var2: "关"
  },

  switch1Change: function(e) {
    console.log("switch1发生change事件，携带值为：", e.detail.value)
    this.setData({
      var1: e.detail.value ? "开" : "关"
    })
  },

  switch2Change: function(e) {
    console.log("switch2发生change事件，携带值为：", e.detail.value)
    this.setData({
      var2: e.detail.value ? "开" : "关"
    })
  },

  // setDisabled: e => {
  setDisabled: function(e) {
    this.setData({
      disabled: !this.data.disabled
    })
  },

  setPlain: function(e) {
    this.setData({
      plain: !this.data.plain
    })
  },
  setLoading: function(e) {
    this.setData({
      loading: !this.data.loading
    })
  },
  default: function(e) {
    var d = this.data.defaultSize === 'default' ? 'mini' : 'default';
    this.setData({
      defaultSize: d
    })
  },
  // primary: e => {
  primary: function(e) {
    var d = this.data.primarySize === 'default' ? 'mini' : 'default'
    this.setData({
      primarySize: d
    })
  },
  // warn: e => {
  warn: function(e) {
    var d = this.data.warnSize === 'default' ? 'mini' : 'default'
    this.setData({
      warnSize: d
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