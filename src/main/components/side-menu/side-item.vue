<template>
	<div>
		<Submenu :name="item.name" v-if="item.children && item.children.length > 1">
			<template #title>
				<Icon :type="item.meta.icon" />
				<span>{{item.meta.title}}</span>
				<!-- <span>{{  }}}</span> -->
			</template>
			
			<side-item
				
			  v-for="child in item.children"
			  :key="child"
			  :item="child"
			/>
		</Submenu>
		
		
		<MenuItem @click="handleClick(item.children[0])" :name="item.children[0].name" v-else-if="item.children">
				<Icon :type="item.meta.icon" />
				<span>{{item.children[0].meta.title}}</span>
		</MenuItem>
		
		<MenuItem @click="handleClick(item)" :name="item.name" v-else>
			<Icon :type="item.meta.icon" />
			<span>{{item.meta.title}}</span>
		</MenuItem>
		
	</div>
</template>

<script setup>
	// 注入 side-menu/index 件提供的turnToPage函数
	import {inject} from 'vue'
	const {turnToPage} = inject('eventBus');
	
	const props = defineProps({
		item: Object,
	})
	
	const handleClick = (route) => {
		turnToPage(route)
	}
</script>
