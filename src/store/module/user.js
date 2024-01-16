import {
	defineStore
} from 'pinia';

import Cache from '@/util/cache'

import CacheKey from '@/config/cache'

import router from '@/router/index'

const {
	LOGIN_STATUS,
	UID,
	USER_INFO,
} = CacheKey

import { menuModule } from './menu'

export const userModule = defineStore('user', {
	state: () => ({
		token: Cache.get(LOGIN_STATUS) || '',
		user_info: Cache.get(USER_INFO) || '',
	}),
	actions: {
		SET_ROLES(role){
			this.user_info.roles = [role]
			Cache.set(USER_INFO, this.user_info);
			menuModule().getPermissionRoutes()
		},
		// 获取token
		GET_TOKEN() {
			return Cache.get(LOGIN_STATUS) || ''
		},
		// 获取用户信息
		GET_USERINFO() {
			return Cache.get(USER_INFO) || ''
		},
		// 设置token与过期时间
		LOGIN(opt) {
			Cache.set(LOGIN_STATUS, opt.token, opt.time)
		},
		// 退出登录
		LOGIN_OUT() {
			Cache.clear(LOGIN_STATUS);
			Cache.clear(UID);
			Cache.clear(USER_INFO);
			router.push({
				name: "login"
			})
		},
		// 更新用户信息
		UPDATE_USERINFO(user_info) {
			this.user_info = user_info
			Cache.set(USER_INFO, user_info);
		},
		SETUID(uid) {
			Cache.set(UID, user_info);
		}
	}
});


export default userModule
