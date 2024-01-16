<template>
	<div class="login">
		<div class="login-con">
			<Card icon="log-in" title="欢迎登录" :bordered="false">
				<div class="form-con">
					<Form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
						<FormItem prop="userName">
							<Input v-model="form.userName" placeholder="请输入用户名">
							<template #prepend>
								<Icon type="ios-person-outline"></Icon>
							</template>
							</Input>
						</FormItem>
						<FormItem prop="password">
							<Input type="password" v-model="form.password" placeholder="请输入密码">
							<template #prepend>
								<Icon type="ios-lock-outline"></Icon>
							</template>
							</Input>
						</FormItem>
						<FormItem>
							<Button @click="handleSubmit(loginForm)" type="primary" long>登录</Button>
						</FormItem>
					</Form>
					<p class="login-tip">输入任意用户名和密码即可</p>
				</div>
			</Card>
		</div>
	</div>
</template>

<script setup>
	import {ref} from 'vue'
	
	import {useRouter} from 'vue-router'
	const router = useRouter()
	
	import useStore from '@/store'
	const {userModule,menuModule} = useStore()

	import appConfig from '@/config/app'
	
	import Cache from '@/util/cache'
	import {
		login,
		saveError
	} from '@/api/user.js'
	
	// saveError()


	const rules = ref({
		userName: [
			{ required: true, message: '请输入正确格式的账号', trigger: 'blur' }
		],
		password: [
			{ required: true, message: '请输入正确格式的密码', trigger: 'blur' }
		]
	})
	
	const form = ref({
		userName: 'super_admin',
		password: '123456'
	})
	
	const loginForm = ref(0)
	
	const handleSubmit = (loginForm) => {
		
		loginForm.validate((valid)=>{
			if(valid){
				
				login(form).then((res) => {
					console.log(res)
					console.log('expires_time - this.$Cache.time()',res.data.expires_time - Cache.time())
					// res.data.expires_time = Math.round(new Date() / 1000) + 60
					userModule.LOGIN({
						token:res.data.token,
						time:res.data.expires_time - Cache.time(),
					})

					userModule.UPDATE_USERINFO(res.data)
					
					if(res.status == 200){
						router.push({
							name: menuModule.active_name || appConfig.HOME_NAME
						})
					}
					
				}).catch((err)=>{
					console.log(err)
				})
				
			}else{
				
			}
		})
	}
	
	
</script>

<style lang="less">
	@import './index.less';
</style>