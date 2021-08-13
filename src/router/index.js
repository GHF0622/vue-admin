import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      component: () => import('@/views/home/index'),
      name: 'Home',
      meta: { title: '首页', icon: 'el-icon-s-help' }
    }]
  },
  
  {
    path: '/jsArray',
    component: Layout,
    redirect: '/js/jsArray',
    name: 'Js',
    meta: { title: '常用js方法', icon: 'el-icon-suitcase-1' },
    children: [
      {
        path: 'jsArray',
        name: 'jsArray',
        component: () => import('@/views/js-project/array'),
        meta: { title: 'js数组操作', icon: 'icon-yanse' }
      },
      {
        path: 'jsString',
        name: 'jsString',
        component: () => import('@/views/js-project/string'),
        meta: { title: 'js常用字符串操作', icon: 'icon-yanse' }
      },
    ]
  },
  {
    path: '/tools',
    component: Layout,
    redirect: '/tools/color',
    name: 'Tools',
    meta: { title: '工具', icon: 'el-icon-suitcase-1' },
    children: [
      {
        path: 'color',
        name: 'color',
        component: () => import('@/views/tools/color'),
        meta: { title: '颜色转换', icon: 'icon-yanse' }
      },
      {
        path: 'timeStamp',
        name: 'TimeStamp',
        component: () => import('@/views/tools/timeStamp'),
        meta: { title: '时间戳转换', icon: 'icon-timeStamp' }
      },
      {
        path: 'json',
        name: 'Json',
        component: () => import('@/views/tools/json'),
        meta: { title: 'json格式化', icon: 'icon-jsonfile' }
      }
      
    ]
  },
  {
    path: '/tests',
    component: Layout,
    redirect: '/test/testHome',
    name: 'Test',
    meta: { title: '日常开发测试', icon: 'el-icon-loading' },
    children: [
      {
        path: 'testHome',
        name: 'testHome',
        component: () => import('@/views/test/index'),
        meta: { title: '說明', icon: 'el-icon-document' }
      },      
      {
        path: 'test',
        name: 'test',
        component: () => import('@/views/test/test'),
        meta: { title: '日常測試', icon: 'el-icon-view' }
      }, 
      {
        path: 'slot',
        name: 'slot',
        component: () => import('@/views/test/slot/index'),
        meta: { title: 'slot', icon: 'el-icon-view' }
      }, 
      {
        path: 'infiniteScroll',
        name: 'infiniteScroll',
        component: () => import('@/views/test/infiniteScroll'),
        meta: { title: '无缝无限滚动', icon: 'el-icon-view' }
      }, 
      
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
