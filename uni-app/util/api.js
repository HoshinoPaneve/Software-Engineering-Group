//后端端口
const BASE_url='http://localhost:9090'

//封装链接请求方法
export const myRequest = (options)=>{
	return new Promise((resolve,reject)=>{
		let token=uni.getStorageSync('token')
		
		let header={'source-client': 'miniapp',}
		header.token=token
		
		uni.request({
			url:BASE_url+options.url,
			method:options.method||'GET',
			data:options.data||{},
			header:header,
			success: (res) => {
				if(res.statusCode!==200){
					uni.showToast({
						title:'获取数据失败',
						icon:"error"
					})
				}
				if(res.data.code==401){
					uni.clearStorage()
					uni.switchTab({
						url:'/pages/me/me'
					})
				}
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title:'请求接口失败',
					icon:"error"
				})
				
				reject(err)
			}
		})
	})
}