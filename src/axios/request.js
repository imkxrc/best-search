/*
 * @Author: ‘Yongsheng Huang 113082408@qq.com
 * @Date: 2022-06-08 09:54:51
 * @LastEditors: ‘Yongsheng Huang 113082408@qq.com
 * @LastEditTime: 2022-06-09 01:22:41
 * @FilePath: \best-search\src\axios\request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from "vue";
import axios from "axios"
import qs from "qs";
/****** 创建axios实例 ******/
const service = axios.create({
    baseURL: '', // api的base_url
    timeout: 5000 // 请求超时时间
});
/****** request拦截器==>对请求参数做处理 ******/
service.interceptors.request.use(config => {
    Vue.$loading.show()
    config.method === 'post' ?
        config.data = qs.stringify({
            ...config.data
        }) :
        config.params = {
            ...config.params
        };
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';

    return config;
}, error => { //请求错误处理
    // app.$vux.toast.show({
    //     type: 'warn',
    //     text: error
    // });
    Promise.reject(error)
});
/****** respone拦截器==>对响应做处理 ******/
service.interceptors.response.use(
    response => { //成功请求到数据
        Vue.$loading.hide();
        //这里根据后端提供的数据进行对应的处理
        if (response.data.result === 'TRUE') {
            return response.data;
        } else {
            console.log('未获取数据');
        }
    },
    error => { //响应错误处理
        console.log('error');
        console.log(error);
        console.log("响应错误", JSON.stringify(error));

        // let text = JSON.parse(JSON.stringify(error)).response.status === 404 ?
        //     '404' :
        //     '网络异常，请重试';
        return Promise.reject(error)
    }
);
export default service;