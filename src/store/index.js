import appModule from './module/app.js'
import menuModule from './module/menu.js'
import globalConfig from './module/setting.js'
import userModule from './module/user.js'

// 统一导出useStore方法
export default function useStore() {
  return {
    appModule: appModule(),
    menuModule: menuModule(),
	globalConfig:globalConfig(),
	userModule:userModule()
  }
}