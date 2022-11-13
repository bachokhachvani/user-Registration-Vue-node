<template>
  <div class="signup-wrapper">
    <h3>Sign in</h3>
    <div class="signup-container">
      <form>
        <div class="form-input">
          <label for="email">email</label>
          <input type="email" />
        </div>
        <div class="form-input">
          <label for="password">password</label>
          <input type="password" />
        </div>
        <div class="signup-btn">
          <button class="signup-submit">Sign in</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "SigninComponent",
};
</script>

<style></style>
