<template>
    <div class="login">
         <b-navbar toggleable="lg" type="light">
      <b-navbar-brand href="#">
        <img src="../assets/images/logo_fatture.png" width="150px" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <ul class="navbar-nav ml-auto mr-3">
        <li class="nav-item">
          <router-link class="nav-link" to="/"> Home </router-link>
        </li>
      </ul>
    </b-navbar>
    <br />

    </div>
</template>

<script>


export default {
    name: "LoginPage",
    components: {

        }
};
</script>

<style>
</style>