import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import BasicLayout from "../layouts/BasicLayout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    name: "user",
    component: { render: (h) => h("router-view") },
    children: [
      {
        path: "/user",
        redirect: "/user/login",
      },
      {
        path: "/user/login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Login.vue"),
      },
      {
        path: "/user/regist",
        name: "regist",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/User/Regist.vue"),
      },
    ],
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: BasicLayout,
    children: [
      {
        path: "/dashboard/analysis",
        name: "analysis",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/Dashboard/Analysis.vue"
          ),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
