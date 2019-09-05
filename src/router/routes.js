import Home from '@/views/layout/Home'
import views from '@/views';
import HelloWorld from '@/components/HelloWorld';

export default [
    {
      path: '/dev/',
      component: Home,
      meta: { auth: true },
      children: [
        {
      		path: '',
      		redirect: '',
          name: 'Home',
          component: views.Home,
      		meta: { auth: true }
      	},
        {
          path: 'about-us',
          name: 'AboutUs',
          component: views.AboutUs,
          meta: { auth: true }
        },
        {
          path: 'services',
          name: 'Services',
          component: views.Services,
          meta: { auth: true }
        },
        {
          path: 'request-quote',
          name: 'RequestQuote',
          component: views.Quote,
          meta: { auth: true }
        }
      ]
    },
    
]
