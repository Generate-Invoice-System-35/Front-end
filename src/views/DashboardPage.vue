<template>
  <div class="dashboard">
    <Navbar />
    <TableVue />
  </div>
</template>


<script>
import Navbar from "@/components/Navbar.vue";
import TableVue from "@/components/TableVue.vue";


 export default {
    name: "dashboardPage",
    components: {
    Navbar,
    TableVue
},
};
</script>