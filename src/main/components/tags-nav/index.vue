<template>
	<div class="tags-nav">
		<div class="btn-con left-btn">
			<Button type="text" @click="handleScroll(-240)">
				<Icon :size="18" type="ios-arrow-back" />
			</Button>
		</div>
		<div class="btn-con right-btn">
			<Button type="text" @click="handleScroll(-240)">
				<Icon :size="18" type="ios-arrow-forward" />
			</Button>
		</div>
		<div class="scroll-outer">
			<div class="scroll-body">
				<Tag  v-for="route in router_history" :key="route" type="dot"
					:color="active_name == route.name ? 'primary' : 'default'" @click="handleClick(route)"
					:closable="route.name !== 'home_page'" @on-close="removeHistoryRoute(route.name)">
					{{ route.meta.title }}
				</Tag>
			</div>
		</div>

	</div>
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
	console.log('route', route)
	turnToPage(route)
}

const handleScroll = () => {

}
</script>

<style></style>
