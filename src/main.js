import App from './App.vue';
import router from './router';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import '@/assets/style/global.less';

import 'vant/lib/index.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
