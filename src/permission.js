import useStore from '@/store'
import {storeToRefs} from 'pinia'

import ViewUIPlus from 'view-ui-plus'
import router from '@/router/index'


router.beforeEach(async (to, _from,next) => {
	// console.log('从', _from, '跳转到', to);
	
	const {userModule} = useStore()
	
	const {GET_TOKEN} = userModule
	
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

	let active_name = to.name
	if(active_name != 'login'){
		menuModule.setActiveName(active_name)
		menuModule.setOpenNames(to)
		menuModule.setBreadCrumb(to)
		menuModule.addRouterHistory(to)
	}

})
