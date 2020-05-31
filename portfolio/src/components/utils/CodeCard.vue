<template>
  <div class="CodeCard">
    <div>
      <b-card
        overlay
        :img-src="avatar"
        img-alt="Card Image"
        text-variant="white"
        title="Live, Love, Code."
        sub-title="Subtitle"
        img-height="400"
        img-width="100%"
      >
      </b-card>
    </div>
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
