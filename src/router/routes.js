import Layout from '@/views/layout/Layout'
import views from '@/views';
import HelloWorld from '@/components/HelloWorld';

export default [
    {
      path: '/',
      component: Layout,
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
        },
        // catch all redirects that don't match redirect to home page
        { path: '*', redirect: '/' }
      ]
    },
    
]
