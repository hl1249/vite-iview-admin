<template>
    <div class="error-store">
        <Badge dot :count="error_list.length">
            <Button type="text">
                <Icon @click="openErrorLoggerPage" type="ios-bug" class="icon" size="20" />
            </Button>
        </Badge>
    </div>
</template>

<script setup>
import useStore from '@/store'
const {appModule} = useStore()
import {storeToRefs} from 'pinia'
import {useRouter} from 'vue-router'

const router = useRouter()

let {
    error_list
} = storeToRefs(appModule)

const openErrorLoggerPage = () =>{
    router.push({
        name:'error_logger_page'
    })
}

</script>

<style lang="less">
.error-store{
  margin-right: 12px;
  .ivu-badge-dot{
    top: 20px;
  }
  .ivu-btn.ivu-btn-text{
    // padding: 5px 1px 6px;
    padding: 0;
  }
}
</style>