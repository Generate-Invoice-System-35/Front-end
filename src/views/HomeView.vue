<template>
  <div class="home">
    <Navbar />
    <div class="container">
      <Hero />
    </div>

    <div class="row mb-3">
      <div class="col-md-3 mt-4">
        <CardVue />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardVue from "@/components/CardVue.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    Hero,
    CardVue,
  },
};
</script>
