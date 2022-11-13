<template>
  <div>
    <p>{{ response.data.firstName }}</p>
    <p>{{ response.data.lastName }}</p>
    <p>{{ response.data.email }}</p>
    <p>{{ response.data.birthday }}</p>
    <p>{{ response.data.password }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProfileComponent",
  async getUser() {
    const response = await axios.get("auth/me", {
      headers: {
        Authorization: "Bearer" + localStorage.getItem("token"),
      },
    });
    console.log(response);
  },
};
</script>

<style></style>
