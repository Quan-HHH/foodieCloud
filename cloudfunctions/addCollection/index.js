// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'quanjiaxin1010-7gfvjtzicb90119c'

cloud.init()
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  let collectionInfo = await db.collection('collection').where({
    ctPoi: event.ctPoi
  }).get()
  // 如果collectionInfo;
  if(collectionInfo.data.length > 0) { // 有值, 则删除
    await db.collection('collection').where({
      ctPoi: event.ctPoi
    }).remove()
    return false
  } else { // 没有值, 则添加
    await db.collection('collection').add({
      data: {
        ...event,
      }
    })
    return true
  }
}