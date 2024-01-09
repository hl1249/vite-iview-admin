<template>
	<Menu :active-name="activeName" :accordion="true" :open-names="openNames" theme="dark" ref="menu" width="auto" mode="vertical">
		<side-item v-for="route in permissionRoutes" :key="route" :item="route"></side-item>
	</Menu>
</template>

<script setup>
import {ref,nextTick,watch } from 'vue';
	import sideItem from './side-item.vue'
	
	const props = defineProps({
		permissionRoutes: Object,
		activeName:String,
		openNames:Array
	})

	const menu = ref(null)

	watch(()=>props.openNames,async()=>{
		await nextTick()
		menu.value.updateOpened()
	})
	
</script>
