export default {

  /**
   * @summary 获取当前页面连接中指定参数
   * @type {function}
   * @param {string} param1           - 如果param2为undefined，param1是指从当前页面url中获取指定参数的key, 如果param2不为空，param1为指定的url
   * @param {string} param2           - 可选参数，如果param2存在，则从指定的param1连接中获取对应参数的key
   * @return {string|null}
   */
  getParam(name:string): string | null {
    //获取连接参数
    // eslint-disable-next-line prefer-rest-params
    const u = arguments[1] || unescape(window.location.href),
    reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)'),
    r = u.substr(u.indexOf('?') + 1).match(reg)
    return r != null ? decodeURI(r[2]) : ''
  },
  /**
   * @summary 向指定url中添加多个参数
   * @type {function}
   * @param {string} url            - 指定url链接
   * @param {string|object} param   - 为string时,param表示key，param2标志value; object时，忽略param2，将对象中所有属性添加到url中
   * @param {string} param2         - 当param为string时生效，标志value
   * @return {string}
   */
  setParams(url:any, param:any, param2?:any ): string {
    //只添加1个参数
    if (typeof param === 'string' && typeof param2 !== 'undefined') {
      url = this._setParam(url, param, param2)
      //添加多个参数
    } else if (typeof param === 'object') {
      for (const i in param) {
        url = this._setParam(url, i, param[i])
      }
    }

    return url
  },
  /**
   * @summary 向指定url中添加参数
   * @type {function}
   * @param {string} url            - 指定url链接
   * @param {string} key            - 参数的键
   * @param {string} value          - 参数的值
   * @return {string}
   */
  _setParam(url:any, name:any, val:any): string {
    let hash
    try {
      if (
        typeof url !== 'undefined' &&
        typeof name !== 'undefined' &&
        typeof val !== 'undefined'
      ) {
        val = encodeURIComponent(val)

        const urlArr = url.split('#')
        hash = urlArr[1] || ''
        url = urlArr[0]

        if (url.indexOf('?') === -1) {
          url += '?' + name + '=' + val
        } else {
          const urlParamArr = url.split('?')
          const pStr = urlParamArr[1]
          const pArr = pStr.split('&')
          let findFlag = false

          pArr.forEach(function (item:any, index:any) {
            const paramArr = item.split('=')
            if (name === paramArr[0]) {
              findFlag = true
              pArr[index] = name + '=' + val

              return false
            }
          })

          if (!findFlag) {
            url += '&' + name + '=' + val
          } else {
            url = urlParamArr[0] + '?' + pArr.join('&')
          }
        }
      }
    } catch (e) {
      console.log(e)
    }

    if (hash) url += '#' + hash

    return url
  },
}
