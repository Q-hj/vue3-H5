<script setup>
	import { useRouter } from 'vue-router';
	import { get, post } from '@/api/http/index';
	import { ref, reactive } from 'vue';
	const router = useRouter();

	const dataList = ref([]);

	const parmas = {
		type: '诗经湿地植物',
		pageNum: 1,
		pageSize: 99,
	};
	post('/CloudClass/getClassInfo', parmas).then((list) => {
		dataList.value = list;
	});
	// list.value = await post('/CloudClass/getClassInfo', parmas);

	const toDetail = ({ path }) => {
		router.push({
			// name: '科普详情',
			// params: { path },
			path: '/zxDetail',
			query: { path },
		});
	};
</script>

<template>
	<section class="min-h-full bg-page">
		<ul class="w-full box-border p-10px grid grid-cols-2 gap-15px">
			<li
				@click="toDetail(item)"
				v-for="item in dataList"
				:key="item.zxId"
			>
				<img
					class="w-full block"
					:src="item.url"
					alt=""
				/>
				<p class="van-ellipsis text-14px p-x-5px p-y-10px bg-white">{{ item.title }}</p>
			</li>
		</ul>
	</section>
</template>

<style lang="less" scoped></style>
