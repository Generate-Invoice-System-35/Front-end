<template>
<b-navbar toggleable="lg" type="light">
      <b-navbar-brand href="#">
        <img src="../assets/images/logo_fatture.png" width="150px" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <ul class="navbar-nav ml-auto mr-3">
        <li class="nav-item">
          <router-link class="nav-link" to="/"> Home </router-link>
        </li>

        <b-dropdown
          id="dropdown-right"
          right
          text="Username"
          variant="outline-dark"
          class="m-2"
          size="sm"
        >
          <b-dropdown-item @click="doLogout">Logout</b-dropdown-item>
        </b-dropdown>
      </ul>
    </b-navbar>

</template>


<script>

export default {
    name: "NavbarLogin",
    components: {  },

    methods: {
    doLogout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/");
      },
    },
    computed: {
    isLogin() {
      if (this.$store.state.auth.token !== "") {
        return true;
      }
      return false;
    },
  },
};
</script>

<style>
</style>