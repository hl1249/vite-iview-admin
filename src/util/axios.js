import HttpRequest from '@/util/request'

import app from '@/config/app'

const {HTTP_REQUEST_URL} = app

const baseUrl = process.env.NODE_ENV === 'development' ? HTTP_REQUEST_URL.dev : HTTP_REQUEST_URL.pro

const axios = new HttpRequest(baseUrl)
export default axios
