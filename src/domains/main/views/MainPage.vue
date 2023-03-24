<template>
  <v-sheet class="mx-auto">
    <v-form @submit.prevent="submitForm">
      <v-text-field
        v-model="firstName"
        :rules="rules"
        label="First name"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { registerUser } from '@/api/index';
import { IFHuman } from '../type';
export default defineComponent({
  setup() {
    return {};
  },
  data() {
    return {
      firstName: '',
      rules: [
        (value: string) => {
          if (value) return true;

          return 'You must enter a first name.';
        },
      ],
    };
  },
  methods: {
    submitForm() {
      console.log('submitForm');
      const testV: IFHuman = {
        username: 'test1username',
        password: 'test1username',
        nicname: 'test1nicname',
      };
      registerUser(testV);
    },
  },
});
</script>

<style scoped></style>
