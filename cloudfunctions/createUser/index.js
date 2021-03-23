// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'quanjiaxin1010-7gfvjtzicb90119c'

cloud.init()
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const userInfo = event.userInfo // openId: '', appId: ''
  let userDataInfo = await db.collection('user').where({
    openId: wxContext.OPENID
  }).get()
  if(userDataInfo.data.length !== 0) {
    // 已经登录授权过 直接更新信息
    await db.collection('user').doc(userDataInfo.data[0]._id).update({
      data: {
        ...event,
        openId: userInfo.openId
      }
    })
    return 123
  } else {
    await db.collection('user').add({
      data: {
        ...event,
        openId: userInfo.openId
      }
    })
    return 111
  }
}