<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen scrollable>
      <v-card>
        <PopupHeader :title="title" @closePopup="fnClosePop" />

        <ListComp :items="listData" />
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ListComp from '@/components/vueti/ListComp.vue';
import useUtils from '@/composables/utils';
import { publicApiCall } from '@/api/index';
import { IFBillInfoDetail } from '@/api/types/publicApi';
import { AxiosResponse } from 'axios';

export default defineComponent({
  components: {
    ListComp,
  },
  setup() {
    const { cmn, useMo } = useUtils();
    const dialog = ref(false);
    const title = ref('리스트 샘플');
    const listData = ref([]);

    return { cmn, mo: useMo(), title, dialog, listData };
  },
  mounted() {
    this.fnInit();
  },
  methods: {
    fnInit() {
      this.callBillInfo();
      this.listData = [
        { type: 'subheader', title: '의안 목록' },
        {
          prependAvatar: '',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: '',
          title: 'Summer BBQ',
          subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: '',
          title: 'Oui oui',
          subtitle:
            '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: '',
          title: 'Birthday gift',
          subtitle:
            '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: '',
          title: 'Recipe to try',
          subtitle:
            '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ];
    },
    async callBillInfo() {
      const response: AxiosResponse<IFBillInfoDetail[]> = await publicApiCall(
        '/9710000/BillInfoService2/getBillInfoList',
        {},
      );

      this.listData = response.data.reduce((p, c) => {
        p.push(
          {
            title: `no.${c.billNo} ${c.proposeDt}`,
            subtitle: c.billName,
          },
          { type: 'divider', inset: false },
        );
        return p;
      }, []);
    },
    fnOpenPop() {
      this.dialog = true;
    },
    fnClosePop() {
      this.dialog = false;
    },
  },
});
</script>

<style scoped></style>
