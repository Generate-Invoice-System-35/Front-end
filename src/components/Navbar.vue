<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <b-navbar-brand href="#">
        <img src="../assets/images/logo_fatture.png" width="150px">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <ul class="navbar-nav ml-auto mr-3">
        <li class="nav-item">
          <router-link class="nav-link" to="/"> Home </router-link>
        </li>
        <li class="nav-item">
          <router-link class="btn btn-light mr-3" style="color: black;" to="/login">
            Sign In
          </router-link>
        </li>
        <br />
        <li class="nav-item">
          <router-link class="btn btn-warning" style="background-color:#ff9f71; color: white;" to="/register">
            Sign Up
          </router-link>
        </li>
      </ul>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style></style>
