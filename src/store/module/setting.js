import { defineStore } from 'pinia';

import Cache from '@/util/cache'

// 缓存变量键值
import CacheKey from '@/config/cache'

const {
	MNEU_OPEN_STATUS
} = CacheKey

export const globalConfig = defineStore('setting', {
  state: () => ({
	  menu_open_status:Cache.get(MNEU_OPEN_STATUS) || false, //菜单展开状态
  }),
  actions:{
	  changeMneuOpen(){
		  this.menu_open_status = !this.menu_open_status
		  Cache.set(MNEU_OPEN_STATUS, this.menu_open_status)
	  }
  }
});

export default globalConfig