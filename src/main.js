// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store/';
import components from './components';
import Vuelidate from 'vuelidate';
//import {Datepicker, Timepicker, DatetimePicker} from '@livelybone/vue-datepicker';
//import * as VueDatepicker from '@livelybone/vue-datepicker';
//import { setupCalendar, Calendar, VCalendar } from 'v-calendar';

// Remember to setup calendar (passing in defaults if needed)
// setupCalendar(Vue, {
//   componentPrefix: 'vc',
//   //...,
// });

// Global register
// Vue.component('datepicker', Datepicker);
// Vue.component('timepicker', Timepicker);
// Vue.component('datetime-picker', DatetimePicker);

components.forEach(component => Vue.component(component.name, component));
Vue.config.productionTip = false;
Vue.use(Vuelidate);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>'
})
