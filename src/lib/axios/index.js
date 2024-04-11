

/**
 * @description axios配置管理
 */

import axios from 'axios';
import router from "@/router"

const baseURL = 'http://ibdc.wxbigdata.com:18089'

let instance = axios.create({
    // baseURL: process.env.VUE_APP_API_URL,
    baseURL,
    timeout: 100000,
    headers: {
        get: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        post: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    }
})

instance.interceptors.request.use(config => {
    // let token = getCookie("Authorization")
    // if (token) {

    // config.headers.Authorization = token;
    // }
    return config
})

instance.interceptors.response.use(data => {
    if (data.data.code == '200') {
        return data.data.data

    } else {
        // console.log('data:',data);
        console.log(data.data.msg);
        throw new Error(data.data.msg)
    }

})


export default instance