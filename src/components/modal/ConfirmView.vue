<template>
  <div>
    <v-dialog
      v-model="dialog"
      :max-width="options.width"
      :style="{ zIndex: options.zIndex }"
      @keydown.esc="cancel"
    >
      <v-card>
        <v-toolbar dark :color="options.color" dense flat>
          <v-toolbar-title class="text-body-2 font-weight-bold grey--text">
            {{ title }}
          </v-toolbar-title>
        </v-toolbar>
        <!-- eslint-disable -->
        <v-card-text
          v-show="!!message"
          class="pa-4 black--text"
          v-html="message"
        ></v-card-text>
        <!-- eslint-enable -->
        <v-card-actions class="pt-3">
          <v-spacer></v-spacer>
          <v-btn
            v-if="!options.noconfirm"
            color="grey"
            text
            class="body-2 font-weight-bold"
            @click="cancel"
            >Cancel</v-btn
          >
          <v-btn
            color="primary"
            class="body-2 font-weight-bold"
            outlined
            @click="agree"
            >OK</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue';
import sanitizeHtml from 'sanitize-html';
import { IFConfirmOptions, IFConfirmRequset } from '@/composables/types';

export default defineComponent({
  setup() {
    const dialog = ref(false);
    const resolve = ref(null);
    const reject = ref(null);
    const message = ref('');
    const title = ref('');
    const options: Ref<IFConfirmOptions> = ref({
      color: 'grey lighten-3',
      width: 400,
      zIndex: 3000,
      noconfirm: false,
    });
    return { dialog, resolve, reject, message, title, options };
  },
  mounted() {
    this.$emitter.on('showAlert', this.testAlert);
  },
  methods: {
    testAlert(p: IFConfirmRequset) {
      this.open(p.title, p.message, p.options);
    },
    open(title: string, message: string, options: IFConfirmOptions) {
      this.dialog = true;
      this.title = title;
      this.message = sanitizeHtml(message);
      this.options = Object.assign(this.options, options);
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
    },
    agree() {
      this.$emitter.emit('returnAlert', true);
      this.resolve(true);
      this.dialog = false;
    },
    cancel() {
      this.$emitter.emit('returnAlert', false);
      this.resolve(false);
      this.dialog = false;
    },
  },
});
</script>

<style scoped></style>
