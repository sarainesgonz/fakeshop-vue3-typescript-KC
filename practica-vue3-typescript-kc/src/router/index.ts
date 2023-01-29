import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import haveSessionGuard from './session-guard';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'loginView',
    component: LoginView
  },
  {
    path: '/products',
    name: 'productsView',
    beforeEnter: [haveSessionGuard],
    component: () => import(/* webpackChunkName: "productsView" */ "../views/ProductsView.vue"),
  },
  {
    path: '/products/:id',
    name: 'detailsView',
    beforeEnter: [haveSessionGuard],
    component: () => import(/* webpackChunkName: "detailsView" */ '../views/DetailsView.vue'),
    props: (route) => { 
      const id = Number(route.params.id) 
      return isNaN(id) ? { id: null } : {id};
        
    }
  },
  {
    path: '/profile',
    name: 'profileView',
    beforeEnter: [haveSessionGuard],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "profileView" */ '../views/ProfileView.vue')
  },
 {
  path: "/:pathMatch(.*)",
  component: import(/*webpackChunkName: notFound*/ "../views/NotFound.vue"),
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
