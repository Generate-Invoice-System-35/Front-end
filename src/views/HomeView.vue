<template>
  <div class="home">
    <Navbar />
    <Hero />
    <div class="container">
      <CardVue />
    </div>
    <br />
      <Content />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardVue from "@/components/CardVue.vue";
import Content from "@/components/Content.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    Hero,
    CardVue,
    Content,
  },
};
</script>
