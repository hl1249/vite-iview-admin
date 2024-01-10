export default {

	/**
	 * @description: .env文件配置
	*/
	HTTP_REQUEST_URL: import.meta.env.VITE_BASE_URL,

	/**
	 * @description: 默认打开的首页的路由name值，默认为home
	 */
	HOME_NAME: 'home_page',
	// 请求头
	HEADER: {
		'content-type': 'application/json',
	},

	// 回话密钥名
	TOKENNAME: 'Authori-zation',

	// 缓存时间 0 永久
	EXPIRE: 0,
}