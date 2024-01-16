<template>
    <Button @click="pageHome" size="large" type="primary">
        返回首页
    </Button>
    <Button @click="pageBack" size="large" type="success">
        返回上一页({{ time }})
    </Button>
</template>

<script setup>


import appConfig from '@/config/app'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
onMounted(() => {
    console.log('我是mounted')
})
const router = useRouter()
const time = ref(5)
const pageBack = () => {
    router.back()
}
const pageHome = () => {
    router.push({
        name:appConfig['HOME_NAME']
    })
}
const timer = setInterval(() => {
    console.log(1)
    time.value -= 1
    if (time.value <= 0) {
        clearInterval(timer)
        pageBack()
        time.value = 5
    }
}, 1000)

onBeforeUnmount(() => {
    clearInterval(timer)
})
</script>