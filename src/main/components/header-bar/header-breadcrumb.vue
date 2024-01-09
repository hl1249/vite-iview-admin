<template>
	<!-- <div style="background-color: pink;">{{ bread_crumb_list }}}</div> -->
	<Breadcrumb>
		<BreadcrumbItem v-for="route in bread_crumb_list" :key="route" :to="route.to">
			<Icon :type="route.icon" size="12" class="menu-icon" />
			<span>{{route.meta.title}}</span>
		</BreadcrumbItem>
	</Breadcrumb>
</template>

<script setup>
import {storeToRefs } from 'pinia'
	import useStore from '@/store'
	const {menuModule}  = useStore()
	const {bread_crumb_list} = storeToRefs(menuModule)
	console.log('bread_crumb_list',bread_crumb_list)
</script>

<style>
</style>