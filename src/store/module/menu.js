import {
	defineStore
} from 'pinia';

import {
	getHomeRoute,
	getBreadCrumbList,
	getOpenNames
} from '@/util'

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

// 定义的路由地址
import constantRoutes from '@/router/routers'

// rotuer 实例
import asyncRoutes from '@/router'

export const menuModule = defineStore('menu', {
	state: () => ({
		active_name: Cache.get(ACTIVE_NAME) || '', //菜单选中的值
		open_names: Cache.get(OPEN_NAMES) || [], //需要展开的菜单选项
		bread_crumb_list: Cache.get(BREAD_CRUMB_LIST)|| [], //面包屑渲染数据
		router_history: Cache.get(ROUTER_HISTORY) || [], //路由访问历史记录 
	}),
	actions: {
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
			const BreadCrumbList = getBreadCrumbList(rotue,homeItem)
			this.bread_crumb_list = BreadCrumbList
			Cache.set('BreadCrumbList', BreadCrumbList)
		},
		addRouterHistory(newRoute) {
			const {
				name,
				path,
				meta
			} = newRoute
			let newList = [...this.router_history]

			if (!(newList.findIndex(item => item.name === name) >= 0)) {
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
				console.log("最后一项选中移除")
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
		removeAllHistoryRoute(type){
			const homeItem = getHomeRoute(constantRoutes)
			if(type == 'all'){
				this.router_history.splice(1,this.router_history.length)
				asyncRoutes.push({
					name: homeItem.name
				})
				Cache.set(ROUTER_HISTORY,this.router_history)
				
			}else{
				const new_router_history = this.router_history.filter((item)=>{
					return item.name == this.active_name || item.name == homeItem.name
				})
				asyncRoutes.push({
					name: this.active_name
				})

				this.router_history = new_router_history
				
				Cache.set(ROUTER_HISTORY,this.router_history)
			}
		}
	},
	getters: {
		// 根据router 生成menu渲染对象
		permission_routes() {

			const new_rotues = []

			function createMenuRouter(router_array) {
				router_array.forEach((item, index) => {
					if (item.meta.hideInMenu != true) {
						let obj = {
							icon: (item.meta && item.meta.icon) || '',
							name: item.name,
							meta: item.meta,
							children: item.children
						}

						new_rotues.push(obj)
					}

				})
			}
			createMenuRouter(constantRoutes)
			Cache.set(PERMISSION_ROUTES, new_rotues)

			return new_rotues
		}
	}
});

export default menuModule
