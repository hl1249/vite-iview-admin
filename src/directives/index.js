import {
    permissionContrast
}from '@/util'

import {storeToRefs } from 'pinia'

import useStore from '@/store'

const permission = {
    updated(el,binding){
        const {userModule} = useStore()
        const {value} = binding
        const useUserModule = storeToRefs(userModule)

        const user_roles  = useUserModule.user_info.value.roles

        if(permissionContrast(user_roles,value)) el.style.display = 'none'
        else el.style.display = 'block'
        // 
    },
    unmounted(el){
        // el.style.backgroundColor = 'black'
    }
}

export default permission