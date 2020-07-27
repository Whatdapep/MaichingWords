import Vue from 'vue'
import App from './App.vue'
import VueTailwind from 'vue-tailwind'

import './assets/styles/index.css';

Vue.config.productionTip = true
Vue.use(VueTailwind)
new Vue({
    render: h => h(App),
}).$mount('#app')