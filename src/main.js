import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Dashboard from './components/Dashboard.vue'
import CMSPage from './components/CMSPage.vue'
import NotFound from './components/NotFound.vue'
import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuetify);

const routes = [
  {path:'/', component: HelloWorld},
  {path:'/dashboard',component:Dashboard},
  {path:'/user',component:CMSPage},
  {path:'*',component:NotFound}
];

const router = new VueRouter({mode:'history',routes});

new Vue({
  router:router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
