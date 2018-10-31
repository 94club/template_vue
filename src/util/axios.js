import axios from 'axios'

const axiosIns = axios.create()
axiosIns.defaults.baseURL = 'http://192.168.0.1/'
axiosIns.defaults.timeout = 20000

axiosIns.interceptors.request.use((request) => {
  return request
}, (err) => {
  return Promise.reject(err)
})

axiosIns.interceptors.response.use((response) => {
  return response
}, (err) => {
  return Promise.reject(err)
})

const ajaxMethod = ['get', 'post']
const Api = {}
ajaxMethod.forEach((method) => {
  Api[method] = function (uri, data, config) {
    return new Promise((resolve, reject) => {
      axiosIns[method](uri, data, config).then((response) => {
        resolve(response)
      }).catch((err) => {
        console.log(err)
      })
    })
  }
})
export default Api
