<template>
  <div class="dashboard">
    <NavbarLogin />

    <br />

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