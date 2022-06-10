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

         <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Username
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Log Out</a></li>
          </ul>
        </li>
      </ul>
    </b-navbar>
  </div>
</template>

<script>
export default {
name: "UploadNavbar"
}
</script>

<style>

</style>