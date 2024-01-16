<template>
	<div class="tags-nav" ref="tagsNav">
		<div class="close-con">
			<Dropdown transfer @on-click="handleTagsOption" style="margin-top:7px;">
				<Button size="small" type="text">
					<Icon :size="18" type="ios-close-circle-outline" />
				</Button>
				<template #list>
					<DropdownMenu>
						<DropdownItem name="all">关闭所有</DropdownItem>
						<DropdownItem name="others">关闭其他</DropdownItem>
					</DropdownMenu>
				</template>
			</Dropdown>
		</div>
		<ul v-show="visible" :style="{ left: contextMenuLeft + 'px', top: contextMenuTop + 'px' }" class="contextmenu">
			<li v-for="item, key in menuList" :key="key" @click="handleTagsOption(key)">{{ item }}</li>
		</ul>
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
		<div class="scroll-outer" ref="scrollOuter" @wheel="whellHandlescroll">
			<div class="scroll-body" :style="`left:${off_set}px`" ref="scrollBody">
				<Tag v-for="route in router_history" :key="route" type="dot" ref="tagsPageOpened" :route="route"
					:color="active_name == route.name ? 'primary' : 'default'" @click="handleClick(route)"
					@contextmenu.prevent.native="contextMenu(route, $event)" :closable="route.name !== 'home_page'"
					@on-close="removeHistoryRoute(route.name)">
					{{ route.meta.title }}
				</Tag>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref, inject, onMounted, watch ,nextTick} from 'vue'
const { turnToPage } = inject('eventBus');

import { storeToRefs } from 'pinia'
import useStore from '@/store'
const { menuModule } = useStore()

const { router_history, active_name } = storeToRefs(menuModule)

const removeHistoryRoute = (name) => {
	menuModule.removeHistoryRoute(name)
}

const handleClick = (route) => {
	turnToPage(route)
}

const scrollOuter = ref(0)
const scrollBody = ref(0)
const off_set = ref(0) //偏移值

const whellHandlescroll = (e) => {
	handleScroll(e.wheelDelta)
}

// 偏移函数
const handleScroll = (value) => {

	const outerWidth = scrollOuter.value.offsetWidth
	const bodyWidth = scrollBody.value.offsetWidth

	// 差值
	const cha_value = outerWidth - bodyWidth
	// 偏移值
	const pianyi_value = off_set.value + value

	if (value > 0) {
		off_set.value = Math.min(0, pianyi_value)
	} else {
		if (outerWidth < bodyWidth) {
			if (off_set < cha_value) {
				off_set.value = off_set.value
			} else {
				off_set.value = Math.max(pianyi_value, cha_value)
			}
		} else {
			off_set.value = 0
		}
	}

}

const tagsPageOpened = ref(0)

watch(active_name, async () => {
	await nextTick()
	tagsPageOpened.value.forEach(element => {
		if (active_name.value == element.$attrs.route.name) {
			moveToView(element.$el)
		}
	});
})

const moveToView = (tag) => {

	const outerWidth = scrollOuter.value.offsetWidth
	const bodyWidth = scrollBody.value.offsetWidth
	if (bodyWidth < outerWidth) {
		off_set.value = 0
	} else if (tag.offsetLeft < -off_set.value) {  // 标签在可视区域左侧
		off_set.value = tag.offsetLeft * -1 + 4
	} else if (tag.offsetLeft > -off_set.value && tag.offsetLeft + tag.offsetWidth < -off_set.value + outerWidth) { //标签早可视区域区域右侧'
		off_set.value = Math.min(0, outerWidth - tag.offsetLeft - tag.offsetWidth - 4)
	} else {  					// '标签早可视区域右侧'
		off_set.value = -(tag.offsetLeft - (outerWidth - 4 - tag.offsetWidth))
	}
}

let visible = ref(false)
let contextMenuLeft = ref(0)
let contextMenuTop = ref(0)
const tagsNav = ref(0)
const menuList = ref({
	others: '关闭其他',
	all: '关闭所有'
})
const closeMenu = () => {
	visible.value = false
}

watch(visible, (value) => {
	console.log(value)
	if (value) {
		document.addEventListener('click', closeMenu)
	}
	else {
		document.body.removeEventListener('click', closeMenu)
	}
})

const contextMenu = (route, $el) => {
	visible.value = true
	contextMenuLeft.value = $el.clientX - tagsNav.value.getBoundingClientRect().left
	contextMenuTop.value = $el.clientY - 64
}


const handleTagsOption = (item, type) => {
	console.log('item',item)
	menuModule.removeAllHistoryRoute(item)
	off_set.value = 0
}

</script>

<style></style>
