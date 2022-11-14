export const authModule = {
  namespaced: true,
  state() {
    return { userData: "" };
  },
  mutations: {
    initialiseStore(state) {
      if (localStorage.getItem("userData")) {
        this.replaceState(
          Object.assign(
            state.userData,
            JSON.parse(localStorage.getItem("userData"))
          )
        );
      } else {
        state.userData = "";
      }
    },
  },
  actions: {},
  getters: {},
};
