<template>
  <div>
    <nav class="nav">
      <div class="nav-container">
        <a href="/"> sign up</a>
        <a href="/signin"> sign in</a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>

<style>
.nav-container {
  display: flex;
  justify-content: space-around;
}
</style>
