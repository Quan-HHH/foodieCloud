const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    city: '北京',
    statusBarStyle: "",
    navBarStyle: "",
    barHeight: "",
    vanMenuStickyTop: 0,
    iconItem: [],
    option1: [
      { text: '全部类目', value: 0 },
      { text: '火锅烤肉', value: 1 },
      { text: '小吃快餐', value: 2 },
      { text: '饮品店', value: 3 },
      { text: '其他美食', value: 4 },
    ],
    option2: [
      { text: '智能排序', value: 0 },
      { text: '价格最低', value: 1 },
      { text: '好评优先', value: 2 },
    ],
    option3: [
      { text: '筛选', value: 0 },
      { text: '免预约', value: 1 },
      { text: '节假日可用', value: 2 },
    ],
    value1: 0,
    value2: 0,
    value3: 0,
    foodList: [],
  },

  searchFood: function(e) {
    let value = e.detail.value
    if(value !== "") {
      let newFoodList = app.globalData.foodList.filter(item => item.name.indexOf(value) >= 0)
      this.setData({
        foodList: newFoodList
      })
    } else {
      this.setData({
        foodList: app.globalData.foodList
      })
    }
  },

  searchFoodBySort: function({ detail }) {
    let value2 = this.data.value2
    if(detail !== 0) {
      let newFoodList = app.globalData.foodList.filter(item => item.value === detail)
      if(value2 !== 0) {
        newFoodList = newFoodList.sort((a, b) => value2 === 1 ? a.avgPrice - b.avgPrice : b.avgScore - a.avgScore)
      }
      this.setData({
        foodList: newFoodList
      })
    } else {
      this.setData({
        foodList: app.globalData.foodList
      })
    }

  },
  searchFoodByRate: function({ detail }) {
    if(detail !== 0) {
      let newFoodList =
        this.data.foodList.sort((a, b) => detail === 1 ? a.avgPrice - b.avgPrice : b.avgScore - a.avgScore)
      this.setData({
        foodList: newFoodList,
        value2: detail
      })
    } else {
      this.setData({
        foodList: this.data.foodList,
        value2: detail
      })
    }

  },
  toDetail: function(e) {
    console.log(e)
    wx.navigateTo({
      url: `/pages/detail/detail?id=${e.currentTarget.dataset.id}`,
      success: (result) => {

      },
      fail: () => {},
      complete: () => {}
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: `${wx.baseUrl}/sortItem`,
      method: 'get',
      success: (res) => {
        this.setData({
          iconItem: res.data
        })
      },
      fail: () => {}
    })

    wx.request({
      url: `${wx.baseUrl}/foodList`,
      method: 'get',
      success: (res) => {
        this.setData({
          foodList: res.data.poiInfos
        })
        app.globalData.foodList = res.data.poiInfos
        console.log(app.globalData)
      },
      fail: () => {}
    })

    let statusBarStyle = `height: ${wx.db.statusBarHeight}px`
    let navBarStyle = `height: ${wx.db.navBarHeight}px`
    let barHeight = wx.db.statusBarHeight + wx.db.navBarHeight
    let vanMenuStickyTop = barHeight
    this.setData({
      statusBarStyle,
      navBarStyle,
      barHeight,
      vanMenuStickyTop
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