import Main from '@/main/index.vue'
import parentView from '@/components/parent-view/index.vue'
// 固定全局路由
const constantRoutes = [
	// 默认配置路由地址 404 401 等页面
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
			title:"首页",
			hideInMenu: true,
		},
		children: [{
			path: '/home',
			name: 'home_page',
			component: () => import('@/views/home/index.vue'),
			meta: {
				title: '首页',
				icon: 'md-home',
				affix: true,
				hideInMenu: false
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
				href: 'https://lison16.github.io/iview-admin-doc/#/',
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
			title:"图标"
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
			title:"jsx模版"
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
			title:"权限"
		},
		children: [{
			path: 'permission_page',
			name: 'permission_page',
			component: () => import('@/views/permission/index.vue'),
			meta: {
				title: '权限页面',
				icon: 'md-code',
				noCache: true
			}

		},
		{
			path: 'admin_page',
			name: 'admin_page',
			component: () => import('@/views/permission/admin.vue'),
			meta: {
				title: 'admin展示',
				icon: 'md-code',
				noCache: true
			}

		},
		{
			path: 'edit_page',
			name: 'edit_page',
			component: () => import('@/views/permission/edit.vue'),
			meta: {
				title: 'edit展示',
				icon: 'md-code',
				noCache: true
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
			}
		]
	}
]

export default constantRoutes
