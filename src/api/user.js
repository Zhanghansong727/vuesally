import request from '@/utils/request'

const login = (data) => {
  return request({
    url: '/admin/login',
    method: 'POST'
  })
}
// const getUserInfo = () => {
//   return request({ url: '/sys/userInfo', method: 'GET' })
// }

// const getMenus = () => {
//   return request({ url: '/sys/menu/nav', method: 'GET' })
// }

// const logout = () => {
//   return request({ url: '/logout', method: 'POST' })
// }

export default {
  login
  // getUserInfo,
  // getMenus,
  // logout
}
