<script setup>
	import { useRoute } from 'vue-router';
	const route = useRoute();

	const url = route.query.path;
	console.log(url);
	// window.open(url);
	ZWJSBridge.openLink({
		url,
	})
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.log(err);
		});
</script>

<template>
	<iframe
		class="full"
		:src="url"
		frameborder="0"
	></iframe>
</template>

<style lang="less" scoped></style>
