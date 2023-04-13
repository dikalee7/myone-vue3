<template>
  <Bar :data="data" :options="options" />
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
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { Bar } from 'vue-chartjs';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

export default defineComponent({
  components: { Bar },
  setup() {
    return {};
  },
  data() {
    return {
      rsltJson: '',
      data: {
        labels: ['January', 'February', 'March'],
        datasets: [{ data: [40, 20, 12] }],
      },
      options: {
        responsive: true,
      },
    };
  },
  methods: {
    async submitForm() {
      this.$strUtil.testStr('abced');
    },
  },
});
</script>

<style scoped></style>
