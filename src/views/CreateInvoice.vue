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

    <hr />
    <div class="container">
      <router-link
        class="btn-lg btn-warning"
        style="background-color: #ff9f71; color: white"
        to="/"
      >
        Confirm
      </router-link>
    </div>
    <hr />
    <br />

    <div class="container">
      <div class="row gutters">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="card">
            <div class="card-body p-0">
              <div class="invoice-container">
                <div class="invoice-header">
                  <!-- Row start -->
                  <div class="row gutters">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <div class="custom-actions-btns mb-5"></div>
                    </div>
                  </div>
                  <!-- Row end -->
                  <!-- Row start -->
                  <div class="row gutters">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <h4>Customer Invoice</h4>
                      <h2><strong>Draft</strong></h2>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <address class="text-right">
                        Maxwell admin Inc, 45 NorthWest Street.<br />
                        Sunrise Blvd, San Francisco.<br />
                        00000 00000
                      </address>
                    </div>
                  </div>
                  <!-- Row end -->
                  <!-- Row start -->
                  <div class="row gutters">
                    <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                      <div class="invoice-details">
                        <address>
                          <strong>Customer:</strong>
                        </address>
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                      <div class="invoice-details">
                        <div class="invoice-num">
                          <div>
                            <strong> Invoice Date:</strong>
                          </div>
                          <div>
                            <strong>Due Date:</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6>Invoice Lines</h6>
                  <!-- Row end -->
                </div>
                <div class="invoice-body">
                  <!-- Row start -->
                  <div class="row gutters">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <div class="table-responsive">
                        <table class="table custom-table m-0">
                          <thead>
                            <tr>
                              <th>Product</th>
                              <th>Label</th>
                              <th>Quantity</th>
                              <th>Price</th>
                              <th>Taxes</th>
                              <th>Subtotal</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            <tr>
                              <td colspan="3"></td>
                              <td></td>
                               <td></td>
                               <td><p><strong>Total:</strong></p></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <!-- Row end -->
                </div>
                <div class="invoice-footer">Thank you for your Business.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateInvoice",
};
</script>

<style></style>
