import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import PopupHeader from '@/components/layout/PopupHeader.vue';
import ActionButton from '@/components/layout/ActionButton.vue';
import SelectComp from '@/components/vueti/SelectComp.vue';
// import mitt from 'mitt';
import emitter from '@/composables/emitter';
import { createVueKakaoSdk } from 'vue3-kakao-sdk';

const apiKey = '184c88323153d2bf849f8d57483b1f1b';

loadFonts();
const app = createApp(App);
// app.config.globalProperties.$utils = useUtils();
app.config.globalProperties.$emitter = emitter;
app.component('PopupHeader', PopupHeader);
app.component('ActionButton', ActionButton);
app.component('SelectComp', SelectComp);
app
  .use(router)
  .use(store)
  .use(vuetify)
  .use(createVueKakaoSdk(apiKey))
  .mount('#app');
