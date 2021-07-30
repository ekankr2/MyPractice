import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Todo from "../views/Todo";
import EventBusTestPage from "../views/EventBusTestPage";
import StudentListPage from "../views/StudentListPage";
import RandomNumberTest from "../views/RandomNumberTest";
import MaterializeTestPage from "../views/MaterializeTestPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/eventBusTest',
    name: 'EventBusTestPage',
    components: {
      default: EventBusTestPage
    }
  },
  {
    path: '/student',
    name: 'StudentListPage',
    components: {
      default: StudentListPage
    }
  },
  {
    path: '/randomNum',
    name: 'RandomNumberTest',
    components: {
      default: RandomNumberTest
    }
  },
  {
    path: '/materialize',
    name: 'MaterializeTestPage',
    components: {
      default: MaterializeTestPage
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
