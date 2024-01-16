import useStore from '@/store'
import {storeToRefs} from 'pinia'

import ViewUIPlus from 'view-ui-plus'
import router from '@/router/index'

import {
	permissionContrast
} from '@/util'

router.beforeEach(async (to, _from,next) => {
	// console.log('从', _from, '跳转到', to);
	
	const {userModule} = useStore()
	
	const {GET_TOKEN} = userModule
	

	
	const user_info = userModule.GET_USERINFO()
	
	if(to.meta.roles){
		if(permissionContrast(user_info.roles,to.meta.roles)){
			next('/403')
		}
	}

	// token失效拦截
	if(!GET_TOKEN() && to.name != 'login'){
		next('/login');
	}else{
		next()
	}
	ViewUIPlus.LoadingBar.start();
})

router.afterEach((to) => {
	
	
	const {menuModule} = useStore()

	ViewUIPlus.LoadingBar.finish();

	if(to.name != 'login'){
		menuModule.init(to)
	}

})
