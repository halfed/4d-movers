import Home from '@/views/layout/Home'
import views from '@/views';
import HelloWorld from '@/components/HelloWorld';

export default [
    {
      path: '/',
      component: Home,
      meta: { auth: true },
      children: [
        {
      		path: '',
      		redirect: 'home',
      		meta: { auth: true }
      	},
      	{
	        path: 'home',
	        name: 'Home',
	        component: views.Home,
	        meta: { auth: true }
	      }
      ]
    },
    
]
