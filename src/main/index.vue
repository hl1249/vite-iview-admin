<template>
	<div class="layout">
		<Layout>
			<Sider ref="side1" hide-trigger collapsible :width="menu_open_status ? 240 : 70">
				<div class="side-content">
					<div class="logo-con">
						<img v-if="menu_open_status" :src="maxLogo">
						<img v-if="!menu_open_status" :src="minLogo">
					</div>
					<Sidebar class="side-bar"></Sidebar>
				</div>
			</Sider>
			<Layout>
				<Header class="layout-header-bar">
					<Layout>
						<NavBar></NavBar>
					</Layout>
				</Header>
				<Content class="main-content-con">
					<Layout class="main-layout-con">
						<tags-nav></tags-nav>
						<Content class="content-wrapper">
							<router-view v-slot="{ Component, route }">
								<transition name="custom" mode="out-in">
									<component :is="Component" :key="route.path" v-if="!route.meta.keepAlive" />
								</transition>
							</router-view>
						</Content>
					</Layout>
				</Content>
			</Layout>
		</Layout>
	</div>
</template>

<script setup>

import {
	provide
} from 'vue'

import {
	useRoute,
	useRouter
} from 'vue-router'
const router = useRouter()

import maxLogo from '@/assets/images/logo.jpg'
import minLogo from '@/assets/images/logo-min.jpg'

/**
 * @Function: 
 * @param {Object} route 需要跳转的路由地址
 */
const turnToPage = (route) => {
	if (route.meta.href) {
		window.open(route.meta.href)
	} else {
		router.push({
			name: route.name
		})
	}
}

// 全局提供
provide('eventBus', {
	turnToPage,
});

import {
	computed,
	defineComponent,
	ref
} from 'vue'

import {
	NavBar,
	Sidebar,
	tagsNav
} from './components'

defineComponent({
	components: {
		NavBar,
		Sidebar
	}
})

import useStore from '@/store'
const { globalConfig } = useStore()

import { storeToRefs } from 'pinia'

const { menu_open_status } = storeToRefs(globalConfig)

</script>


<style lang="less">
@import './index.less';
</style>
