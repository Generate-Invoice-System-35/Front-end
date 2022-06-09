<template>
  <div class="content">
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-lg-5 ml-auto mt-2">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h1>
                <strong
                  >Convert quotes into invoices
                  with easy and simple steps.
                </strong>
              </h1>
              <p>
                Automatically bill based on sales orders, supply orders, <br/>
                contracts, or time and materials
              </p>
              <router-link class="btn btn-warning" style="background-color:#ff9f71; color: white;" to="/products">
                Register
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-5 ml-auto">
          <img src="../assets/images/invoice.jpg" width="80%"/>
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
