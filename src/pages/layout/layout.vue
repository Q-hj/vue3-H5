<script setup>
	import { RouterView, useRouter } from 'vue-router';
	const router = useRouter();
	// const routes=router.options.routes
	// console.log(routes);
</script>

<template>
	<main>
		<RouterView />
	</main>

	<van-tabbar route>
		<van-tabbar-item
			replace
			to="/home"
			icon="home-o"
			>首页</van-tabbar-item
		>
		<van-tabbar-item
			replace
			to="/user"
			icon="user-circle-o"
			>我的</van-tabbar-item
		>
	</van-tabbar>
</template>

<style lang="less" scoped>
	main {
		height: calc(100vh - 50px);
		overflow: scroll;
	}
</style>
