<template>
  <div class="signup-wrapper">
    <h3>Sign in</h3>
    <div class="signup-container">
      <form @submit.prevent="submitHandler">
        <div class="form-input">
          <label for="email">email</label>
          <input type="email" required v-model="email" />
        </div>
        <div class="form-input">
          <label for="password">password</label>
          <input type="password" required v-model="password" />
        </div>
        <div class="signup-btn">
          <button class="signup-submit">Sign in</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SigninComponent",
  data() {
    return { email: "", password: "" };
  },
  methods: {
    async submitHandler() {
      const data = { email: this.email, password: this.password };

      const response = await axios.post("auth/sign-in", data).catch((e) => {
        console.log(e);
      });

      localStorage.setItem("token", response.data.token);
    },
  },
};
</script>

<style></style>
