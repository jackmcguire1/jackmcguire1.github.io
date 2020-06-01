<template>
  <div class="Home">
    <b-jumbotron variant="dark" lead="PORTFOLIO">
      <p>Please find my work experience and projects</p>
      <b-img rounded="circle" :src="avatar"></b-img>
    </b-jumbotron>

    <CodeCard></CodeCard>
    <Projects></Projects>
    <Timeline></Timeline>

    <b-jumbotron id="Contact" variant="dark" lead="CONTACT"> </b-jumbotron>
  </div>
</template>

<script>
//import Googly from "@/components/utils/Googly.vue";
import CodeCard from "@/components/utils/CodeCard.vue";
import Projects from "@/components/pages/Projects.vue";
import Timeline from "@/components/pages/Timeline.vue";
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
    Timeline,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.jumbotron {
  margin-bottom: 0px;
}
</style>
