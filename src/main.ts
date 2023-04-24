import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import SelectComp from '@/components/vueti/SelectComp.vue';
import ModalView from '@/components/ModalView.vue';
import useCmn from '@/composables/cmn';
import useMo from '@/composables/mo';
import mitt from 'mitt';

loadFonts();
const app = createApp(App);
app.config.globalProperties.$utils = useCmn();
app.config.globalProperties.$mo = useMo();
app.config.globalProperties.$emitter = mitt();
app.component('SelectComp', SelectComp);
app.component('ModalView', ModalView);
app.use(router).use(store).use(vuetify).use(VueSweetalert2).mount('#app');
