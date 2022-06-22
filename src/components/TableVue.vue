<template>
    <div class="table">
      <h1 >Invoice</h1>
      <br>
      <button class="upload" style="color:white;">Upload</button>
      <div><br></div>
      <table class="invoice">
        <thead>
          <tr>
            <th>Number</th>
            <th>Customer</th>
            <th>Invoice Date</th>
            <th>Due Date</th>
            <th>Tax Number</th>
            <th>Tax Excluded</th>
            <th>Total</th>
            <th>Payment Statue</th>
          </tr>
          <tr>
            <th>input</th>
            <th>input</th>
            <th>input</th>
            <th>input</th>
            <th>input</th>
            <th>input</th>
            <th>input</th>
            <th>input</th>
          </tr>
        </thead>
      </table>
    </div>
</template>

<script>
export default {
  name: "TableVue",
};
</script>

<style scopped>
.table{
  padding: 74px;
}

.invoice{
  width: 100%;
  background-color: whitesmoke;
  
}

.upload{
  
  width: 141px;
  height: 57px;
  background: linear-gradient(90deg, #F75000 0%, #FF9F71 100%);
  box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.1);

}
</style>