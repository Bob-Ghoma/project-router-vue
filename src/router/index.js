import Vue from 'vue';
import VueRouter from 'vue-router';
import Contacts from '@/views/Contacts.vue';
import Product from '@/views/Product.vue';
import ListMovie from '@/views/ListMovie.vue';
import Home from '../views/Home.vue';
import Movie from '@/views/Movie';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts,
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
  },
  {
    path: '/ListMovie',
    name: 'ListMovie',
    component: ListMovie,
  },
  {
    path: '/Movie/:id',
    name: 'Movie',
    component: Movie,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
