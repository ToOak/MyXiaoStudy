const util = require('../../util/timeUtil.js')
console.log("pages/home/home.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [
      "./image/img0.png",
      "./image/img1.png",
      "./image/img2.png",
      "./image/img3.png",
      "./image/img4.png",
      "./image/img5.png",
      "./image/img6.png",
      './image/rock.gif'
    ],
    // time:(new Date()).toString()
    // time: (new Date()).format("yyyy-MM-dd  HH:mm:ss")
    time: util.formatTime(new Date()),
    msg: '当前时间',
    timeColor: "orange",
    buttonLoading: false
  },


  requestNet:function(){
    wx.request({
      url: 'https://test.com/getinf',
      success :function(res){
        console.log(res)
      }
    })
  },


  chooseImg: function() {
    var that = this;
    wx.chooseImage({
      count: 6,
      sizeType: ["original", 'compressed'],
      sourceType: ["album", "camera"],
      success: function(res) {
        console.log(that)
        console.log(that.data)
        console.log(that.data.imgList)
        var tempList = that.data.imgList.concat(res.tempFilePaths);
        console.log(res.tempFilePaths)
        console.log(tempList)
        that.setData({
          imgList: tempList
        })
      },
    })
  },

  previewImg: function(e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current,
      urls: this.data.imgList
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  clickMe: function() {
    this.setData({
      buttonLoading: true
    })
    var that = this;
    setTimeout(function() {
      that.setData({
        buttonLoading: false
      })
      wx.previewImage({
        current: 'https://img1.gtimg.com/10/1048/104857/10485726_980x1200_0.jpg',
        urls: [ // 所有图片的URL列表，数组格式
          'https://img1.gtimg.com/10/1048/104857/10485731_980x1200_0.jpg',
          'https://img1.gtimg.com/10/1048/104857/10485726_980x1200_0.jpg',
          'https://img1.gtimg.com/10/1048/104857/10485729_980x1200_0.jpg'
        ],
        success: function(res) {
          console.log(res)
        }
      })
    }, 1000)
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
    var that = this;
    setInterval(function() {
      that.setData({
        time: util.formatTime(new Date())
      })
    }, 1000);
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
    setTimeout(function() {
      wx.stopPullDownRefresh()
      wx.showModal({
        title: '刷新失败',
        content: '没有需要刷新的东西',
        confirmText: "确定",
        cancelText: "取消",
        cancelColor: "#f00",
        success: function(res) {
          if (res.confirm) {
            wx.showToast({
              title: '已点击确定',
              icon: "success",
              duration: 1500
            })
          } else if (res.cancel) {
            wx.showToast({
              title: '已点击取消',
              duration: 1500
            })
          }
        }
      })

    }, 1000)
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
    return {
      title: "自定义转发标题",
      path: "pages/log/log"
    }
  }
})