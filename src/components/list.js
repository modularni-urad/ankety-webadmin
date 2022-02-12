import Actions from './actions.js'

export default {
  props: ['query', 'cfg'],
  components: { Actions },
  template: `
  <ACListView :query="query" :cfg="cfg">
    <template v-slot:tbody="{ items, fields }">

      <tr v-for="row,rowidx in items" :key="rowidx">
        <td>{{ row.id }}</td>
        <td>{{ row.name }}</td>
        <td>{{ row.maxpositive }}</td>
        <td>{{ row.maxnegative }}</td>
        <td>{{ row.maxperoption }}</td>
        <td>{{ row.voting_start | date }}</td>
        <td>{{ row.voting_end | date }}</td>
        <td>{{ row.author }}</td>
        <Actions key="actions" :query="query" :row="row" :cfg="cfg" />
      </tr>

    </template>
  </ACListView>
  `
}
