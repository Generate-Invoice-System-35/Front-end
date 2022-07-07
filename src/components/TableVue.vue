<template>
    <div class="table">
      <h1 >Invoice</h1>
      <br>
      <div class="buttonUpload">
      <router-link class="upload" to="/uploads" tag="button" style="color:white;">Upload</router-link>
      </div>
      <div class="buttonGenerate">
      <router-link class="generate" to="/createinvoice" tag="button" style="color:white;">Generate</router-link>
      </div>

        <div class="filterAndSearach">
          <input id="search" 
                 placeholder="Search..."
                 v-model="search" 
                 type="search" 
                 name="search" />
                 <b-icon icon='search' style="color: #F75000; margin: -45px 0 45px 850px;"></b-icon>
        </div>

        <b-icon icon='filter' style="color: #F75000; margin: -50px 0px 25px 810px;"></b-icon>
        <div style="margin: -60px 0 0 825px">
        <b-dropdown
          id="dropdown-right"
          right
          text="Filter"
          variant="outline-dark"
          class="m-2"
          size="sm"
          
        >
          <b-dropdown-item>Unpaid</b-dropdown-item>
          <b-dropdown-item>Paid</b-dropdown-item>
          <b-dropdown-item>Pending</b-dropdown-item>
          <b-dropdown-item>Expire</b-dropdown-item>
        </b-dropdown>
        </div>
       
      <div><br></div>
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
            <td>{{name.phone_number}}</td>
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
        { Number: "1", Customer: "Angga", InvoiceDate: "20-3-2022", DueDate: "11-7-2022", Email: "test123@gmail.com", phone_number: "081123456789", Total: "110.000", PaymentStatue: "Expire", },
        { Number: "2", Customer: "Intan", InvoiceDate: "20-3-2022", DueDate: "11-7-2022", Email: "test123@gmail.com", phone_number: "081123456789", Total: "110.000", PaymentStatue: "Not Paid", },
        { Number: "3", Customer: "Aurellia", InvoiceDate: "20-3-2022", DueDate: "11-7-2022", Email: "test123@gmail.com", phone_number: "081123456789", Total: "110.000", PaymentStatue: "Pending", },
        { Number: "4", Customer: "Murfid", InvoiceDate: "20-3-2022", DueDate: "11-7-2022", Email: "test123@gmail.com", phone_number: "081123456789", Total: "110.000", PaymentStatue: "Paid", },
        { Number: "5", Customer: "Prila", InvoiceDate: "20-3-2022", DueDate: "11-7-2022", Email: "test123@gmail.com", phone_number: "081123456789", Total: "110.000", PaymentStatue: "Expire", },
        { Number: "6", Customer: "Jovin", InvoiceDate: "20-3-2022", DueDate: "11-7-2022", Email: "test123@gmail.com", phone_number: "081123456789", Total: "110.000", PaymentStatue: "Pending", },
        { Number: "7", Customer: "Rima", InvoiceDate: "20-3-2022", DueDate: "11-7-2022", Email: "test123@gmail.com", phone_number: "081123456789", Total: "110.000", PaymentStatue: "Pending", },
        { Number: "8", Customer: "Made", InvoiceDate: "20-3-2022", DueDate: "11-7-2022", Email: "test123@gmail.com", phone_number: "081123456789", Total: "110.000", PaymentStatue: "Paid", },
        { Number: "9", Customer: "Novita", InvoiceDate: "20-3-2022", DueDate: "11-7-2022", Email: "test123@gmail.com", phone_number: "081123456789", Total: "110.000", PaymentStatue: "Not Paid", },
        { Number: "10", Customer: "Kristina", InvoiceDate: "20-3-2022", DueDate: "11-7-2022", Email: "test123@gmail.com", phone_number: "081123456789", Total: "110.000", PaymentStatue: "Expire", },
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

.generate{
  width: 141px;
  height: 57px;
  background: #09273E;
  box-shadow: 0px 3px 30px rgba(0, 0, 0, 0.1);
}

.buttonGenerate{
  margin: -57px 0 0 160px;
}

.filterAndSearach{
  margin: -110px 0 0 800px;
}
input[type=search],
select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

</style>


