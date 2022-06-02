<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <b-navbar-brand href="#"><strong>Fatture</strong></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/keranjang">
            Home
          </router-link>
        </li> 
        <li class="nav-item">
          <router-link class="btn btn-lg btn-success mr-2" to="/keranjang">
            Sign In
          </router-link>
        </li> <br/>
        <li class="nav-item">
          <router-link class="btn btn-lg btn-success" to="/keranjang">
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
