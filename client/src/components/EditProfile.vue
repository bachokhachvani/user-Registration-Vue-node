<template>
  <div>
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
</template>

<script>
import axios from "axios";

export default {
  name: "EditProfileComponent",
  data() {
    return { user: "" };
  },

  methods: {
    clickHandler() {
      this.$router.push("/profile");
    },
    async submitHandler() {
      const data = {
        firstName: this.user.firstName,
        lastName: this.user.lastName,
      };

      const response = await axios.put("users/" + this.user.id, data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      this.user = response.data;
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
  async created() {
    this.getData();
  },

  //   async updated() {
  //     const response = await axios.get("auth/me");
  //     console.log("asd");
  //     this.user = response.data;
  //   },
};
</script>

<style></style>
