<script setup>
	import { useRouter } from 'vue-router';
	const router = useRouter();

	import { useGlobalStore, useAuthStore } from '@/stores';
	const { setOlderUI } = useGlobalStore();
	const { logged, setLogged } = useAuthStore();

	ZWJSBridge?.getUiStyle().then(({ uiStyle }) => {
		// window.isOlder = uiStyle == 'elder';
		setOlderUI(uiStyle == 'elder');
		router.push('/home');
	});
	if (logged) ZWJSBridge?.close(); //解决二次回退

	setLogged(true);
</script>

<template>
	<section class="full flex-center">
		<img
			class="loading"
			src="@/assets/icons/loading.svg"
			alt=""
		/>
	</section>
</template>

<style lang="less" scoped>
	@keyframes loading {
		from {
			transform: rotate(0deg);
		}

		to {
			transform: rotate(360deg);
		}
	}
	.loading {
		animation: loading 3s infinite;
	}
</style>
