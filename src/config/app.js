export default {
	
	HTTP_REQUEST_URL:{
		dev: `/api`, //反向代理的地址
		pro: ``
	},  //测试 

	HEADER: {
		'content-type': 'application/json',
	},
	
	// 回话密钥名
	TOKENNAME: 'Authori-zation',
	
	// 缓存时间 0 永久
	EXPIRE: 0,
}