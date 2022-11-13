import Vue from "vue";
import Router from "vue-router";
import SignupComponent from "./components/Signup.vue";
import SigninComponent from "./components/Signin.vue";
import ProfileComponent from "./components/Profile.vue";
import EditProfileComponent from "./components/EditProfile.vue";
import DeleteProfileComponent from "./components/DeleteProfile.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: SignupComponent },
    { path: "/signin", component: SigninComponent },
    { path: "/profile", component: ProfileComponent },
    { path: "/editprofile", component: EditProfileComponent },
    { path: "/deleteprofile", component: DeleteProfileComponent },
  ],
});
