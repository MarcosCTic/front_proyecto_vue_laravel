import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VistaLogin from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: { requireAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: VistaLogin,
      meta: {redirectIfAuth:true}
    }
  ],
})

// Guard -----guardia de rutas
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("access_token");
  console.log(to)
  if (to.meta.requireAuth) {
    if (!token)
      return next({ name: 'login' });// no permite ingresar about mientras no tengas token
    return next() // si tiene token deberia continuar
  }
  // para redireccionar a about 
  if(to.meta.redirectIfAuth && token ){
    return next({name:'about'})
  }

  return next()
})

export default router
