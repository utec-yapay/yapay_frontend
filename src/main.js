import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

import 'prismjs'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-python'
import Clipboard from 'v-clipboard'

Vue.config.productionTip = false
Vue.use(Clipboard)

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
