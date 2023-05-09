<script setup>
	import { useGlobalStore } from '@/stores';
	const { isOlderUI } = useGlobalStore();
	import { get, post } from '@/api/http/index';
	import { useRouter } from 'vue-router';
	const router = useRouter();
	const images = [
		'https://szsb.hzxh.gov.cn:8080/backgroud/2022-07-28/46d1149a-1097-4658-aa48-7410258afb6f.png',
		'https://szsb.hzxh.gov.cn:8080/backgroud/2023-02-01/3631727a-8754-4528-9a90-5d9eaa6feb80.jpeg',
		'https://szsb.hzxh.gov.cn:8080/backgroud/2022-12-06/b6b579c5-54bb-414f-9282-e560b703ddf4.jpg',
	];
	const replace = (path) => {
		router.push(path);
	};

	// console.log('适老化版：' + isOlderUI);

	const hanldeClick = (i) => {
		router.push(i === 2 ? 'popularization' : 'building');
	};
</script>

<template>
	<section class="h-full">
		<!-- 顶部留白 -->
		<!-- <div class="w-full h-30px"></div> -->

		<!-- 轮播 -->
		<van-swipe
			class="w-full !h-200px"
			:autoplay="5000"
			lazy-render
		>
			<van-swipe-item
				v-for="image in images"
				:key="image"
			>
				<img
					class="full"
					:src="image"
				/>
			</van-swipe-item>
		</van-swipe>

		<div
			v-if="isOlderUI"
			class="p-30px"
		>
			<nav
				@click="hanldeClick(i)"
				class="bg-#67bdde p-20px flex-around-center rounded-20px mt-30px"
				v-for="(item, i) in ['个人预约', '团队预约', '线上科普']"
				:key="'nav' + i"
			>
				<img
					class="w-60px"
					:src="require(`@/assets/icons/home_nav_icon_${i + 1}.png`)"
					alt=""
				/>
				<span class="text-white text-36px">{{ item }}</span>
			</nav>
		</div>

		<div
			v-else
			class="block"
		>
			<p>参观预约</p>
			<div class="content">
				<nav
					@click="replace('building')"
					class="w-50% h-65px p-x-10px"
				>
					<img
						width="60"
						src="@/assets/images/appointment-person.png"
						alt=""
					/>
					<p>个人预约</p>
				</nav>
				<nav style="width: 20px; opacity: 0"></nav>
				<nav
					@click="replace('building')"
					class="w-50% h-65px p-x-10px"
				>
					<img
						width="60"
						src="@/assets/images/appointment-team.png"
						alt=""
					/>
					<p>团队预约</p>
				</nav>
			</div>

			<p>线上科普</p>
			<div class="content gap-20px">
				<nav
					@click="replace('popularization')"
					class="w-100% relative"
				>
					<img
						class="w-full rounded-10px"
						src="@/assets/images/bg-nav.png"
						alt=""
					/>
					<p class="absolute-y-center right-10px">立即查看</p>
				</nav>
			</div>
		</div>
	</section>
</template>

<style lang="less" scoped>
	.block {
		padding: 0 10px;
		> p {
			margin-top: 10px;
			font-size: 14px;
			line-height: 30px;
			font-weight: bold;
		}
		> .content {
			background-color: #fff;
			border-radius: 10px;
			padding: 5px 15px;
			display: flex;
			justify-content: space-between;
			box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);

			nav {
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-radius: 10px;
				background: linear-gradient(to right, #34c3e1, #4c89be);

				p {
					font-size: 12px;
					height: 20px;
					display: flex;
					align-items: center;
					padding: 5px 8px;
					background-color: #fff;
					border-radius: 10px;
				}
			}
		}
	}
</style>
