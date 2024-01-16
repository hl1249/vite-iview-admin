import {
    permissionContrast
}from '@/util'

import useStore from '@/store'
/**
 * @description: 判断用户是否有该权限
 * @return {*}
 */
export const checkPermission = (roles_array)=>{
    const {userModule} = useStore()
    const user_roles = userModule.user_info.roles
    return !permissionContrast(user_roles,roles_array)
}