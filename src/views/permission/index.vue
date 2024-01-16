<template>
    <Card>
        <Title :level="4">当前身份{{ use_info.roles }}</Title>
        <RadioGroup v-model="use_info.roles[0]" type="button" button-style="solid" @on-change="chngeRole">
            <Radio label="admin"></Radio>
            <Radio label="edit"></Radio>
        </RadioGroup>

        <Title :level="4">全局方法</Title>
        <Alert v-if="$checkPermission(['admin'])">$checkPermission(['admin'])</Alert>
        <Alert v-if="$checkPermission(['edit'])" type="warning">$checkPermission(['edit'])</Alert>
        <Alert v-if="$checkPermission(['edit', 'admin'])" type="success">$checkPermission(['edit','admin'])</Alert>

        <Title :level="4">指令方法</Title>
        <div v-permission="['admin']">
            <Alert> v-permission="['admin']"</Alert>
        </div>
        <div v-permission="['edit']">
            <Alert type="warning">v-permission="['edit']"</Alert>
        </div>
        <div v-permission="['edit', 'admin']">
            <Alert type="success">v-permission="['edit','admin']"</Alert>
        </div>
    </Card>
</template>

<script setup>
import useStore from '@/store'
import { storeToRefs } from 'pinia'
const { userModule } = useStore()


const useUserModule = storeToRefs(userModule)
const use_info = useUserModule.user_info
const chngeRole = (role) => {
    userModule.SET_ROLES(role)
}
</script>