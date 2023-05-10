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
import useCmn from '@/domains/sample/composables/sampleCmn';
import { pubApiCall } from '@/api/index';
import { IFPubService } from '@/api/types/pubApi';
import ListComp from '@/components/vueti/ListComp.vue';

export default defineComponent({
  components: {
    ListComp,
  },
  setup() {
    const { cmn, mo } = useCmn();
    const dialog = ref(false);
    const title = ref('리스트 샘플');
    const listData = ref([]);

    return { cmn, mo, title, dialog, listData };
  },
  mounted() {
    this.fnInit();
  },
  methods: {
    fnInit() {
      this.callPublicService();
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
    async callPublicService() {
      const response = await pubApiCall<IFPubService>('/gov24/v1/serviceList', {
        page: 1,
        perPage: 10,
      });

      this.listData = response.data.reduce((p, c) => {
        p.push(
          {
            title: c['서비스명'],
            subtitle: c['서비스목적'],
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
