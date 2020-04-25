<template>
  <v-data-table
    :headers="headers"
    :items="logs">
  </v-data-table>
</template>

<script lang="ts">
import {ref, computed} from "@vue/composition-api";
import {useFind, models} from "feathers-vuex";

export default {
  name: 'LogsTable',

  setup(props) {
    const logs = models.api.Logs
    const params = computed(() => {
      return {
        query: {}
      }
    });

    const logData = useFind({
      model: logs,
      params: params
    });

    const headers = ref([
      { text: 'Type', value: 'type' },
      { text: 'Time', value: 'time' },
      { text: 'Text', value: 'text' },
    ]);

    return {
      logs: logData.items,
      headers
    }
  }
}
</script>
