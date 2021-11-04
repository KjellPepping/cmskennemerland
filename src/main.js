import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import CRUDUser from './components/CRUDUser.vue'
import CRUDTask from './components/CRUDTask.vue'
import CRUDGoal from './components/CRUDGoal.vue'
import CRUDReport from './components/CRUDReport.vue'
import CRUDPolicy from './components/CRUDPolicy.vue'
import CRUDTeam from './components/CRUDTeam.vue'
import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify'





Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuetify);

const routes = [
  {path:'/', component: Home},
  {path:'/user',component:CRUDUser},
  {path:'/task',component:CRUDTask},
  {path:'/goal',component:CRUDGoal},
  {path:'/report',component:CRUDReport},
  {path:'/policy',component:CRUDPolicy},
  {path:'/team',component:CRUDTeam},
  {path:'*',component:Home}
];

Vue.prototype.$appUrl = "http://localhost:7071/api"

const router = new VueRouter({mode:'history',routes});

new Vue({
  router:router,
  vuetify,
  render: h => h(App)
}).$mount('#app')


