import axios, { AxiosResponse } from 'axios'
import request from '@/common/js/request'
import { getCommonParams, postCommonParams } from '@/common/js/commonParams'
// baseURL:
const api =
  process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API_URL : '/api'

// 首页空投
export async function AirDrop (params:any): Promise<AxiosResponse<unknown>> {
  return await request.get('/crypto/air-drop/index?' + getCommonParams(),
    {
      baseURL: api,
      headers: {
        'jwt-token': params.token,
        'Content-Type': 'application/json'
      }
    }
  )
}

// 用户详情
export async function userDeatail (params:any): Promise<AxiosResponse<unknown>> {
  return await request.get('/crypto/user/detail?' + getCommonParams(),
    {
      baseURL: api,
      headers: {
        'jwt-token': params.token,
        'Content-Type': 'application/json'
      }
    }
  )
}

// 商业单账户总额
export async function Account (params:any): Promise<AxiosResponse<unknown>> {
  return await request.get('/crypto/account/profile?' + getCommonParams(),
    {
      baseURL: api,
      headers: {
        'jwt-token': params.token,
        'Content-Type': 'application/json'
      }
    }
  )
}

// 领取空投
export async function takeAirPost (params:any): Promise<AxiosResponse<unknown>> {
  return axios.post('/crypto/air-drop/take-air-drop',
    {
      ...params,
      ...postCommonParams()
    },
    {
      baseURL: api,
      headers: {
        'jwt-token': params.token,
        'Content-Type': 'application/json'
      }
    }
  )
}

// 商业单档位
export async function gearOrder (params?:any): Promise<AxiosResponse<unknown>> {
  return await request.get('/crypto/withdraw/get-biz-order-gear?' + getCommonParams(),
    {
      baseURL: api,
      headers: {
        'jwt-token': params.token,
        'Content-Type': 'application/json'
      }
    }
  )
}

// 绑定定地址
export async function addrBind (params:any): Promise<AxiosResponse<unknown>> {
  return axios.post('/crypto/coin-addr/apply-bind',
    params.formData,
    {
      baseURL: api,
      headers: {
        'jwt-token': params.token,
        'Content-Type': 'multipart/form-data'
      }
    }
  )
}

// 绑定定地址2
export async function addrBind2 (params:any): Promise<AxiosResponse<unknown>> {
  return axios.post('/crypto/coin-addr/apply-bind2',
    params.formData,
    {
      baseURL: api,
      headers: {
        'jwt-token': params.token,
        'Content-Type': 'multipart/form-data'
      }
    }
  )
}

// 体现
export async function widthDrawPost (params:any): Promise<AxiosResponse<unknown>> {
  return axios.post('/crypto/withdraw/apply',
    {
      ...params,
      ...postCommonParams()
    },
    {
      baseURL: api,
      headers: {
        'jwt-token': params.token,
        'Content-Type': 'application/json'
      }
    }
  )
}

// 站内信列表
export async function MailMsg (params?:any): Promise<AxiosResponse<unknown>> {
  return await request.get('/crypto/mail-msg/recent-msg?' + getCommonParams(),
    {
      baseURL: api,
      headers: {
        'jwt-token': params.token,
        'Content-Type': 'application/json'
      }
    }
  )
}

// 站内信跟新已读
export async function MailMsgEd (params:any): Promise<AxiosResponse<unknown>> {
  return axios.post('/crypto/mail-msg/update-2-read',
    {
      ...params,
      ...postCommonParams()
    },
    {
      baseURL: api,
      headers: {
        'jwt-token': params.token,
        'Content-Type': 'application/json'
      }
    }
  )
}

// 站内信未读
export async function MailUnread (params:any): Promise<AxiosResponse<unknown>> {
  return await request.get('/crypto/mail-msg/get-unread-count?' + getCommonParams(),
    {
      baseURL: api,
      headers: {
        'jwt-token': params.token,
        'Content-Type': 'application/json'
      }
    }
  )
}

// 选择地区
export async function chooseCountry (params:any): Promise<AxiosResponse<unknown>> {
  return axios.post('/crypto/user/choose-country',
    {
      ...params,
      ...postCommonParams()
    },
    {
      baseURL: api,
      headers: {
        'jwt-token': params.token,
        'Content-Type': 'application/json'
      }
    }
  )
}

// 新手领取
export async function newUserPost (params:any): Promise<AxiosResponse<unknown>> {
  return axios.post('/crypto/air-drop/take-newer-gift',
    {
      ...params,
      ...postCommonParams()
    },
    {
      baseURL: api,
      headers: {
        'jwt-token': params.token,
        'Content-Type': 'application/json'
      }
    }
  )
}

// 绑定弹窗点击下载按钮上报
export async function ttEventReport (params:any): Promise<AxiosResponse<unknown>> {
  const comData = {
    ...params,
    ...postCommonParams()
  }
  const s = window.client.getEncodeParams(JSON.stringify(comData))
  return axios.post('/game/ttbrw/event/report',
    {
      s: s
    },
    {
      baseURL: api,
      headers: {
        'jwt-token': params.token,
        'Content-Type': 'application/json'
      }
    }
  )
}

// 任务积分墙
export async function cpiTask (params?:any): Promise<AxiosResponse<unknown>> {
  return await request.get('/crypto/task/get-list?' + getCommonParams(),
    {
      baseURL: api,
      headers: {
        'jwt-token': params.token,
        'Content-Type': 'application/json'
      }
    }
  )
}

// 领取任务奖励
export async function cpiTaskReward (params:any): Promise<AxiosResponse<unknown>> {
  console.log(process.env.VUE_APP_ENVIRONMENT)
  return axios.post('/crypto/task/take-reward',
    {
      ...params,
      ...postCommonParams()
    },
    {
      baseURL: api,
      headers: {
        'jwt-token': params.token,
        'Content-Type': 'application/json'
      }
    }
  )
}

// 绑定好友
export async function InviteBind (params:any): Promise<AxiosResponse<unknown>> {
  // return axios.post('/crypto/youtube/bind-youtube-command',
  return axios.post('/crypto/popularize/bind-code',
    {
      ...params,
      ...postCommonParams()
    },
    {
      baseURL: api,
      headers: {
        'jwt-token': params.token,
        'Content-Type': 'application/json'
      }
    }
  )
}
