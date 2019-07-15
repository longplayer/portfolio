import Vue from "vue";
import Router from "vue-router";

// Lazy Loading Routes
const Home = () => import("./views/Home.vue");
const About = () => import("./views/About.vue");
const Works = () => import("./views/Works.vue");
const Contact = () => import("./views/Contact.vue");
const Doc = () => import("./views/Doc.vue");

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () =>
      //   import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/works",
      name: "works",
      component: Works
    },
    {
      path: "/doc",
      name: "doc",
      component: Doc
    },
    {
      path: "/*",
      redirect: "/"
    }
  ]
});
