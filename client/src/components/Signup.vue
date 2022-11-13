<template>
  <div class="signup-wrapper">
    <h3>Sign Up</h3>
    <div class="signup-container">
      <form @submit.prevent="submitHandler">
        <div class="form-input">
          <label for="firstName">FirstName</label>
          <input type="text" />
        </div>
        <div class="form-input">
          <label for="lastName">lastName</label>
          <input type="text" />
        </div>
        <div class="form-input">
          <label for="email">email</label>
          <input type="email" />
        </div>
        <div class="form-input">
          <label for="birthday">birthday</label>
          <input type="date" />
        </div>
        <div class="form-input">
          <label for="password">password</label>
          <input type="password" />
        </div>
        <div class="signup-btn">
          <button class="signup-submit">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupComponent",
  data() {},
  methods: {
    submitHandler() {
      console.log("submitted");
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
