<template>
  <div class="Timeline">
    <b-jumbotron id="Timeline" variant="dark" lead="Timeline"></b-jumbotron>

    <v-app id="inspire">
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item color="green darken-1" fill-dot left>
          <v-card>
            <v-card-title class="green darken-1 justify-end">
              <v-container>
                <b-img height="50" :src="gmgLogo"></b-img>
              </v-container>
              <h2 class="display-1 white--text font-weight-light">
                Lead Software Engineer | Sep 2019 - Current
              </h2>
            </v-card-title>
          </v-card>
        </v-timeline-item>

        <v-timeline-item color="green darken-1" fill-dot right small>
          <v-card>
            <v-card-title class="green darken-1">
              <v-container>
                <b-img height="50" :src="gmgLogo"></b-img>
              </v-container>
              <h2 class="display-1 white--text font-weight-light">
                Nov 2018 - Sep 2019 | Software Engineer
              </h2>
            </v-card-title>
          </v-card>
        </v-timeline-item>

        <v-timeline-item color="red lighten-1" fill-dot left>
          <v-card>
            <v-card-title class="red lighten-1 justify-end">
              <v-container>
                <b-img height="100" :src="grabyoLogo"></b-img>
              </v-container>
              <h2 class="display-1 mr-4 white--text font-weight-light">
                Junior Fullstack Developer | May 2018 - July 2018
              </h2>
            </v-card-title>
          </v-card>
        </v-timeline-item>

        <v-timeline-item color="purple lighten-2" fill-dot small right>
          <v-card>
            <v-card-title class="purple lighten-2">
              <v-container class="white--text">
                <b-img height="100" :src="brandworkzLogo"></b-img>
                Brandworkz
              </v-container>

              <h2 class="display-1 white--text font-weight-light">
                Nov 2017 - May 2018 | Junior Software Engineer
              </h2>
            </v-card-title>
          </v-card>
        </v-timeline-item>

        <v-timeline-item color="blue lighten-1" fill-dot left>
          <v-card>
            <v-card-title class="blue lighten-1 justify-end">
              <v-container>
                <b-img height="100" :src="essdocsLogo"></b-img>
              </v-container>
              <h2 class="display-1 mr-4 white--text font-weight-light">
                Temp Software Developer | July 2016 - Aug 2016
              </h2>
            </v-card-title>
          </v-card>
        </v-timeline-item>

        <v-timeline-item color="orange lighten-2" fill-dot small right>
          <v-card>
            <v-card-title class="orange lighten-2">
              <v-container>
                <b-img height="100" :src="uod"></b-img>
              </v-container>
              <h2 class="display-1 black--text font-weight-light">
                2016 JULY | University Of Derby - Computer Science 2:1
              </h2>
            </v-card-title>
          </v-card>
        </v-timeline-item>

        <v-timeline-item color="blue lighten-1" fill-dot left>
          <v-card>
            <v-card-title class="blue lighten-1 justify-end">
              <v-container>
                <b-img height="100" :src="essdocsLogo"></b-img>
              </v-container>
              <h2 class="display-1 mr-4 white--text font-weight-light">
                 Junior Software Developer | Aug 2014 - Aug 2015
              </h2>
            </v-card-title>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-app>
  </div>
</template>

<script>
import GrabyoLogo from "@/assets/grabyo.png";
import BrandworkzLogo from "@/assets/brandworkz.png";
import GMGLogo from "@/assets/gmg.png";
import ESSDOCSLogo from "@/assets/essdocs.png";
import UOD from "@/assets/uod.png";

export default {
  name: "Timeline",
  props: {},
  data() {
    return {
      grabyoLogo: GrabyoLogo,
      brandworkzLogo: BrandworkzLogo,
      gmgLogo: GMGLogo,
      essdocsLogo: ESSDOCSLogo,
      uod: UOD,
    };
  },
  components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
