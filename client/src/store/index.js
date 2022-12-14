import Vue from "vue";
import Vuex from "vuex";
import { authModule } from "./modules/authModule.js";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth: authModule,
  },
});

export default store;
