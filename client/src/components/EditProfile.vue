<template>
  <div>
    <div class="edit-container" v-if="isUser()">
      <form class="edit-form" @submit.prevent="submitHandler">
        <h3>Edit Profile</h3>
        <div class="input-wrapper">
          <input type="text" v-model="user.firstName" />
        </div>
        <div class="input-wrapper">
          <input type="text" v-model="user.lastName" />
        </div>
        <div class="input-wrapper">
          <input type="text" :placeholder="user.email" disabled />
        </div>
        <div class="input-wrapper">
          <input type="text" :placeholder="user.birthday" disabled />
        </div>
        <div class="editBtn-container">
          <button>submit</button>
          <button @click="clickHandler">back to profile</button>
        </div>
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

<style lang="scss">
.edit-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-top: 8%;
}
.editBtn-container {
  display: flex;
  gap: 10px;
  button {
    cursor: pointer;
    border-radius: 8px;
    border-width: 1px;
  }
}
</style>
