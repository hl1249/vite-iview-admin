/**
 * @param {Array} routers 路由列表数组
 * @description 用于找到路由列表中name为home的对象
 */
export const getHomeRoute = (routers, homeName = 'home_page') => {
  let i = -1
  let len = routers.length
  let homeRoute = {}
  while (++i < len) {
    let item = routers[i]
    if (item.children && item.children.length) {
      let res = getHomeRoute(item.children, homeName)
      if (res.name) return res
    } else {
      if (item.name === homeName) homeRoute = item
    }
  }
  return homeRoute
}

/**
 * @description: 
 * @param {object} route 当前渲染路由
 * @param {Array} homeRoute 首页路由对象
 * @return {Array} 面包屑导航
 */
export const getBreadCrumbList = (route, homeRoute) => {
  let homeItem = { ...homeRoute, icon: homeRoute.meta.icon }
  let routeMetched = route.matched
  if (routeMetched.some(item => item.name === homeRoute.name)) return [homeItem]
  let res = routeMetched.filter(item => {
    return item.meta === undefined || !item.meta.hideInBread
  }).map(item => {
    let meta = { ...item.meta }
    if (meta.title && typeof meta.title === 'function') {
      meta.__titleIsFunction__ = true
      meta.title = meta.title(route)
    }
    let obj = {
      icon: (item.meta && item.meta.icon) || '',
      name: item.name,
      meta: meta
    }
    return obj
  })
  res = res.filter(item => {
    return !item.meta.hideInMenu
  })
  return [{ ...homeItem, to: homeRoute.path }, ...res]
}

/**
 * @param {Array} OpenNames 菜单展开选项
 * @returns {Array}
 */
export const getOpenNames = (route) => {
  let OpenNames = route.matched.map((item) => {
		return item.name
	})
  return OpenNames
}

/**
 * @description: 对比b素组的所有元素是否在a数组
 * @param {*} arrayA 
 * @param {*} arrayB
 * @return {*}
 */
export const isArrayContainsArray = (arrayA,arrayB) => {
  return arrayB.every(elementB => arrayA.includes(elementB));
}

/**
 * @description: 权限组对比 用户的身份是否包含在路由的权限中
 * @param {*} userRolse
 * @param {*} routerRolse
 * @return {*}
 */
export const permissionContrast = (userRolse,routerRolse) => {
  return !( userRolse.every( item => routerRolse.includes(item)) )
}