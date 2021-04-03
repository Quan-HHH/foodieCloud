// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'quanjiaxin1010-7gfvjtzicb90119c'

cloud.init()
const db = cloud.database({ env })

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const collectionInfo = await db.collection('collection').get()
  return collectionInfo
}