import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import { utils } from '@/util/cmn';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import SelectComp from '@/components/vueti/SelectComp.vue';

loadFonts();
const app = createApp(App);
app.config.globalProperties.$utils = utils;
app.component('SelectComp', SelectComp);
app.use(router).use(store).use(vuetify).use(VueSweetalert2).mount('#app');
