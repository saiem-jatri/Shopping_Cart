import { createRouter, createWebHistory } from 'vue-router'
import Home  from "../views/HomeView.vue";
import Product from "../views/ProductView.vue";
import ProProducts from "../components/ProProducts.vue";


const routes=[
  {path:'/home',component:Home},
  {path:'/product',component:Product},
  {path:'/pro',component:ProProducts},
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
