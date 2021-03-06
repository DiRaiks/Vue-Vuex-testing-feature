import Vue from 'vue';
import Registration from '../pages/Registration.vue';
import Home from '../App.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {path: '/', name: 'Registration', component: Home},
    {path: '/registration', name: 'registration', component: Registration}
  ]
})
