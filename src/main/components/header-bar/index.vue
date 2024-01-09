<template>
	<div class="header-bar">
		<Row justify="space-between" class="header-bar-row">
			<Row align="top" justify="center">
				<Col>
				<Icon @click="collapsedSider"
					:style="{transform:`rotate(${menu_open_status?180:90}deg)` , transition:'all .2s'}" type="md-menu"
					size="28" class="collapsed-icon"></Icon>
				</Col>
				<Col>
					<header-breadcrumb style="margin-left: 30px;"></header-breadcrumb>
				</Col>
			</Row>
			
			<Col>
				<Dropdown>
					<div class="header-bar-row-avatar">
						<Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
						<Icon type="md-arrow-dropdown" class="icon" size="20" />
					</div>
					<template #list>
						<DropdownMenu>
							<DropdownItem @click="loginOut">退出登录</DropdownItem>
						</DropdownMenu>
					</template>
				</Dropdown>
			</Col>
		</Row>
	</div>
</template>


<script setup>
	import {
		computed,
		defineComponent,
		ref
	} from 'vue'

	import headerBreadcrumb from './header-breadcrumb.vue'

	import useStore from '@/store'
	const {
		globalConfig,
		userModule
	} = useStore()

	import {
		storeToRefs
	} from 'pinia'

	const {
		menu_open_status
	} = storeToRefs(globalConfig)

	const collapsedSider = () => {
		globalConfig.changeMneuOpen()
	}

	const loginOut = () => {
		// console.log('')
		userModule.LOGIN_OUT()
	}
</script>
