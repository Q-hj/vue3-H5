export default [
	{
		path: '/home',
		name: '首页',
		component: () => import('@/pages/home/home.vue'),
	},
	{
		path: '/popularization',
		name: '线上科普',
		component: () => import('@/pages/popularization/popularization.vue'),
	},
	// {
	// 	path: '/zxDetail',
	// 	name: '科普详情',
	// 	component: () => import('@/pages/popularization/zxDetail.vue'),
	// },
	{
		path: '/user',
		name: '我的',
		redirect: '/building',
		component: () => import('@/pages/user/user.vue'),
	},
	{
		path: '/building',
		name: '建设页',
		component: () => import('@/pages/building/building.vue'),
	},
];
