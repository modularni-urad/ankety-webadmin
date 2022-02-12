import ListComponent from './src/components/list.js'
import OptionListComponent from './src/components/optionlist.js'
import { ROUTE_NAMES, ADMIN_GROUP } from './src/consts.js'
import { ANKETA_FORM_CONFIG, OPTION_FORM_CONFIG } from './src/formconfig.js'

export function createMenu (user) {
  return user.groups.indexOf(ADMIN_GROUP) >= 0
    ? { label: 'ankety', to: { name: ROUTE_NAMES.list } }
    : null
}

export async function setupRoutes (routes, path, cfg, initConfig) {
  const listCfg = Object.assign(cfg, { 
    conf: ANKETA_FORM_CONFIG,
    default_sort: 'created:asc'
  })
  await initConfig(listCfg)

  routes.push({
    path, 
    name: ROUTE_NAMES.list, 
    component: ListComponent, 
    props: route => {
      return { query: route.query, cfg: listCfg }
    }
  })

  const optionsCfg = Object.assign({}, cfg, { 
    conf: OPTION_FORM_CONFIG,
    apiurl: cfg.url,
    default_sort: 'title:asc',
    getLoadUrl: (itemId, self) => {
      const filter = { 
        value: self.query._detail 
      }
      return `${self.cfg.url}${self.$route.params.id}?filter=${JSON.stringify(filter)}`
    },
    getListUrl: (self) => {
      return `${self.cfg.url}${self.$route.params.id}`
    },
    getSaveUrl: (currItem, self) => {
      const u = `${self.cfg.url}${self.$route.params.id}`
      return currItem ? `${u}/${self.query._detail}` : u
    }
  })
  await initConfig(optionsCfg)

  routes.push({ 
    path: `${path}:id`, 
    name: ROUTE_NAMES.optionlist, 
    component: OptionListComponent, 
    props: route => {
      return { query: route.query, id: route.params.id, cfg: optionsCfg }
    }
  })
}