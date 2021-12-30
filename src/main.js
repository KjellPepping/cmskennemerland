import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import CRUDUser from './components/CRUDUser.vue'

import Table from './components/Table.vue'
import Tables from './components/Tables.vue'
import Title from './components/Title.vue'

import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuetify);

const routes = [
  {path:'/', component: Home, props:{ headerText:'Home', infoText:'This is the home page for the CMS', color:"#0099FF", light_color:calculateColor("#0099FF",100), bg_color:calculateColor("#0099FF",200)}},
  {path:'/user', component: Home, props:{ headerText:'User', infoText:'Edit user details and add new users to the app', color:"#06C4AD", light_color:calculateColor("#06C4AD",100)}},
  {path:'/task', component: Home, props:{ headerText:'Task', infoText:'Add new tasks to assign users to', color:"#06C42D", light_color:calculateColor("#06C42D",100)}},
  {path:'/goal', component: Home, props:{ headerText:'Goal', infoText:'Assign new goals for the organization to achieve', color:"#DB8E08", light_color:calculateColor("#DB8E08",100)}},
  {path:'/report', component: Home, props:{ headerText:'Report', infoText:'Add or retrieve reports as managed by teammanagers', color:"#7B20C8", light_color:calculateColor("#7B20C8",100)}},
  {path:'/policy', component: Home, props:{ headerText:'Policy', infoText:'Create or update a policy for the organization to achieve', color:"#C82072", light_color:calculateColor("#C82072",100)}},
  {path:'/team', component: Home, props:{ headerText:'Team', infoText:'Assign employees to a new team or create a new one', color:"#D33E3E", light_color:calculateColor("#D33E3E",100)}},
];

Vue.prototype.$appUrl = "https://kennemerlandapi.azurewebsites.net/api/"

const router = new VueRouter({mode:'history',routes});

    new Vue({
      router:router,
      vuetify,
      render: h => h(App)
    }).$mount('#app')

function calculateColor(col,amt){
  var usePound = false;

  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col,16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if  (r < 0) r = 0;

  var b = ((num >> 8) & 0x00FF) + amt;

  if (b > 255) b = 255;
  else if  (b < 0) b = 0;

  var g = (num & 0x0000FF) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}
  



