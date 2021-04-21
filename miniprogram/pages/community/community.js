let app = getApp();
Page({
  data: {
    dataList: []
  },

  onLoad() {
    console.log(12313213123123213)
    let that = this;
    wx.cloud.database().collection('timeline')
      .orderBy('createTime', 'desc') //按发布视频排序
      .get({
        success(res) {
          console.log("请求成功", res)
          that.setData({
            dataList: res.data
          })
        },
        fail(res) {
          console.log("请求失败", res)
        }
      })
      this.setData({
        userInfo: app.globalData.userInfo
      })
  },
  // 预览图片
  previewImg: function(e) {
    let imgData = e.currentTarget.dataset.img;
    console.log("eeee", imgData[0])
    console.log("图片s", imgData[1])
    wx.previewImage({
      //当前显示图片
      current: imgData[0],
      //所有图片
      urls: imgData[1]
    })
  },

})