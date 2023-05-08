<script setup>
	import { useGlobalStore } from '@/stores';
	const { setOlderUI } = useGlobalStore();

	import { useRouter } from 'vue-router';
	const router = useRouter();

	ZWJSBridge.getUiStyle().then(({ uiStyle }) => {
		// window.isOlder = uiStyle == 'elder';
		setOlderUI(uiStyle == 'elder');
		router.push('/home');
	});
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
