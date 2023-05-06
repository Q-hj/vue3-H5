/*
 * @Date: 2022-08-10 14:19:08
 * @LastEditors: Mr.qin
 * @LastEditTime: 2022-11-29 14:01:17
 * @Description: axios封装
 */
import axios from 'axios';
import Message from './utils/message';

const request = axios.create({
	baseURL: 'https://szsb.hzxh.gov.cn:8080/WxMini',
	timeout: 1000 * 60 * 2,
});
// 将参数转成Body 表单格式
const transformBody = (data) => {
	let ret = '';
	for (let it in data) {
		ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
	}
	return ret.slice(0, -1);
};

// 发送请求前的统一处理。。。
request.interceptors.request.use(
	(config) => {
		// console.log(config);

		// 设置请求头
		// config.headers.get['Content-Type'] = 'application/json'; //默认json格式

		if (config.method == 'post') {
			// config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
			config.transformRequest = [transformBody];
		}

		// 请求头中添加token
		const token = sessionStorage.getItem('token');
		token && (config.headers['token'] = token);

		return config;
	},
	(error) => {
		console.log(error);
		return Promise.reject(new Error('网络异常'));
	}
);

// 请求后的处理
request.interceptors.response.use(
	(response) => {
		// console.log(response);

		// 剖析：response（http响应）  -->  res（http响应体）  -->  data | result（后端接口结果）
		const resContent = response.data;

		const { code, result, data } = resContent; //解构后端返回内容

		// if (!res.code && !res.status) return res.data || res;

		// if (code === 200) Promise.resolve(result);
		// else return Promise.reject(resContent);

		return data;
	},
	(error) => {
		// console.log(error);

		const errorData = error.response?.data;
		const errorText = errorData?.message || '请求超时';
		const method = error.config?.method;

		// console.error(`\t[${method}]${response}\n` + "\t[url]:" + error.config.url);
		console.error(
			`${errorText}` +
				'\n\t请求方式:' +
				`  ${method.toUpperCase()}` +
				'\n\t请求路径:' +
				' ' +
				error.config.url
		);
		const errorCode = error.response.status;

		// switch  ?
		const httpCodey = {
			400: '请求参数错误',
			401: '权限不足',
			403: '服务器拒绝本次访问',
			404: '请求资源未找到',
			405: '请求方法错误',
			500: '内部服务器错误',
			501: '服务器不支持该请求中使用的方法',
			502: '网关错误',
			504: '网关超时',
		};
		// Message.error(httpCode[errorCode] || '请求超时！');

		return Promise.reject(errorData);
	}
);

export default request;
