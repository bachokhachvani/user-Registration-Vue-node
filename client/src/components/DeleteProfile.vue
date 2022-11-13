<template>
  <div>
    <h3>Do you really want to delete account?</h3>
    <button class="deleteBtn" @click="deleteAccountHandler">Delete</button>
    <button class="noBtn" @click="noHandler">No</button>
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
    async deleteAccountHandler() {
      const response = await axios.delete("users/" + this.id, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      console.log(response);
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
