<template>
    <div>
        <Button type="primary" style="margin: 0 10px 10px 0;">导出日志记录</Button>
        <Button @click="clearErrorLog" type="error" style="margin: 0 10px 10px 0;">清空日志</Button>
        <b>注：这里只会显示成功保存到服务端的错误日志</b>
        <Card>
            <Row>
                <Col>
                <Button @click="saveError" style="margin: 0 10px 10px 0;">点击测试触发程序错误</Button>
                </Col>
                <Col>
                <Button @click="saveAjaxError" style="margin: 0 10px 10px 0;">点击测试触发axios请求接口错误</Button>
                </Col>
            </Row>
        </Card>
        <Table size="small" :columns="columns" :data="error_list" width="100%"></Table>
        <BackTop :height="100" :bottom="200">
        <div class="top">返回顶端</div>
    </BackTop>
    </div>
</template>

<script setup>
import useStore from '@/store'
import {storeToRefs} from 'pinia'
import {
    saveError
} from '@/api/user.js'

import { ref } from 'vue'

const saveAjaxError = () => {
    saveError()
}

const { appModule } = useStore()

const clearErrorLog = () =>{
    appModule.clearErrorLog()
}

let {
    error_list
} = storeToRefs(appModule)

const columns = ref([
{
          type: 'index',
          title: '序号',
          algin:'center',
          width: 100
        },
    {
        title: '类型',
        width: 100,
        key: 'type'
    },
    {
        title: '编码',
        width: 100,
        key: 'code'
    },
    {
        title: '信息',
        key: 'mes',
        width:300
    },
    {
        title: 'URL',
        width: 500,
        key: 'url'
    },
    {
        title: '时间',
        key: 'time',
        sortType:'asc'
    }
])

const data = ref([
    {
        number: 18,
        code: '100861',
        info: 'New York No. 1 Lake Park',
        url: 'https://4399.cin',
        date: '2016-10-03'
    },
])

</script>