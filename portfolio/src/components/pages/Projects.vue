<template>
  <div class="Projects">
    <b-jumbotron id="Projects" variant="dark" lead="PROJECTS"></b-jumbotron>

    <b-card-group deck>
      <b-card
        no-body
        header-bg-variant="dark"
        header-text-variant="light"
        header="Go-Twitch-Ext"
      >
        <b-list-group flush>
          <b-list-group-item
            href="https://github.com/jackmcguire1/go-twitch-ext"
            >https://github.com/jackmcguire1/go-twitch-ext</b-list-group-item
          >
        </b-list-group>
        <b-card-body>
          <Googly></Googly><br /><br />
          <p>
            Go-Twitch-Ext is a go module that provides utils and simplified
            Twitch API interaction to help user's <br />
            create a backend or EBS for a Twitch Extension.
          </p>
        </b-card-body>
      </b-card>

      <b-card
        no-body
        header-bg-variant="dark"
        header-text-variant="light"
        header="Stat-Milestones"
      >
        <b-list-group flush>
          <b-list-group-item
            href="https://dashboard.twitch.tv/extensions/e93cf8730nd11z7gepkly2gry5kv8k"
            >https://dashboard.twitch.tv/extensions/e93cf8730nd11z7gepkly2gry5kv8k</b-list-group-item
          >
        </b-list-group>
        <b-card-body>
          <b-img :src="statMLogo" height="300"></b-img><br /><br />
          <p>
            Stat-Milestones is a Twitch extension I developed for a Twitch / AWS
            hackathon<br />
            This Twitch extension allows broadcaster's to track their Twitch
            followers and subscribers.<br /><br>
            Stat-Milestones is served by a serverless backend, hosted on AWS.<br />
          </p>

          <b-list-group>
            <b-list-group-item variant="dark"> Technologies </b-list-group-item>
            <b-list-group-item> VueJS </b-list-group-item>
            <b-list-group-item> Google Analytics </b-list-group-item>
            <b-list-group-item> Golang </b-list-group-item>
            <b-list-group-item> AWS SAM-CLI</b-list-group-item>
            <b-list-group-item> [A]mazon [W]eb [S]ervices</b-list-group-item>
          </b-list-group>
        </b-card-body>
      </b-card>
    </b-card-group>

    <b-card-group deck>
      <b-card
        no-body
        header-bg-variant="dark"
        header-text-variant="light"
        header="Twitch-Extension-Vue-Template"
      >
        <b-list-group flush>
          <b-list-group-item
            href="https://github.com/jackmcguire1/Twitch-Extension-VueJS-Template"
            >https://github.com/jackmcguire1/Twitch-Extension-VueJS-Template</b-list-group-item
          >
        </b-list-group>
        <b-card-body>
          <b-img :src="vueLogo"></b-img><br /><br />
          <p>
            Twitch-Extension-Vue-Template is a project template designed to help VueJS
            developers<br />
            get started in developing a Twitch panel extension.
          </p>

          <b-list-group>
            <b-list-group-item variant="dark"> Technologies </b-list-group-item>
            <b-list-group-item> VueJS </b-list-group-item>
            <b-list-group-item> Golang</b-list-group-item>
            <b-list-group-item> AWS SAM-CLI</b-list-group-item>
            <b-list-group-item> [A]mazon [W]eb [S]ervices</b-list-group-item>
          </b-list-group>
        </b-card-body>
      </b-card>

      <b-card
        no-body
        header-bg-variant="dark"
        header-text-variant="light"
        header="Go-Twitch-Analytics"
      >
        <b-list-group flush>
          <b-list-group-item
            href="https://github.com/jackmcguire1/go-twitch-analytics"
            >https://github.com/jackmcguire1/go-twitch-analytics</b-list-group-item
          >
        </b-list-group>
        <b-card-body>
          <Googly></Googly><br /><br />
          <p>
            Go-Twitch-Analytics is serverless application to fetch<br />
            Twitch Analytics of a Twitch Extension or Game <br />
          </p>
          <b-list-group>
            <b-list-group-item variant="dark"> Technologies </b-list-group-item>
            <b-list-group-item> Twitch API </b-list-group-item>
            <b-list-group-item> Golang</b-list-group-item>
            <b-list-group-item> AWS SAM-CLI</b-list-group-item>
            <b-list-group-item> [A]mazon [W]eb [S]ervices</b-list-group-item>
          </b-list-group>
        </b-card-body>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import Googly from "@/components/utils/Googly.vue";
import StatMilestonesLogo from "@/assets/statmilestones.png";
import VueLogo from "@/assets/vuelogo.png";

export default {
  name: "Projects",
  props: {},
  data() {
    return {
      statMLogo: StatMilestonesLogo,
      vueLogo: VueLogo,
    };
  },
  components: {
    Googly,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
