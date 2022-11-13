<template>
  <div class="signup-wrapper">
    <h3>Sign Up</h3>
    <div class="signup-container">
      <form @submit.prevent="submitHandler">
        <div class="form-input">
          <label for="firstName">FirstName</label>
          <input type="text" v-model="firstName" required />
        </div>
        <div class="form-input">
          <label for="lastName">lastName</label>
          <input type="text" v-model="lastName" required />
        </div>
        <div class="form-input">
          <label for="email">email</label>
          <input type="email" v-model="email" required />
        </div>
        <div class="form-input">
          <label for="birthday">birthday</label>
          <input type="date" v-model="birthday" required />
        </div>
        <div class="form-input">
          <label for="password">password</label>
          <input type="password" v-model="password" required />
        </div>
        <div class="signup-btn">
          <button class="signup-submit">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignupComponent",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      birthday: "",
    };
  },
  methods: {
    async submitHandler() {
      const response = await axios
        .post("auth/sign-up", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          birthday: this.birthday,
        })
        .catch((e) => {
          console.log("error", e);
        });

      console.log("data", response);
      if (response) {
        this.$router.push("/signin");
      } else {
        console.log("something is wrong");
      }
    },
  },
};
</script>

<style>
.signup-container {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.form-input {
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
}
input {
  width: 200px;
}
label {
  width: 100px;
}
h3 {
  margin-top: 100px;
  text-align: center;
}
.signup-btn {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
