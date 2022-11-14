<template>
  <div>
    <div class="profile-container" v-if="user">
      <h3>Profile</h3>
      <div class="row-wrapper">
        <p>Firstname:</p>
        <p>{{ user.firstName }}</p>
      </div>
      <div class="row-wrapper">
        <p>Lastname:</p>
        <p>{{ user.lastName }}</p>
      </div>
      <div class="row-wrapper">
        <p>Email:</p>
        <p>{{ user.email }}</p>
      </div>
      <div class="row-wrapper">
        <p>birthday:</p>
        <p>{{ user.birthday.replace("T00:00:00.000Z", "") }}</p>
      </div>
      <div class="button-container">
        <button @click="clickHandler">edit profile</button>
        <button @click="deleteHandler">delete profile</button>
      </div>
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
      this.$router.push("/profile/" + localStorage.getItem("data") + "/edit");
    },
    deleteHandler() {
      this.$router.push("/profile/" + localStorage.getItem("data") + "/delete");
    },
  },
  beforeCreate() {
    this.$store.commit("auth/initialiseStore");
    console.log("sadaasdasdas", this.$store.state);
  },
};
</script>

<style lang="scss">
.profile-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
  gap: 10px;
  p {
    margin: 0;
    color: rgb(26, 59, 102);
  }
  h3 {
    color: rgb(15, 38, 67);
  }
}
.row-wrapper {
  display: flex;
  gap: 10px;
  justify-content: center;
  width: 300px;
}
.button-container {
  display: flex;
  margin-top: 20px;
  gap: 10px;
  button {
    background-color: rgb(77, 79, 164);
    border-radius: 8px;
    cursor: pointer;

    border-width: 1px;
    color: white;

    &:hover {
      background-color: rgb(38, 39, 100);
    }
  }
}
</style>
