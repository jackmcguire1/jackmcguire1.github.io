<template>
  <div>
    <q-page class="row items-center justify-evenly">
      <div class="fit row justify-center items-start content-center">
        <div class="col">
          <q-item></q-item>
        </div>
      </div>
      <div class="fit row justify-center items-start content-center">
        <div class="col">
          <q-item></q-item>
        </div>
      </div>

      <q-avatar round size="300px">
        <q-img src="~/assets/jack.jpeg" />
      </q-avatar>

      <q-card flat bordered @mouseover="hoverProfileCard()">
        <q-item>
          <q-item-section>
            <q-item-label>Jack McGuire</q-item-label>
            <q-item-label caption>
              Staff Engineer @GreenManGaming
            </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator dark horiztonal inset />
        <q-card-section horizontal>
          <q-list bordered separator>
            <q-item class="q-my-sm" clickable v-ripple>
              <q-item-section>
                <q-item-label>ABOUT</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label><li>Job Title</li></q-item-label>
                <q-item-label caption>Staff Engineer</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label><li>Side Hobby</li></q-item-label>
                <q-item-label caption>Twitch Extensions Developer</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label><li>Side Hobby</li></q-item-label>
                <q-item-label caption> Open Source Contributor</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>

          <q-separator dark vertical />
          <q-separator dark vertical />

          <q-list bordered separator>
            <q-item class="q-my-sm" clickable v-ripple>
              <q-item-section>
                <q-item-label>CONTACT</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label><li>Email</li></q-item-label>
                <q-item-label caption>jackmcguire35@gmail.com</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label><li>Telephone</li></q-item-label>
                <q-item-label caption>+447954179531</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label><li>Discord</li></q-item-label>
                <q-item-label caption>crazyjack12#2295</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>

      <div class="fit row justify-center items-start content-center">
        <div class="col">
          <q-item></q-item>
        </div>
      </div>

      <div class="fit row wrap justify-center items-start content-center">
        <div class="col-auto">
          <h3>#PROJECTS</h3>
        </div>
      </div>

      <div class="fit row wrap justify-start items-center content-center">
        <div class="col"></div>
        <div class="col-auto">
          <q-card class="my-card q-hoverable cursor-pointer" @click="openURL('/stat-milestones')">
            <q-img
              height="200px"
              width="400px"
              src="~/assets/twitch-extensions.png"
            >
              <div class="absolute-bottom text-h6">Twitch Extension</div>
            </q-img>

            <q-card-section>
              Stat-Milestones <br />
              <li>Go</li>
              <li>Vue</li>
              <li>Twitch</li>
              <li>AWS</li>
            </q-card-section>
          </q-card>
        </div>
        <div class="col"></div>
        <div class="col-auto">
          <q-card
            class="my-card q-hoverable cursor-pointer"
            @click="
              openURL('https://dev.to/jackmcguire1/wheel-of-fortune-3521')
            "
          >
            <q-img
              height="200px"
              width="400px"
              src="~/assets/wheel-of-fortune.jpeg"
            >
              <div class="absolute-bottom text-h6">REDIS Hackathon</div>
            </q-img>

            <q-card-section>
              Wheel Of Fortune<br />
              <li>Redis</li>
              <li>Go</li>
              <li>Vue</li>
              <li>Envoy</li>
            </q-card-section>
          </q-card>
        </div>
        <div class="col"></div>
        <div class="col-auto">
          <q-card
            class="my-card q-hoverable cursor-pointer"
            @click="openURL('https://github.com/jackmcguire1/how-old-is')"
          >
            <q-img height="200px" width="400px" src="~/assets/alexa.png">
              <div class="absolute-bottom text-h6">Alexa Skill</div>
            </q-img>

            <q-card-section>
              How-Old-Is <br />
              <li>GO</li>
              <li>AWS Lambda</li>
              <li>AWS SAM</li>
              <li>Alexa</li>
            </q-card-section>
          </q-card>
        </div>
        <div class="col"></div>
      </div>

      <div class="fit row justify-center items-start content-center">
        <div class="col">
          <q-item></q-item>
        </div>
      </div>
    </q-page>

    <q-separator dark />
    <q-page>
      <q-separator dark />
      <div class="fit row wrap justify-center items-start content-center">
        <div class="col-auto">
          <q-timeline color="secondary">
            <q-timeline-entry heading body="#CAREER" />

            <q-timeline-entry
              title="Staff Engineer"
              subtitle="February 26, 2022"
              body="Green Man Gaming"
              color="green"
            />

            <q-timeline-entry
              title="Lead Engineer"
              subtitle="September 18, 2019"
              color="green"
              body="Green Man Gaming"
            />

            <q-timeline-entry
              title="Junior Software Engineer"
              subtitle="October 10, 2017"
              color="green"
              body="Green Man Gaming"
            />

            <q-timeline-entry
              title="Junior Software Engineer"
              subtitle="June 19, 2017"
              color="red"
              body="Grabyo"
            />

            <q-timeline-entry
              title="Junior Software Engineer"
              subtitle="October 8, 2016"
              body="Brandworkz"
              color="purple"
            />

            <q-timeline-entry
              title="Contract Software Engineer"
              subtitle="August 1, 2016"
              body="EssDocs"
              color="blue"
            />

            <q-timeline-entry
              title="Graduated Computer Science - Bsc Hons"
              subtitle="May 10, 2016"
              body="University Of Derby"
              color="orange"
            />

            <q-timeline-entry
              title="Intern Software Engineer"
              subtitle="August 1, 2014"
              body="EssDocs"
              color="blue"
            />

            <q-timeline-entry
              title="Started - Computer Science - Bsc Hons"
              subtitle="September 14, 2012"
              body="University Of Derby"
              color="orange"
            />

            <q-timeline-entry
              title="BTEC National Extended Diploma Level 3 - Software Engineering"
              subtitle="September 10, 2010"
              body="Bromley College Of Further And Higher Education"
              color="pink"
            />

          </q-timeline>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { event } from 'vue-gtag';
import { openURL } from 'quasar';

export default defineComponent({
  name: 'IndexPage',
  components: {},
  data() {
    return {
      shadow: false,
    };
  },
  methods: {
    hoverProfileCard: function () {
      event('hover', {
        event_category: 'hover',
        event_label: 'profile-card',
        value: 'profile-card',
      });
    },
    applyShadow: function () {
      this.shadow = !this.shadow;
      if (!this.shadow) {
      }
    },
    openURL: openURL,
  },
});
</script>

<style>
.my-card:hover {
  background-color: #e8e8e8;
}
</style>
