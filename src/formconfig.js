export const ANKETA_FORM_CONFIG = [{
  name: 'id',
  label: "#",
  fieldcomponent: true
}, {
  name: 'name',
  component: "dyn-input",
  label: 'název',
  rules: "required",
  fieldcomponent: true, sortable: true
}, {
  name: 'desc',
  component: "dyn-textarea",
  label: 'popis',
  rules: "required"
}, {
  name: 'maxpositive',
  component: "dyn-input",
  type: 'number',
  label: 'počet pozitivních hlasů',
  rules: "required",
  fieldcomponent: true
}, {
  name: 'maxnegative',
  component: "dyn-input",
  type: 'number',
  label: 'počet negativních hlasů',
  rules: "required",
  fieldcomponent: true
}, {
  name: 'maxperoption',
  component: "dyn-input",
  type: 'number',
  label: 'počet hlasů pro jednu možnost',
  rules: "required",
  fieldcomponent: true
}, {
  name: 'voting_start',
  component: "dyn-date",
  label: "začátek hlasování",
  rules: "required",
  fieldcomponent: true, sortable: true
}, {
  name: 'voting_end',
  component: "dyn-date",
  label: "konec hlasování",
  rules: "required",
  fieldcomponent: true, sortable: true
}, {
  name: 'author',
  label: "autor",
  fieldcomponent: true
}]

export const OPTION_FORM_CONFIG = [{
  name: 'title',
  component: "dyn-input",
  label: "titulek",
  rules: "required",
  fieldcomponent: true, sortable: true
}, {
  name: 'image',
  component: "dyn-input",
  label: "obrázek"
}, {
  name: 'link',
  component: "dyn-input",
  label: "odkaz",
  fieldcomponent: true
}, {
  name: 'desc',
  component: "dyn-textarea",
  label: "popis",
  fieldcomponent: true
}]