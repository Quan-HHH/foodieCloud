//app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'quanjiaxin1010-7gfvjtzicb90119c',
        traceUser: true,
      })
    }

    wx.db = {}
    let info = wx.getSystemInfoSync();
    wx.db.statusBarHeight = info.statusBarHeight

    if(info.platForm === 'android') {
      wx.db.navBarHeight = 48
    } else {
      wx.db.navBarHeight = 44
    }

    wx.baseUrl = 'http://localhost:8080'

    this.globalData = {
      userInfo: null
    }
  },

  //获取当前时间,返回时间格式：2021-04-13 21:43:36
  getNowFormatDate: function () {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
     strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
     " " + date.getHours() + seperator2 + date.getMinutes() +seperator2 + date.getSeconds();
    return currentdate;
  }
})
