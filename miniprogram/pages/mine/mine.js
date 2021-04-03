// miniprogram/pages/mine/mine.js
//获取应用实例
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    showTwoCode: false,
  },

  Comment(){
    wx.navigateTo({
      url: 'comment/comment'
    })
  },

  Collection(){
    wx.navigateTo({
      url: 'collection/collection'
    })
  },

  Address(){
    wx.navigateTo({
      url: 'address/address'
    })
  },

  showDialog: function () {
    this.setData({ showD: true })
    const beforeClose = (action) => new Promise((resolve) => {
      setTimeout(() => {
        if (action === 'confirm') {
          resolve(true);
        } else {
          // 拦截取消操作
          resolve(false);
        }
      }, 1000);
    });
    Dialog.confirm({
      message: '确认退出登录吗',
      beforeClose
    });
  },

  onClose: function () {
    this.setData({ showD: false })
  },

  logout(){
    wx.navigateTo({
      url: 'address/address'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function () {
    
    
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
