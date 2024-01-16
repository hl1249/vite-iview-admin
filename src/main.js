import { createApp } from 'vue'
import { createPinia } from 'pinia'

const pinia = createPinia()

import App from './App.vue'

import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'

import './permission'
import {checkPermission} from '@/util/permission'
import permission from '@/directives'
import './styles/index.less'

import config from '@/config'

import router from './router';

import './mock'

const app = createApp(App)
app.directive('permission',permission)
app.use(pinia).use(router).use(ViewUIPlus).mount('#app')

app.config.globalProperties.$config = config
app.config.globalProperties.$checkPermission = checkPermission