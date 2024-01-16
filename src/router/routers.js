import Main from '@/main/index.vue'
import parentView from '@/components/parent-view/index.vue'
// 固定全局路由
const constantRoutes = [
	
	{
		path: '/login',
		name: 'login',
		meta: {
			title: 'Login - 登录',
			hideInMenu: true
		},
		component: () => import('@/views/login/index.vue')
	},
	{
		path: '/',
		name: 'home',
		redirect: '/home',
		component: Main,
		meta: {
			icon: 'md-home',
			hideInMenu: true,
			title: "首页",
		},
		children: [{
			path: '/home',
			name: 'home_page',
			component: () => import('@/views/home/index.vue'),
			meta: {
				title: '首页',
				icon: 'md-home',
				giao:"王德发",
				hideInMenu: true
			}
		}]
	},
	{
		path: '/doc',
		name: 'doc',
		component: Main,
		meta: {
			title: '文档',
			icon: 'ios-book'
		},
		redirect: '/doc/index',
		children: [{
			path: 'index',
			name: 'doc_index',
			component: () => import('@/views/doc/index.vue'),
			name: 'doc',
			meta: {
				title: '文档',
				href: 'https://www.iviewui.com/view-ui-plus/guide/introduce',
				icon: 'ios-book',
				noCache: true
			}

		}]
	},
	{
		path: '/icon',
		name: 'icon',
		component: Main,
		redirect: '/icon/index',
		meta: {
			icon: 'md-glasses',
			title: "图标"
		},
		children: [{
			path: 'index',
			name: 'icon',
			component: () => import('@/views/icon/index.vue'),
			meta: {
				title: '图标',
				icon: 'md-glasses',
				noCache: true
			}

		}]
	},
	{
		path: '/jsx',
		name: 'jsx',
		component: Main,
		redirect: '/jsx/index',
		meta: {
			icon: 'md-code',
			title: "jsx模版"
		},
		children: [{
			path: 'index',
			name: 'jsx',
			component: () => import('@/views/jsx/index.vue'),
			meta: {
				title: 'jsx模版',
				icon: 'md-code',
				noCache: true
			}

		}]
	},
	{
		path: '/permission',
		name: 'permission',
		component: Main,
		redirect: '/permission/permission_page',
		meta: {
			icon: 'md-lock',
			title: "权限"
		},
		children: [{
			path: 'permission_page',
			name: 'permission_page',
			component: () => import('@/views/permission/index.vue'),
			meta: {
				title: '权限页面',
				icon: 'md-code',
				noCache: true,
			}

		},
		{
			path: 'admin_page',
			name: 'admin_page',
			component: () => import('@/views/permission/admin.vue'),
			meta: {
				title: 'admin展示',
				icon: 'md-code',
				noCache: true,
				roles:['admin']
			}

		},
		{
			path: 'edit_page',
			name: 'edit_page',
			component: () => import('@/views/permission/edit.vue'),
			meta: {
				title: 'edit展示',
				icon: 'md-code',
				noCache: true,
				roles:['admin','edit']
			}

		}
		]
	},
	{
		path: '/multilevel',
		name: 'multilevel',
		component: Main,
		meta: {
			icon: 'md-menu',
			title: '路由嵌套'
		},
		children: [{
			path: 'level1',
			name: 'level1',
			meta: {
				icon: 'md-funnel',
				title: '菜单1'
			},
			component: parentView,
			children: [{
				path: 'level1-1',
				name: 'level1-1',
				meta: {
					icon: 'md-funnel',
					title: '菜单1-1'
				},
				component: () => import('@/views/multilevel/level-1/level-1-1/index.vue'),
			},
			{
				path: 'level1-2',
				name: 'level1-2',
				meta: {
					icon: 'md-funnel',
					title: '菜单1-2'
				},
				component: () => import('@/views/multilevel/level-1/level-1-2/index.vue'),
			},
			{
				path: 'level1-3',
				name: 'level1-3',
				meta: {
					icon: 'md-funnel',
					title: '菜单1-3'
				},
				component: parentView,
				children: [
					{
						path: 'level1-3-1',
						name: 'level1-3-1',
						meta: {
							icon: 'md-funnel',
							title: '菜单1-3-1'
						},
						component: () => import('@/views/multilevel/level-1/level-1-3/level-1-3-1/index.vue'),
					},
					{
						path: 'level1-3-2',
						name: 'level1-3-2',
						meta: {
							icon: 'md-funnel',
							title: '菜单1-3-2'
						},
						component: () => import('@/views/multilevel/level-1/level-1-3/level-1-3-2/index.vue'),
					},
				]
			},
			]
		},
		{
			path: 'level2',
			name: 'level2',
			meta: {
				icon: 'md-funnel',
				title: '菜单2'
			},
			component: () => import('@/views/multilevel/level-2/index.vue'),
		},
		{
			path: 'level3',
			name: 'level3',
			meta: {
				icon: 'md-funnel',
				title: '菜单3'
			},
			component: () => import('@/views/multilevel/level-2/index.vue'),
		},
		{
			path: 'level4',
			name: 'level4',
			meta: {
				icon: 'md-funnel',
				title: '菜单4'
			},
			component: () => import('@/views/multilevel/level-2/index.vue'),
		},
		{
			path: 'level5',
			name: 'level5',
			meta: {
				icon: 'md-funnel',
				title: '菜单5'
			},
			component: () => import('@/views/multilevel/level-2/index.vue'),
		},
		{
			path: 'level6',
			name: 'level6',
			meta: {
				icon: 'md-funnel',
				title: '菜单6'
			},
			component: () => import('@/views/multilevel/level-2/index.vue'),
		},
		{
			path: 'level7',
			name: 'level7',
			meta: {
				icon: 'md-funnel',
				title: '菜单7'
			},
			component: () => import('@/views/multilevel/level-2/index.vue'),
		},
		{
			path: 'level8',
			name: 'level8',
			meta: {
				icon: 'md-funnel',
				title: '菜单8'
			},
			component: () => import('@/views/multilevel/level-2/index.vue'),
		},
		{
			path: 'level9',
			name: 'level9',
			meta: {
				icon: 'md-funnel',
				title: '菜单9'
			},
			component: () => import('@/views/multilevel/level-2/index.vue'),
		},
		{
			path: 'level10',
			name: 'level10',
			meta: {
				icon: 'md-funnel',
				title: '菜单10'
			},
			component: () => import('@/views/multilevel/level-2/index.vue'),
		},
		{
			path: 'level11',
			name: 'level11',
			meta: {
				icon: 'md-funnel',
				title: '菜单11'
			},
			component: () => import('@/views/multilevel/level-2/index.vue'),
		},
		{
			path: 'level12',
			name: 'level12',
			meta: {
				icon: 'md-funnel',
				title: '菜单12'
			},
			component: () => import('@/views/multilevel/level-2/index.vue'),
		},
		{
			path: 'level13',
			name: 'level13',
			meta: {
				icon: 'md-funnel',
				title: '菜单13'
			},
			component: () => import('@/views/multilevel/level-2/index.vue'),
		}
		]
	},
	// 默认配置路由地址 404 401 等页面
	{
		path: '/:path(.*)*',
		meta: {
			hideInMenu: true
		},
		component: () => import('@/views/error-page/404/index.vue')
	},
	{
		path: '/403',
		meta: {
			hideInMenu: true
		},
		component: () => import('@/views/error-page/403/index.vue')
	},
	{
		path: '/500',
		meta: {
			hideInMenu: true
		},
		component: () => import('@/views/error-page/500/index.vue')
	},
	{
		path: '/error_logger',
		name: 'error_logger',
		component: Main,
		meta: {
			title: '错误日志',
			icon: 'ios-book',
			hideInMenu:true
		},
		redirect: '/error_logger/error_logger_page',
		children: [{
			path: '/error_logger/error_logger_page',
			name: 'error_logger_page',
			component: () => import('@/views/error-page/error-logger/index.vue'),
			meta: {
				title: '错误日志',
				icon: 'ios-book',
				noCache: true
			}

		}]
	},
]

export default constantRoutes
