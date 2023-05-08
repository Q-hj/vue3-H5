import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

// *  在 Setup Store 中：
// * ref() 就是 state 属性
// * computed() 就是 getters
// * function() 就是 actions
export default defineStore(
	'auth',
	() => {
		// 是否第一次进入应用，解决二次回退
		const logged = ref(false);
		function setLogged(value) {
			logged.value = value;
		}

		return {
			logged,
			setLogged,
		};
	},
	{
		persist: {
			enabled: true,
			strategies: [
				{
					key: 'authStore',
					// storage: localStorage,
					// 声明哪些变量将会被持久化存储
					// paths: ["menu"],
				},
			],
		},
	}
);
