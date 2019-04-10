import firebase from "firebase";
import Vue from "vue";
import Router from "vue-router";
import Navbar from "@/layouts/navbar";
import Home from "@/views/Home";
import Login from "@/views/Login";
import SignUp from "@/views/SignUp";
import About from "@/views/About";
import Logout from "@/views/Logout";
import Upload from "@/views/Upload";
import View from "@/views/view";
import Single from "@/views/SinglePost";
import Personal from "@/views/personal";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "*",
      redirect: "/login"
    },
    {
      path: "/",
      redirect: "/login"
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/sign-up",
      name: "SignUp",
      component: SignUp
    },
    {
      path: "/home",
      name: "Home",
      components: {
        header: Navbar,
        default: Home
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/about",
      name: "About",
      components: {
        header: Navbar,
        default: About
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/logout",
      name: "Signout",
      components: {
        header: Navbar,
        default: Logout
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/upload",
      name: "Upload",
      components: {
        header: Navbar,
        default: Upload
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/view",
      name: "view",
      components: {
        header: Navbar,
        default: View
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/post/:id",
      name: "single",
      components: {
        header: Navbar,
        default: Single
      },
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/user",
      name: "personal",
      components: {
        header: Navbar,
        default: Personal
      },
      meta: {
        requiresAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("login");
  else if (!requiresAuth && currentUser) next("home");
  else next();
});

export default router;
