<template>
	<div v-for="route in permissionRoutes" :key="route">
		<Row :gutter="16" justify="center" v-if="route.children && route.children.length > 1" >
			<collapsed-item @customClick="handleClick" :permissionRoutes="route.children" :parentItem="route" :hiddenTitle="true" :iconSize="30"></collapsed-item>
		</Row>
		<Row :gutter="16" justify="center" v-else>
			<Tooltip :content="route.meta.title" placement="right-start">
				<Icon @click="handleClick(route)" :type="route.meta.icon" size="30" class="menu-icon" color="white"/>
			</Tooltip>
		</Row>
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