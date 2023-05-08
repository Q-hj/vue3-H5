import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export default defineStore('global', () => {
	const isOlderUI = ref(false);
	// const doubleCount = computed(() => count.value * 2);
	function setOlderUI(res) {
		isOlderUI.value = res;
	}

	return { isOlderUI, setOlderUI };
});
