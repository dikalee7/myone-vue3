import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import { cmn as $cmn } from '@/util/cmn';
import { stringUtils as $strUtil } from '@/util/stringUtils';

loadFonts();
const app = createApp(App);
app.use(router).use(store).use(vuetify).mount('#app');
app.config.globalProperties.$cmn = $cmn;
app.config.globalProperties.$strUtil = $strUtil;
