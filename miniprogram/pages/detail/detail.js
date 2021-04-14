const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    itemDetail: {},
    isCollect: false,
    commentList: [],
  },

  handleCollect: function() {
    // 调用云函数 把这条数据放到收藏列表中
    const self = this
    wx.cloud.callFunction({
      name: 'addCollection',
      data: {
        ...this.data.itemDetail,
      }
    }).then(res => {
      this.setData({
        isCollect: res.result
      })
    }).catch(err => {
      console.log(err)
    })
  },

  handleComment: function() {
    wx.navigateTo({
      url: `../fabu/fabu?id=${this.data.id}`,
      success: (result)=>{
        console.log(result)
      },
      fail: (err)=>{ console.log(err) },
      complete: ()=>{}
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const self = this
    const { id } = options
    const itemDetail = app.globalData.foodList.find(({poiid}) => poiid === id )
    wx.cloud.callFunction({
      name: 'isCollection',
      data: {
        id
      }
    }).then((res) => {
      this.setData({
        isCollect: res.result,
        id,
        itemDetail,
      })
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