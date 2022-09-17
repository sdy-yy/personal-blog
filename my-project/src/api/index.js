import Axois from "axios";
const ajax = Axois.create({
    duration: 1000
})


// 添加请求拦截器
ajax.interceptors.request.use(function (config) {
    console.log(config)
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
ajax.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if (response.status == 200)
        return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default ajax;
