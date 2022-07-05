<template>
    <div class="table">
      <h1 >Invoice</h1>
      <br>
      <button class="upload" style="color:white;">Upload</button>
      <div></div>
      <div><br><br></div>
      <table class="invoice">
        <thead>
          <tr>
            <th>Number</th>
            <th>Customer</th>
            <th>Invoice Date</th>
            <th>Due Date</th>
            <th>Email</th>
            <th>numberphone</th>
            <th>Total</th>
            <th>Payment Statue</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="name in info" :key="name.Country">
            <td>{{name.Number}}</td> <!--Ganti bagian table nya-->
            <td>{{name.Customer}}</td>
            <td>{{name.InvoiceDate}}</td>
            <td>{{name.DueDate}}</td>
            <td>{{name.Email}}</td>
            <td>{{name.Numberphone}}</td>
            <td>Rp {{name.Total}}</td>
            <td>{{name.PaymentStatue}}</td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
  name: "TableVue",
  data() {
    return {
      info: [
        { Number: "1", Customer: "Angga", InvoiceDate: "20-3-2022", DueDate: "11-7-2022", Email: "test123@gmail.com", Numberphone: "081123456789", Total: "110.000", PaymentStatue: "Expire", },
        { Number: "2", Customer: "Intan", InvoiceDate: "20-3-2022", DueDate: "11-7-2022", Email: "test123@gmail.com", Numberphone: "081123456789", Total: "110.000", PaymentStatue: "Not Paid", },
        { Number: "3", Customer: "Aurellia", InvoiceDate: "20-3-2022", DueDate: "11-7-2022", Email: "test123@gmail.com", Numberphone: "081123456789", Total: "110.000", PaymentStatue: "Pending", },
        { Number: "4", Customer: "Murfid", InvoiceDate: "20-3-2022", DueDate: "11-7-2022", Email: "test123@gmail.com", Numberphone: "081123456789", Total: "110.000", PaymentStatue: "Paid", },
        { Number: "5", Customer: "Prila", InvoiceDate: "20-3-2022", DueDate: "11-7-2022", Email: "test123@gmail.com", Numberphone: "081123456789", Total: "110.000", PaymentStatue: "Expire", },
        { Number: "6", Customer: "Jovin", InvoiceDate: "20-3-2022", DueDate: "11-7-2022", Email: "test123@gmail.com", Numberphone: "081123456789", Total: "110.000", PaymentStatue: "Pending", },
        { Number: "7", Customer: "Rima", InvoiceDate: "20-3-2022", DueDate: "11-7-2022", Email: "test123@gmail.com", Numberphone: "081123456789", Total: "110.000", PaymentStatue: "Pending", },
        { Number: "8", Customer: "Made", InvoiceDate: "20-3-2022", DueDate: "11-7-2022", Email: "test123@gmail.com", Numberphone: "081123456789", Total: "110.000", PaymentStatue: "Paid", },
        { Number: "9", Customer: "Novita", InvoiceDate: "20-3-2022", DueDate: "11-7-2022", Email: "test123@gmail.com", Numberphone: "081123456789", Total: "110.000", PaymentStatue: "Not Paid", },
        { Number: "10", Customer: "Kristina", InvoiceDate: "20-3-2022", DueDate: "11-7-2022", Email: "test123@gmail.com", Numberphone: "081123456789", Total: "110.000", PaymentStatue: "Expire", },
      ]
    }
  }
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
