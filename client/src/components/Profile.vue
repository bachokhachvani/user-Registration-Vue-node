<template>
  <div>
    <div v-if="user">
      <p>{{ user.firstName }}</p>
      <p>{{ user.lastName }}</p>
      <p>{{ user.email }}</p>
      <p>{{ user.birthday }}</p>
      <p>{{ user.password }}</p>
      <div><button @click="clickHandler">edit profile</button></div>
    </div>
    <div v-if="!user"><p>Error something went wrong</p></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProfileComponent",
  data() {
    return {
      user: null,
    };
  },
  async mounted() {
    const response = await axios.get("auth/me", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    this.user = response.data;
  },
  methods: {
    clickHandler() {
      this.$router.push("/editprofile");
    },
  },
};
</script>

<style></style>
