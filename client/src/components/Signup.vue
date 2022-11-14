<template>
  <div class="signup-wrapper">
    <h3>Sign Up</h3>
    <div class="signup-container">
      <form @submit.prevent="submitHandler">
        <div class="form-input">
          <label for="firstName">First Name</label>
          <input type="text" v-model="firstName" required />
        </div>
        <div class="form-input">
          <label for="lastName">Last Name</label>
          <input type="text" v-model="lastName" required />
        </div>
        <div class="form-input">
          <label for="email">email</label>
          <input type="email" v-model="email" required />
        </div>
        <div class="form-input">
          <label for="birthday">birthday</label>
          <input
            type="date"
            v-model="birthday"
            min="1920-01-01"
            max="2004-11-14"
            required
          />
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

<style lang="scss">
.signup-wrapper {
  h3 {
    margin-top: 100px;
    text-align: center;
    font-weight: 800;
    color: rgb(77, 79, 164);
  }
}
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
  label {
    width: 100px;
    color: rgb(77, 79, 164);
  }
  input {
    width: 200px;
    color: rgb(29, 30, 78);
  }
}

.signup-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  button {
    width: 200px;
    background-color: rgb(77, 79, 164);
    color: #ffff;
    border-radius: 8px;
    height: 35px;
    cursor: pointer;
    &:hover {
      background-color: rgb(29, 30, 78);
    }
  }
}
</style>
