//每次调用post get ajax 会先调用这个函数
//在这个函数中会拿到这个对象
$.ajaxPrefilter(function(options) {

    // 在发起真正的Ajax请求之前，统一拼接请求的根路径
    options.url = 'http://ajax.frontend.itheima.net' + options.url
        //统一为有权限的接口，设置headers请求头

    if (options.url.indexOf('/my/') !== -1) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }

    }



    //全局统一挂载complete回调函数
    options.complete = function(res) {

        if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败！') {
            //强制清空token
            localStorage.removeItem('token')
                //强制跳转到登录页
            location.href = '/login.html'
        }
    }

})