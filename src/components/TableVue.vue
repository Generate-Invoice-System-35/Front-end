<template>
    <div class="table">
      <div></div>
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
          <tr v-for="(news, id) in newslist" :key="id">
            <td>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="generate" />
              </div>
            </td>
            <td>{{ news.publishedAT }}</td> <!--Ganti bagian table nya-->
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import $ from "jquery";
export default {

    data () {
      return{};
    },
  
  computed: {
    listsNews() { 
      return this.$store.state.invoice.lists;
    },
    errorMessage() {
      if (this.$store.state.news.error !=="") {
        return true;
      }
      return false;
      },
    },
    
    methods: {
        
        async doLogin() {
          const result = await this.$store.dispatch("auth/logout");
          
          if (result) {
            alert("logout Sukses");
            this.$router.push("/");
          } else {
            this.errorTesxt = this.$router.state.auth.info;
          }
        },
      },
  

        mounted() {
        this.getInvoice(); 
        $("#datatable").DataTable({
        lengthMenu: [
        [5, 10],
        [5, 10],
        ],
      });
    },
};

</script>

  

<style scopped>
.table{
  padding: 20px 74px 10px 74px;
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


