<template>
  <div>
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
          <b-dropdown-item href="/">Logout</b-dropdown-item>
        </b-dropdown>
      </ul>
    </b-navbar>
    <br />

    <div class="container">
      <h2>Upload File</h2>
    </div>
    <br />

    <div class="container">
      <div class="col-md-7">
        <div
          class="card"
          style="
            width: 70rem;
            height: 230px;
            border-style: dashed;
            align-items: center;
            border-color: coral;
          "
        >
          <div class="card-body" style="color: darkorange; text-align: center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              fill="coral"
              class="bi bi-file-earmark-plus"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"
              />
              <path
                d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"
              />
            </svg>
            <br />
            <br />
            <h4><strong>Select a file to upload</strong></h4>
            <p>or drag and drop it here</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: "UploadFiles",
    components: {  }
};
</script>

<style>
</style>
