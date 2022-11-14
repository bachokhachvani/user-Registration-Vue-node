<template>
  <div>
    <div v-if="isUser()">
      <form @submit.prevent="submitHandler">
        <div>
          <input type="text" v-model="user.firstName" />
        </div>
        <div>
          <input type="text" v-model="user.lastName" />
        </div>
        <div>
          <input type="text" :placeholder="user.email" disabled />
        </div>
        <div>
          <input type="text" :placeholder="user.birthday" disabled />
        </div>
        <div><p>Error something went wrong</p></div>
        <button>submit</button>
        <button @click="clickHandler">back to profile</button>
      </form>
    </div>
    <div v-if="!isUser()">Access denied</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EditProfileComponent",
  data() {
    return { user: "", id: this.$route.params.userId };
  },
  async created() {
    this.getData();
  },
  methods: {
    //blocking the route for different user
    isUser() {
      if (this.id === JSON.parse(localStorage.getItem("userData"))._id) {
        return true;
      } else {
        return false;
      }
    },

    clickHandler() {
      this.$router.push("/profile");
    },
    async submitHandler() {
      const data = {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
      };

      const response = await axios.put(
        "users/" + localStorage.getItem("data"),
        data,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      this.user = response.data;

      localStorage.setItem("userData", JSON.stringify(response.data));
      console.log("store", this.$store.state);
      console.log("asd", response);
    },
    async getData() {
      const response = await axios.get("auth/me", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      this.user = response.data;
    },
  },
  beforeCreate() {
    this.$store.commit("auth/initialiseStore");
    console.log("sadaasdasdas", this.$store.state);
  },
};
</script>

<style></style>
