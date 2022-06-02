<template>
  <div class="hero">
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h3>
                <strong>Find the convenience of <br/> online invoicing here</strong>
                <br />
              </h3>
              <p>
                Online invoicing generator that helps you to create <br /> professional
                invoices and send payment reminders.
              </p>
              <router-link class="btn btn-lg btn-success" to="/products">
                Start Now. it's Free
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/images/logo.png" width="30%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroVue",
};
</script>

<style></style>
