import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_API_URL
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.VUE_APP_API_SECRET}`

Vue.prototype.$axios = axios

export default axios
