<template>
  <div>
    <div class="deletePage-container" v-if="isUser()">
      <h3>Do you really want to delete account?</h3>
      <div class="deleteBtn-container">
        <button class="deleteBtn" @click="deleteAccountHandler">Delete</button>
        <button class="noBtn" @click="noHandler">No</button>
      </div>
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

<style lang="scss">
.deletePage-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
  h3 {
    font-size: 50px;
  }
}
.deleteBtn-container {
  display: flex;
  gap: 10px;
  button {
    width: 300px;
    height: 50px;
    font-size: 30px;
    border-radius: 8px;
    cursor: pointer;
  }
}
.deleteBtn {
  background-color: red;
  color: white;
  &:hover {
    background-color: rgb(84, 15, 15);
  }
}

.noBtn {
  background-color: rgb(72, 46, 169);
  color: white;
  &:hover {
    background-color: rgb(89, 48, 240);
  }
}
</style>
