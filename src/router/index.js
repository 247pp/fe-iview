import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import iView from 'iview'
// import { setToken, getToken, canTurnTo } from '@/libs/util' // 暂时注掉
import { getToken, canTurnTo } from '@/libs/util'
import config from '@/config'

const { homeName } = config

Vue.use(Router)
const router = new Router({
  routes
  // mode: 'history' //注掉后才能正确部署，否则需要部署的web服务器进行相应的设置
})
const LOGIN_PAGE_NAME = 'login'

const turnTo = (to, access, next) => {
  if (canTurnTo(to.name, access, routes)) {
    next()
  } else { // 有权限，可访问
    next({ replace: true, name: 'error_401' })
  } // 无权限，重定向到401页面
}

store.commit('setToken', 'super_admin')
store.commit('setAccess', ['super_admin', 'admin'])

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  const token = getToken()
  if (!token && to.name !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页
    next({
      name: LOGIN_PAGE_NAME // 跳转到登录页
    })
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // 未登陆且要跳转的页面是登录页
    next() // 跳转
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    next({
      name: homeName // 跳转到homeName页
    })
  } else {
    console.log(store.state.user.hasGetInfo)
    if (store.state.user.hasGetInfo) {
      // turnTo(to, store.state.user.access, next)
      turnTo(to, ['super_admin', 'admin'], next) // 为了方便开发直接写死权限
    } else {
      turnTo(to, ['super_admin', 'admin'], next) // 为了方便开发直接写死权限
      // store.dispatch('getUserInfo').then(user => {
      //   // 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：['super_admin'] ['super_admin', 'admin']
      //   console.log('user.access')
      //   console.log(user.access)
      //   turnTo(to, user.access, next)
      // }).catch(() => {
      //   setToken('')
      //   next({
      //     name: 'login'
      //   })
      // })
    }
  }
})

router.afterEach(to => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
