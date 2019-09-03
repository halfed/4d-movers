// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
import Vue from 'vue';
import Router from 'vue-router';
import routes from './routes';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: routes
});

export default router;