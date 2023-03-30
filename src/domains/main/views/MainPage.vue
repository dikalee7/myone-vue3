<template>
  <v-sheet class="mx-auto">
    <v-form @submit.prevent="submitForm">
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
      <div>
        <pre>{{ rsltJson }}</pre>
      </div>
    </v-form>
  </v-sheet>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { publicApis } from '@/api/index';
import { IFBillInfo } from '../type';
export default defineComponent({
  setup() {
    return {};
  },
  data() {
    return {
      rsltJson: '',
    };
  },
  methods: {
    async submitForm() {
      const testV: Pick<IFBillInfo, 'numOfRows'> = {
        numOfRows: 2,
      };

      const response = await publicApis(
        '/9710000/BillInfoService2/getBillInfoList',
        this.$strUtil.queryString(testV),
      );

      this.rsltJson = JSON.stringify(response, null, 2);

      this.$strUtil.testStr('abced');
    },
  },
});
</script>

<style scoped></style>
