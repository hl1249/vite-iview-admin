<template>
	<div class="tags-nav">
		<div class="btn-con left-btn">
			<Button type="text" @click="handleScroll(240)">
				<Icon :size="18" type="ios-arrow-back" />
			</Button>
		</div>
		<div class="btn-con right-btn">
			<Button type="text" @click="handleScroll(-240)">
				<Icon :size="18" type="ios-arrow-forward" />
			</Button>
		</div>
			<div class="scroll-outer" ref="scrollOuter" @wheel="handlescroll">
				<div class="scroll-body" :style="`left:${off_set}px`" ref="scrollBody">
					<Tag v-for="route in router_history" :key="route" type="dot"
						:color="active_name == route.name ? 'primary' : 'default'" @click="handleClick(route)"
						:closable="route.name !== 'home_page'" @on-close="removeHistoryRoute(route.name)">
						{{ route.meta.title }}
					</Tag>
				</div>
			</div>

	</div>
</template>

<script setup>
import { ref,inject,onMounted } from 'vue'
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

const scrollOuter = ref(0)
const scrollBody = ref(0)

onMounted(()=>{
	console.log('scrollBodys',)
})

const off_set = ref(0)

const handlescroll = (e) => {
	handleScroll(e.wheelDelta)
}
const handleScroll = (value) => {

	const outerWidth = scrollOuter.value.offsetWidth
	const bodyWidth = scrollBody.value.offsetWidth
	
	const cha_value = outerWidth - bodyWidth

	off_set.value = off_set.value + value
	
	if(off_set.value > 0) {
		off_set.value = 0
	}

	if(off_set.value < cha_value){
		off_set.value = cha_value
	}
}
</script>

<style></style>
