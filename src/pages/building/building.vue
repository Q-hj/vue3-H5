<script setup>
	import { useGlobalStore } from '@/stores';
	const { isOlderUI } = useGlobalStore();
</script>

<template>
	<section class="h-full flex-center">
		<div class="flex-col-center">
			<img
				width="100"
				src="@/assets/images/building.png"
				alt=""
			/>
			<p
				:class="isOlderUI ? 'text-20px' : 'text-12px'"
				class="color-#CCCCCC"
			>
				页面建设中，敬请期待！
			</p>
		</div>
	</section>
</template>

<style lang="less" scoped></style>
