import Mock from 'mockjs'

// 登录token时效 7天 单位：秒
const expires_time = 5000

Mock.setup({
  timeout: 500
})

Mock.mock('/api/login', 'post', {
  name: 'yellow',
  expires_time:Math.round(new Date() / 1000) + expires_time,
  token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NTBhNjA4OWEwOWE5YmQ2OGIxOTJhNDUiLCJyb2xlIjpbImFnZW50LWFkbWluIl0sInBlcm1pc3Npb24iOlsiYWdlbnQiLCJhZ2VudDEiLCJzeXMtcGVybWlzc2lvbiIsInN5cy1wZXJtaXNzaW9uLWFkZCIsInN5cy1wZXJtaXNzaW9uLWRlbGV0ZSIsInN5cy1wZXJtaXNzaW9uLXVwZGF0ZSIsInN5cy1wZXJtaXNzaW9uLXJlYWQiLCJhZ2VudC1tYW5hZ2UiLCJzeXMtbWFuYWdlIiwic3lzLW1hbmFnZS11c2VyIiwic3lzLW1hbmFnZS1yb2xlIiwic3lzLW1hbmFnZS1wZXJtaXNzaW9uIiwic3lzLW1hbmFnZS1tZW51Iiwic3lzLW1hbmFnZS1hcHAiLCJzeXN0ZW0tdW5pIiwic3lzdGVtLXVuaS11bmktaWQtZmlsZXMiLCJzeXN0ZW0tdW5pLXZrLWdsb2JhbC1kYXRhIiwic3lzdGVtLXVuaS12ay1jb21wb25lbnRzLWR5bmFtaWMiLCJzeXN0ZW0tdW5pLXVuaS1pZC1sb2ciLCJzeXN0ZW0tdW5pLW9wZW5kYi1hZG1pbi1sb2ciXSwiaWF0IjoxNzAzODM0MTA3LCJleHAiOjE3MDQ0Mzg5MDd9.pE2Y6SbeY34bcir2nZgf7bagkuzzzgCTtISNXV7ebHE',
  roles:['admin']
})


Mock.mock('/save_error_logger', 'post', {
  name: 'Mock User',
  age: 25,
  email: 'mock@example.com',
  token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NTBhNjA4OWEwOWE5YmQ2OGIxOTJhNDUiLCJyb2xlIjpbImFnZW50LWFkbWluIl0sInBlcm1pc3Npb24iOlsiYWdlbnQiLCJhZ2VudDEiLCJzeXMtcGVybWlzc2lvbiIsInN5cy1wZXJtaXNzaW9uLWFkZCIsInN5cy1wZXJtaXNzaW9uLWRlbGV0ZSIsInN5cy1wZXJtaXNzaW9uLXVwZGF0ZSIsInN5cy1wZXJtaXNzaW9uLXJlYWQiLCJhZ2VudC1tYW5hZ2UiLCJzeXMtbWFuYWdlIiwic3lzLW1hbmFnZS11c2VyIiwic3lzLW1hbmFnZS1yb2xlIiwic3lzLW1hbmFnZS1wZXJtaXNzaW9uIiwic3lzLW1hbmFnZS1tZW51Iiwic3lzLW1hbmFnZS1hcHAiLCJzeXN0ZW0tdW5pIiwic3lzdGVtLXVuaS11bmktaWQtZmlsZXMiLCJzeXN0ZW0tdW5pLXZrLWdsb2JhbC1kYXRhIiwic3lzdGVtLXVuaS12ay1jb21wb25lbnRzLWR5bmFtaWMiLCJzeXN0ZW0tdW5pLXVuaS1pZC1sb2ciLCJzeXN0ZW0tdW5pLW9wZW5kYi1hZG1pbi1sb2ciXSwiaWF0IjoxNzAzODM0MTA3LCJleHAiOjE3MDQ0Mzg5MDd9.pE2Y6SbeY34bcir2nZgf7bagkuzzzgCTtISNXV7ebHE'
})


export default Mock