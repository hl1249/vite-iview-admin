import {
	defineStore
} from 'pinia';

import {
	getHomeRoute,
	getBreadCrumbList,
	getOpenNames,
	isArrayContainsArray,
	permissionContrast
} from '@/util'

// 缓存操作
import Cache from '@/util/cache'

// 缓存变量键值
import CacheKey from '@/config/cache'
const {
	PERMISSION_ROUTES,
	ACTIVE_NAME,
	OPEN_NAMES,
	ROUTER_HISTORY,
	BREAD_CRUMB_LIST,
} = CacheKey

import appConfig from '@/config/app'
const { HOME_NAME } = appConfig

// 定义的路由地址
import constantRoutes from '@/router/routers'

// rotuer 实例
import asyncRoutes from '@/router'

import { userModule } from './user'

export const menuModule = defineStore('menu', {
	state: () => ({
		active_name: Cache.get(ACTIVE_NAME) || '', //菜单选中的值
		open_names: Cache.get(OPEN_NAMES) || [], //需要展开的菜单选项
		bread_crumb_list: Cache.get(BREAD_CRUMB_LIST) || [], //面包屑渲染数据
		router_history: Cache.get(ROUTER_HISTORY) || [], //路由访问历史记录 
		permission_routes:Cache.get(PERMISSION_ROUTES) || [] //menu树
	}),
	actions: {
		init(route) {
			this.setActiveName(route.name)
			this.setOpenNames(route)
			this.setBreadCrumb(route)
			this.addRouterHistory(route)
		},
		setActiveName(name) {
			Cache.set(ACTIVE_NAME, name)
			this.active_name = name
		},
		setOpenNames(rotue) {
			const openNames = getOpenNames(rotue)
			Cache.set(OPEN_NAMES, openNames)
			this.open_names = openNames
		},
		setBreadCrumb(rotue) {
			const homeItem = getHomeRoute(constantRoutes)
			const BreadCrumbList = getBreadCrumbList(rotue, homeItem)
			this.bread_crumb_list = BreadCrumbList
			Cache.set(BREAD_CRUMB_LIST, BreadCrumbList)
		},
		addRouterHistory(newRoute) {
			const {
				name,
				path,
				meta
			} = newRoute
			let newList = [...this.router_history]
			if (!(newList.findIndex(item => item.name === name) >= 0) && (!meta.hideInMenu || name == HOME_NAME)) {

				this.router_history.push({
					name,
					path,
					meta
				})
				Cache.set(ROUTER_HISTORY, this.router_history)
			}

		},
		removeHistoryRoute(name) {
			const router_history = this.router_history

			let last_router = router_history[router_history.length - 1].name
			let active_name = this.active_name
			// 需要移除的路由下标
			let remove_index

			remove_index = router_history.findIndex((item, index) => {
				return item.name == name
			})


			router_history.splice(remove_index, 1)
			Cache.set(ROUTER_HISTORY, router_history)

			// 移除的最后一项的菜单选项
			if (active_name == last_router && active_name == name) {
				asyncRoutes.push({
					name: router_history[remove_index - 1].name
				})
				// 移除除最后一项的菜单选项
			} else if (active_name == name) {
				asyncRoutes.push({
					name: router_history[remove_index].name
				})
			}


		},
		removeAllHistoryRoute(type) {
			const homeItem = getHomeRoute(constantRoutes)
			if (type == 'all') {
				this.router_history.splice(1, this.router_history.length)
				asyncRoutes.push({
					name: homeItem.name
				})
				Cache.set(ROUTER_HISTORY, this.router_history)

			} else {
				const new_router_history = this.router_history.filter((item) => {
					return item.name == this.active_name || item.name == homeItem.name
				})
				asyncRoutes.push({
					name: this.active_name
				})

				this.router_history = new_router_history

				Cache.set(ROUTER_HISTORY, this.router_history)
			}
		},
		getPermissionRoutes(){
			
			const user_info = userModule().GET_USERINFO()
			const menu_rotues = JSON.parse(JSON.stringify(constantRoutes))

			function filterRoutes(routes) {
				return routes.filter(route => {
					
					if (route.children) {
						// 递归调用 filterRoutes 处理 children
						route.children = filterRoutes(route.children);
					}
					if( route.meta?.hideInMenu == true){
						return false
					}else if(route.meta.roles && permissionContrast(user_info.roles,route.meta.roles) ){
						return false
					}else{
						return true
					}
				});
			}

			const filteredRoutes = filterRoutes(menu_rotues);
			this.permission_routes = filteredRoutes
			Cache.set(PERMISSION_ROUTES, filteredRoutes)
		}
	}
});

export default menuModule
