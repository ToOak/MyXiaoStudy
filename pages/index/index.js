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
    ]
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