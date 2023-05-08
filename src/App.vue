<script setup>
	import { RouterView } from 'vue-router';
	ZWJSBridge.onReady();
	console.clear();
	ZWJSBridge.setTitle({
		title: '博悦游',
	});
</script>

<template>
	<RouterView />
</template>

<style lang="less">
	#app {
		height: 100vh;
	}
</style>
