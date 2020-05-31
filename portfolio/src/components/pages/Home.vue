<template>
  <div class="Home">
    <b-jumbotron variant="dark" lead="PORTFOLIO">
      <p>Please find my work experience and projects</p>
      <b-img rounded="circle" :src="avatar"></b-img>
    </b-jumbotron>

    <CodeCard></CodeCard>
    <Projects></Projects>
  </div>
</template>

<script>
//import Googly from "@/components/utils/Googly.vue";
import CodeCard from "@/components/utils/CodeCard.vue";
import Projects from "@/components/pages/Projects.vue";
import ProfilePic from "@/assets/jack.jpeg";
export default {
  name: "Home",
  props: {},
  data() {
    return {
      avatar: ProfilePic,
    };
  },
  components: {
    CodeCard,
    Projects,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.jumbotron {
  margin-bottom: 0px;
}
</style>
