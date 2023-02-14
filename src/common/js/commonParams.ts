const getClientParam = window.client.getNormalParams(JSON.stringify({}))

const getCommonParams = () => {
  return getClientParam
}
const postCommonParams = () => {
  const str = getClientParam
  const arr = str.split('&')
  const obj:any = {}
  arr.map((val:any) => {
    const news = val.split('=')
    obj[news[0]] = news[1]
  })
  return obj
}
export {
  getCommonParams,
  postCommonParams
}
