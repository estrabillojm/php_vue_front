import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import '@mdi/font/css/materialdesignicons.min.css'

import Navbar from './components/shared/Navbar.vue'
import Table from './components/shared/Table.vue'

axios.defaults.baseURL = "http://127.0.0.1/server"
axios.defaults.withCredentials = false




const app = createApp(App)

new WaveUI(app, {
    // Some Wave UI options.
})

app.component('Navbar', Navbar)
    .component('v-tbl', Table)
app.use(store).use(router).mount('#app')
