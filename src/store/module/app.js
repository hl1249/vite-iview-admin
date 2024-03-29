import {
	defineStore
} from 'pinia';

import Cache from '@/util/cache'

import CacheKey from '@/config/cache'

const {
	ERROR_LIST
} = CacheKey

export const appModule = defineStore('app', {
	state: () => ({
		error_list: Cache.get(ERROR_LIST) || [], //错误日志
 	}),
	actions: {
		addErrorLog(info) {
			let now_time = new Date().getTime()
			info.time = now_time
			this.error_list.push(info)
			Cache.set(ERROR_LIST,this.error_list)
			console.log('error_list',this.error_list)
		},
		clearErrorLog(){
			console.log(1)
			this.error_list = []
			
			Cache.set(ERROR_LIST,this.error_list)
		}
	},
});

export default appModule
