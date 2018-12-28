import wepy from 'wepy'
import { API } from '@/common'
import { HTTP } from 'wepy-utils'

export default class LoginMixin extends wepy.mixin {
  // 获取缓存 sessionKey
  getStroageOpenid () {
    wepy.getStorage({
      key: 'openid',
      success: (res) => {
        this.openid = res.data
        this.$apply()
      },
      fail: (error) => {
        this.login()
      }
    })
  }
  // 写入缓存 sessionKey
  setStorageOpenid (data) {
    wepy.setStorage({
      key: 'openid',
      data: data,
      success: (res) => {
        this.openid = data
        this.$apply()
        console.log('openid 缓存成功:', data)
      }
    })
  }
  // 登录认证
  login () {
    wepy.login({
      success: (res) => {
        if (res.code) {
          let url = API.login
          let params = {
            code: res.code
          }
          HTTP.get({
            url: url,
            params: params
          }).then((res) => {
            console.log(res)
            this.setStorageOpenid(res.openid)
          }).catch((error) => {
            console.log(error)
          })
        }
      }
    })
  }
}