<template>
  <div class="index">
    <Header title="Jack McGuire" />
    <Home />
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/utils/Header.vue";
import Footer from "@/components/utils/Footer.vue";
import Home from "@/components/pages/Home.vue";
export default {
  name: "Index",
  components: {
    Header,
    Footer,
    Home
  }
};
</script>
