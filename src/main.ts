import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import chili from './components/chili.vue'
import chili2 from './components/chili2.vue'
const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:chili},
        {path:'/xxx',component:chili2}
    ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
