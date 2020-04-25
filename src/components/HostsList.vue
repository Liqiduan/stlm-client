<template>
  <v-tabs 
    vertical 
    v-model="selectHost">
    <v-tab v-for="host in hosts" :key="host._id">
      {{host.name}}
    </v-tab>

    <v-tab-item v-for="host in hosts" :key="host._id">
      <v-toolbar>
        <v-toolbar-title>
          {{host.name}}
        </v-toolbar-title>
        <v-spacer/>
        <v-btn icon
          @click="activate">
          <v-icon>mdi-link</v-icon>
        </v-btn>
      </v-toolbar>

      <v-row>
        <v-col md="auto">
          <LogfilesList :hostId="host._id"></LogfilesList>
        </v-col>

        <v-col md="auto">
          <v-divider vertical></v-divider>
        </v-col>

        <v-col md="auto">
          <LogsTable :hostId="host._id"/>
        </v-col>
      </v-row>
    </v-tab-item>
  </v-tabs>
</template>

<script lang="ts">
import {ref, computed} from '@vue/composition-api'
import {useFind, models} from 'feathers-vuex'

import LogfilesList from '@/components/LogfilesList.vue'
import LogsTable from '@/components/LogsTable.vue'

export default {
	name: 'HostsList',
  components: {
    LogfilesList,
    LogsTable
  },

	setup (props, context) {
		const hosts = models.api.Hosts
		const params = computed(() => {
			return {
				query: {}
			}
		})

		const hostsData = useFind({model:hosts, params:params})

    const selectHost = ref(null);
    function activate() {
      if (selectHost.value == null) {
        return
      }

      const host = hostsData.items[selectHost.value]
      host.isActivated = true
      host.save()
    }

		return {
			hosts: hostsData.items,
      activate,
      selectHost
		}
	}
}
</script>

