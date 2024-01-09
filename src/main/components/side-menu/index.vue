<template>
	<div>
		<side-menu v-if="menu_open_status" :openNames="open_names"  :activeName="active_name" :permissionRoutes="permission_routes" />
		<collapsed-menu v-if="!menu_open_status" :permissionRoutes="permission_routes" />
	</div>
</template>

<script setup>
	
	
	import {storeToRefs } from 'pinia'
	
	
	import sideMenu from './side-menu.vue'
	import collapsedMenu from './collapsed-menu.vue'


	import useStore from '@/store'
	const {menuModule,globalConfig} = useStore()
	
	const usemenuModule = menuModule
	
	const {
		permission_routes,
		active_name,
		open_names,
	} = storeToRefs(usemenuModule)

	const {
		menu_open_status
	} = storeToRefs(globalConfig)

	
</script>