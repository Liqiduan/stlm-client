<template>
  <v-tabs vertical>
    <v-tab v-for="host in hosts" :key="host._id">
      {{host.name}}
    </v-tab>

    <v-tab-item v-for="host in hosts" :key="host._id">
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
import {computed} from '@vue/composition-api'
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

		return {
			hosts: hostsData.items
		}
	}
}
</script>

