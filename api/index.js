import axios from 'axios'
import { DOMAIN } from '../config'

const request = axios.create({
  timeout: 15000,
  headers: {'X-Custom-Header': 'ab'}
})
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.data && response.data.code === 'success') {
    return response.data
  } else {
    return Promise.reject(response)
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

export const fetchArtclsDetail = params => request.get(DOMAIN + '/webApi/artcls/detail', { params })
export const fetchArticleList = params => request.post(DOMAIN + '/webApi/article/search', params)
export const fetchArticleDetail = params => request.get(DOMAIN + '/webApi/article/detail', { params })