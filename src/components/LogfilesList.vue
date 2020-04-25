<template>
  <v-list two-line subheader max-width="320">
    <v-subheader>
      Logfiles
    </v-subheader>
    <v-list-item v-for="logfile in logfiles" :key="logfile._id">
      <v-list-item-content>
        <v-list-item-title
          v-text="logfile.filename">
        </v-list-item-title>

        <v-list-item-subtitle
          v-text="logfile.path">
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action>
        <v-btn icon>
          <v-icon>mdi-link</v-icon>
        </v-btn>
      </v-list-item-action>

    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import {computed} from '@vue/composition-api'
import {useFind, models} from 'feathers-vuex'

export default {
  name: 'LogfilesList',
  setup(props) {
		const logfiles = models.api.Logfiles
		const params = computed(() => {
			return {
				query: {
        }
			}
		})

		const logfilesData = useFind({model:logfiles, params:params})

		return {
			logfiles: logfilesData.items
		}
  }
}
</script>
