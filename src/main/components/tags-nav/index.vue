<template>
	<Row class="tags-nav">
		<Col>
			<Tag v-for="route in router_history" :key="route" type="dot"
				:color="active_name == route.name ? 'primary' : 'default'" @click="handleClick(route)" :closable="route.name !== 'home_page'"
				@on-close="removeHistoryRoute(route.name)">
				{{ route.meta.title }}
			</Tag>
		</Col>
	</Row>
</template>

<script setup>
import { inject } from 'vue'
const { turnToPage } = inject('eventBus');

import { storeToRefs } from 'pinia'
import useStore from '@/store'
const { menuModule } = useStore()

const { router_history, active_name } = storeToRefs(menuModule)

const removeHistoryRoute = (name) => {
	menuModule.removeHistoryRoute(name)
}

const handleClick = (route) => {
	console.log('route',route)
	turnToPage(route)
}
</script>

<style></style>
