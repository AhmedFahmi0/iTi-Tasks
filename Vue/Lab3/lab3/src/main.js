import { createApp } from 'vue'
import App from './App.vue';
import { createWebHistory,createRouter } from 'vue-router';
import allusersApp from './components/allusers.vue';
import userdetailsApp from './components/userdetails.vue';
import errorApp from './components/error.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const routes = [
    {
        path:'/',component:allusersApp,alias:'/users'
    },
    {
        path:'/users/:id',component:userdetailsApp
    },
    {
        path:'/:NotFound(.*)*',component:errorApp,meta:{hideNavbar:true}
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
})

const app =createApp(App);
app.directive("theme",{
    beforeMount(el, binding) {
      el.style.backgroundColor = binding.value;
      el.style.transition = 'background-color 0.5s';
      el.addEventListener('mouseenter', () => {
        el.style.backgroundColor = binding.arg || 'red';
      });
      el.addEventListener('mouseleave', () => {
        el.style.backgroundColor = binding.value;
      });
    }
  })
app.use(router).mount('#app')
