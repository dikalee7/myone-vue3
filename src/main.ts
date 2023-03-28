import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import * as cmn from '@/assets/js/cmn';

loadFonts();
const app = createApp(App);
app.use(router).use(vuetify).mount('#app');
app.config.globalProperties.$cmn = cmn;
