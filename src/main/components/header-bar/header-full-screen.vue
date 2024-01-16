<template>
    <div class="full-screen-btn-con">
        <Tooltip content="全屏" placement="bottom">
            <Icon @click.native="handleChange" :type="isFullscreen ? 'md-contract' : 'md-expand'" class="icon" size="20" />
        </Tooltip>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isFullscreen = ref(false)

onMounted(() => {
    document.addEventListener('fullscreenchange', function () {
        if (document.fullscreenElement) {
            console.log('Entered fullscreen',isFullscreen.value);
            isFullscreen.value = true
        } else {
            console.log('Exited fullscreen',isFullscreen.value);
            isFullscreen.value = false
        }
    });
})

const handleChange = () => {
    if (document.fullscreenElement) {

        document.exitFullscreen()

    } else {
        document.documentElement.requestFullscreen()
    }


}
</script>