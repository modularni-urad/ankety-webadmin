import { ROUTE_NAMES, ADMIN_GROUP } from '../consts.js'

export default {
  props: ['query', 'cfg', 'row'],
  computed: {
    muzuUpravit: function () {
      return this.$store.getters.isMember(ADMIN_GROUP)
    }
  },
  methods: {
    doEdit: function () {
      const query = Object.assign({}, this.query, { _detail: this.row.id })
      this.$router.replace({ query })
    },
    editOptions: function () {
      this.$router.replace({ 
        name: ROUTE_NAMES.optionlist,
        params: { id: this.row.id }
      })
    }
  },
  template: `
  <td>
    <b-button-group>
      <b-button v-if="muzuUpravit" size="sm" variant="primary" @click="doEdit(row)">
        <i class="fas fa-edit"></i> upravit
      </b-button>
      <b-button size="sm" variant="secondary" @click="editOptions()">
        <i class="fas fa-edit"></i> upravit možnosti
      </b-button>
    </b-button-group>
  </td>
  `
}
