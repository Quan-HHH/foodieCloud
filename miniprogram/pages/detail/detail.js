const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    itemDetail: {},
    footer: [
      {
        icon: "icon-daka",
        text: "去打卡"
      },
      {
        icon: "icon-shipin",
        text: "传视频"
      },
      {
        icon: "icon-zhaopian",
        text: "传照片"
      },
      {
        icon: "icon-icon-test",
        text: "写评价"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { id } = options
    const itemDetail = app.globalData.foodList.find(({poiid}) => poiid === id )
    console.log(itemDetail)
    this.setData({
      id,
      itemDetail,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})