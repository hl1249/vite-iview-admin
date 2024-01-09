import {
	createRouter,
	createWebHistory
} from 'vue-router'

import constantRoutes from './routers'

const asyncRoutes = createRouter({
	history: createWebHistory(),
	routes: constantRoutes,
})

export default asyncRoutes
