<template>
  <div class="dashboard">
    <NavbarLogin />

    <div class="contentTables">
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

        <div style="margin: -35px 0 0 805px">
        <span><b-icon icon='filter' style="color: #F75000;"></b-icon></span>
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
      </div>


    <TableVue />
  </div>
</template>


<script>
import TableVue from "@/components/TableVue.vue";
import NavbarLogin from "@/components/NavbarLogin.vue";


 export default {
    name: "dashboardPage",
    components: {
    TableVue,
    NavbarLogin,
},
};
</script>

<style scoped>
.contentTables{
  padding: 74px;
}
</style>