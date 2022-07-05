<template>
  <div class="hero">
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6 ml-5">
          <img src="../assets/images/hero.png" width="100%" />
        </div>

        <div class="col-md-5 ml-4 mt-6 mr-3">
          <div class="d-flex h-100" style="color:#09273E">
            <div class="right-content-enter align-self-center">
              <h1>
                <strong>
                  Find the convenience of online invoicing here. </strong>
              </h1>
              <p>
                Online invoicing generator that helps you to create <br/>
                professional invoices and send payment reminders.
              </p> 
              <router-link class="btn btn-warning" style="background-color:#ff9f71; color: white;" to="/login">
                Start Now. it's Free
              </router-link>
            </div>
          </div>
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
