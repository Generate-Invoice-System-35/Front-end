<template>
  <div class="content">
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h3>
                <strong
                  >Convert quotes into invoices <br />
                  with easy and simple steps.
                </strong>
              </h3>
              <p>
                Automatically bill based on sales orders, supply orders,
                contracts, or time and materials
              </p>
              <router-link class="btn btn-lg btn-success" to="/products">
                Register
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/images/hero.png" width="80%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentVue",
};
</script>

<style></style>
