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

    // wx.getSetting({
    //   success: (settingRes)=>{
    //     // 已经授权
    //     if(settingRes.authSetting['scope.userInfo']) {
    //       console.log('已授权')
    //         wx.getUserInfo({
    //         success: (result)=>{
    //           console.log(result)
    //         },
    //         fail: ()=>{},
    //         complete: ()=>{}
    //       });
    //     } else {
    //       console.log('未授权')
    //     }
    //   },
    //   fail: ()=>{},
    //   complete: ()=>{}
    // });
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
  }
})
