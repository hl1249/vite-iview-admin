<template>
	<div  class="collapsed-menu">
	<div v-for="route in permissionRoutes" :key="route" class="collapsed-menu-item">
		<div  v-if="route.children && route.children.length > 1" >
			<collapsed-item  :permissionRoutes="route.children" :parentItem="route" :hiddenTitle="true" :iconSize="30"></collapsed-item>
		</div>
		<div  v-else>
			<Tooltip :content="route.meta.title" placement="right-start">
				<Icon @click="handleClick(route.children[0])" :type="route.meta.icon" size="30" class="menu-icon" color="white"/>
			</Tooltip>
		</div>
	</div>
</div>
</template>

<script setup>
	// 注入 父组件提供的turnToPage函数
	import {inject} from 'vue'
	const {turnToPage} = inject('eventBus');
	
	const emit = defineEmits(['handleClick'])
	
	import collapsedItem from './collapsed-item.vue'
	
	const props = defineProps({
		permissionRoutes: Object
	})
	
	const handleClick = (route) => {
		turnToPage(route)
	}
</script>