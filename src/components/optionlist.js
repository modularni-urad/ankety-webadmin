import { ROUTE_NAMES, ADMIN_GROUP } from '../consts.js'

export default {
  props: ['query', 'id', 'cfg'],
  computed: {
    muzuUpravit: function () {
      return this.$store.getters.isMember(ADMIN_GROUP)
    },
    parent: function () { return ROUTE_NAMES.list }
  },
  methods: {
    doEdit: function (row) {
      const query = Object.assign({}, this.query, { _detail: row.id })
      this.$router.replace({ query })
    }
  },
  template: `
  <ACListView :query="query" :cfg="cfg">

    <template v-slot:breadcrumb="{ cfg }">
      <b-breadcrumb-item :to="{name: parent}">ankety</b-breadcrumb-item>
      <b-breadcrumb-item active>{{ id }}</b-breadcrumb-item>
    </template>

    <template v-slot:tbody="{ items, fields }">

      <tr v-for="row,rowidx in items" :key="rowidx">
        <td>{{ row.title }}</td>
        <td>{{ row.text }}</td>
        <td>{{ row.note }}</td>
        <td>
          <b-button v-if="muzuUpravit" size="sm" variant="primary" @click="doEdit(row)">
            <i class="fas fa-edit"></i> upravit
          </b-button>
        </td>
      </tr>

    </template>
  </ACListView>
  `
}
