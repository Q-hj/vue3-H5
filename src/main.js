import App from './App.vue';
import router from './router';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import 'uno.css';

import 'vant/lib/index.css';

import '@/assets/style/global.less';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
