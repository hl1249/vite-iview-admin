import {
	createRouter,
	createWebHistory,
	createWebHashHistory
} from 'vue-router'

import constantRoutes from './routers'

const asyncRoutes = createRouter({
	history: createWebHashHistory(),
	routes: constantRoutes,
})

export default asyncRoutes
