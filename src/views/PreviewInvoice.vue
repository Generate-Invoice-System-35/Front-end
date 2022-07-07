<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <b-navbar-brand href="#">
        <img src="../assets/images/logo_fatture.png" width="150px" />
      </b-navbar-brand>
    </b-navbar>

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
                      <h6>Indonesia</h6>
                    </div> 

                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <address class="text-left">
                        Annisa H.Amelia<br />
                        123 Main Street, Bandung
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
                        <div class="invoice-num" style="text-align:left">
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
                              <th>Description</th>
                              <th>Quantity</th>
                              <th>Unit Price</th>
                              <th>Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>

                            <tr>
                              <td></td>
                              <td></td>
                              <td><p><strong>Total:</strong></p></td>
                              <td></td>
                            </tr>
                        
                            
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<br/>

     <div class="container">
      <router-link
        class="btn btn-link"
        style="background-color: #ff9f71; color: white; float:right;"
        to="/createinvoice"
      >
        Back
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
name: "PreviewInvoice"
}
</script>

<style>

</style>