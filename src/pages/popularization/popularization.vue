<script setup async>
	import { useRouter } from 'vue-router';
	import { get, post } from '@/api/http/index';
	import { ref } from 'vue';
	const router = useRouter();

	const list = ref([]);

	const parmas = {
		type: '诗经湿地植物',
		pageNum: 1,
		pageSize: 99,
	};
	post('/CloudClass/getClassInfo', parmas).then((list) => {
		console.log(list);

		list.value = list;
	});
	// list.value = await post('/CloudClass/getClassInfo', parmas);
</script>

<template>
	<section>{{ list.length }}</section>
</template>

<style lang="less" scoped></style>
