import Vue from "vue";
import Router from "vue-router";
import SignupComponent from "./components/Signup.vue";
import SigninComponent from "./components/Signin.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: SignupComponent },
    { path: "/signin", component: SigninComponent },
  ],
});
