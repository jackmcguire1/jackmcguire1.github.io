<template>
  <div class="Footer">
    <!-- example nav bar -->
    <b-navbar toggleable="lg" fixed="bottom" type="dark" variant="dark">
      <!-- header -->
      <b-navbar-brand href="#">
        {{ title }}
        <!-- <b-avatar :src="avatar"></b-avatar> -->
      </b-navbar-brand>

      <b-navbar-nav class="ml-auto" type="light">
        <b-nav-item href="https://github.com/jackmcguire1/"
          ><b-avatar variant="dark" :src="githubLogo"></b-avatar
        ></b-nav-item>
        <b-nav-item href="https://twitter.com/crazyjack12"
          ><b-avatar variant="dark" :src="twitterLogo"></b-avatar
        ></b-nav-item>
        <b-nav-item href="https://www.linkedin.com/in/jack-mcguire-77627865/"
          ><b-avatar variant="dark" :src="linkedinLogo"></b-avatar
        ></b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import GitHubLogo from "@/assets/github.png";
import TwitterLogo from "@/assets/twitter.png";
import FacebookLogo from "@/assets/facebook.png";
import LinkedinLogo from "@/assets/linkedin.png";

export default {
  name: "Footer",
  data() {
    return {
      githubLogo: GitHubLogo,
      twitterLogo: TwitterLogo,
      facebookLogo: FacebookLogo,
      linkedinLogo: LinkedinLogo,
    };
  },
  props: {
    title: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
