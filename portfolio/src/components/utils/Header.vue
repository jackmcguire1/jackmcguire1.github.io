<template>
  <div class="Header">
    <!-- example nav bar -->
    <b-navbar toggleable="lg" fixed type="dark" variant="dark">
      <!-- header -->
      <b-navbar-brand href="#">
        {{ title }}
        <!-- <b-avatar :src="avatar"></b-avatar> -->
      </b-navbar-brand>

      <b-navbar-nav class="ml-auto" type="light">
        <b-nav-item href="#Projects">Projects</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import ProfilePic from "@/assets/jack.jpeg";

export default {
  name: "Header",
  data() {
    return {
      avatar: ProfilePic,
    };
  },
  props: {
    title: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
