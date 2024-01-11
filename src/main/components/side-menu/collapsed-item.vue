<template>
	<Dropdown placement="right-start" class="collapsed-item">
		<a href="javascript:void(0)" :class="{'drop-menu-a':!hiddenTitle}">
			<Icon :type="parentItem.meta.icon" :size="iconSize" class="icon" :color="hiddenTitle?'white':''"></Icon>
			<span v-if="!hiddenTitle">{{parentItem.meta.title}}</span>
			<Icon v-if="!hiddenTitle" type="ios-arrow-forward" :size="iconSize"></Icon>
		</a>
		<template #list>
			<DropdownMenu>
				<template v-for="route in permissionRoutes" :key="route">
					<collapsed-item  v-if="route.children && route.children.length > 1"
						:permissionRoutes="route.children" :hiddenTitle="false" :parentItem="route" :iconSize="16">
					</collapsed-item>
					<DropdownItem @click="handleClick(route)" v-else>
						<Icon :type="route.meta.icon" style="margin-right: 3px;" size="16"></Icon>
						<span>{{route.meta.title}}</span>
					</DropdownItem>
				</template>
			</DropdownMenu>
		</template>
	</Dropdown>

</template>

<script setup>
	// 注入 爷组件提供的turnToPage函数
	import {inject} from 'vue'
	const {turnToPage} = inject('eventBus');
	
	const props = defineProps({
		permissionRoutes: Object,
		hiddenTitle: {
			type: Boolean,
			default: true
		},
		parentItem: {
			type: Object,
			default: {}
		},
		iconSize: {
			type: Number,
			default: 20
		}
	})
	
	
	const handleClick = (route) => {
		turnToPage(route)
	}
</script>
