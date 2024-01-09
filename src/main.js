import { createApp } from 'vue'
import { createPinia } from 'pinia'

const pinia = createPinia()

import App from './App.vue'

import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'

import './permission'

import './styles/index.less'

import config from '@/config'

import router from './router';

import './mock'

const app = createApp(App)
app.config.globalProperties.$config = config


app.use(pinia).use(router).use(ViewUIPlus).mount('#app')
