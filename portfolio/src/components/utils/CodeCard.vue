<template>
  <div class="CodeCard">
    <template>
      <v-parallax dark height="300" :src="avatar">
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="19">
            <h4 class="subheading">Live, Love, Code.</h4>
          </v-col>
        </v-row>
      </v-parallax>
    </template>
  </div>
</template>

<script>
import ProfilePic from "@/assets/gocode.png";

export default {
  name: "CodeCard",
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
