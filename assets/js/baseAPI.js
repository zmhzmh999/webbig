//每次调用post get ajax 会先调用这个函数
//在这个函数中会拿到这个对象
$.ajaxPrefilter(function(options) {
    console.log(options.url);
    // 在发起真正的Ajax请求之前，统一拼接请求的根路径
    options.url = 'http://ajax.frontend.itheima.net' + options.url
    console.log(options.url);

})