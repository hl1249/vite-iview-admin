import {
	defineConfig
} from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	base:'./',
	server: {
		proxy: {
			'/api': {
				target: 'http://127.0.0.1',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '/api') // 如果后端的接口路径不包含 '/api'，可能需要调整这里的 rewrite
			}
		}
	},
	resolve: { 
		alias: {
			"~": ["/node_modules"],
			"@": ["/src"],
		}
	},
	plugins: [
		vue(),vueJsx()
	],
	css: {
		preprocessorOptions: {
			less: {
				math: "always", // 括号内才使用数学计算
				globalVars: {
					// 全局变量
					mainColor: "red",
				},
				javascriptEnabled: true,
			},
		},
	}
})