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

import Table from './components/Table.vue'
import Tables from './components/Tables.vue'
import Title from './components/Title.vue'

import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify'


Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuetify);

const routes = [
  {path:'/', component: Home, props:{ headerText:'Home', infoText:'This is the home page for the CMS', color:"#0099FF"}},
  {path:'/user', component: Home, props:{ headerText:'User', infoText:'Edit user details and add new users to the app', color:"#06C4AD"}},
  {path:'/task', component: Home, props:{ headerText:'Task', infoText:'Add new tasks to assign users to', color:"#06C42D"}},
  {path:'/goal', component: Home, props:{ headerText:'Goal', infoText:'Assign new goals for the organization to achieve', color:"#DB8E08"}},
  {path:'/report', component: Home, props:{ headerText:'Report', infoText:'Add or retrieve reports as managed by teammanagers', color:"#7B20C8"}},
  {path:'/policy', component: Home, props:{ headerText:'Policy', infoText:'Create or update a policy for the organization to achieve', color:"#C82072"}},
  {path:'/team', component: Home, props:{ headerText:'Team', infoText:'Assign employees to a new team or create a new one', color:"#D33E3E"}},
];

Vue.prototype.$appUrl = "https://kennemerlandapi.azurewebsites.net/api/"



const router = new VueRouter({mode:'history',routes});

    new Vue({
      router:router,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  



