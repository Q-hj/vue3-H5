import { createRouter, createWebHashHistory } from 'vue-router';
// import useAuthStore from '@/stores/auth';

import pages from './pages';

import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false });

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '',
			redirect: '/login',
		},
		{
			path: '/login',
			name: '登录',
			component: () => import('@/pages/login/login.vue'),
		},
		{
			path: '/layout',
			name: 'layout',
			component: () => import('@/pages/layout/layout.vue'),
			redirect: '/home',
			children: pages,
		},
		{
			// 匹配任意路由
			path: '/:pathMatch(.*)*',
			name: 'NotFound',
			redirect: '/layout',
		},
	],
});

//路由跳转开始
router.beforeEach((to) => {
	// const store = useAuthStore();
	// console.log(to);

	// document.title = to.name;

	NProgress.start();
	// instead of having to check every route record with
	// to.matched.some(record => record.meta.requiresAuth)
	//  !auth.isLoggedIn()
	return;
	if (to.meta.requiresAuth) {
		// this route requires auth, check if logged in
		// if not, redirect to login page.
		return {
			path: '/login',
			// save the location we were at to come back later
			query: { redirect: to.fullPath },
		};
	}
});
//路由跳转结束
router.afterEach(() => {
	NProgress.done();
});
export default router;
