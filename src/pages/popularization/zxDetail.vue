<script setup>
	import { useRoute } from 'vue-router';
	const route = useRoute();

	const url = route.query.path;
	console.log(url);
</script>

<template>
	<iframe
		:src="url"
		frameborder="0"
	></iframe>
</template>

<style lang="less" scoped></style>
