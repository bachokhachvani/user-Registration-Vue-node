<template>
  <div>
    <div v-if="isUser()">
      <h3>Do you really want to delete account?</h3>
      <button class="deleteBtn" @click="deleteAccountHandler">Delete</button>
      <button class="noBtn" @click="noHandler">No</button>
    </div>
    <div v-if="!isUser()"><h3>Access denied!</h3></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DeleteProfileComponent",
  data() {
    return { id: this.$route.params.userId };
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

    async deleteAccountHandler() {
      const response = await axios.delete("users/" + this.id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      console.log(response);
      localStorage.clear();
      this.$router.push("/");
    },
    noHandler() {
      this.$router.push("/profile");
    },
  },
};
</script>

<style>
.deleteBtn {
  background-color: red;
}
</style>
