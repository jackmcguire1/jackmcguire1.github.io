<template>
  <div>
    <q-page class="row items-center justify-evenly">
      <q-avatar round size="300px">
        <q-img src="https://avatars.githubusercontent.com/u/9089342?v=4" />
      </q-avatar>

      <q-card class="my-card" flat bordered @mouseover="hoverProfileCard()">
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

          <q-separator dark vertical />
          <q-separator dark vertical />

          <q-list bordered separator>
            <q-item class="q-my-sm" clickable v-ripple>
              <q-item-section>
                <q-item-label>SKILLS</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label><li>GO</li></q-item-label>
                <q-item-label caption>Golang</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label><li>Javascript</li></q-item-label>
                <q-item-label caption>TypeScript</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label><li>AWS</li></q-item-label>
                <q-item-label caption>[A]mazon [W]eb [S]ervices</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </q-page>
    <q-separator dark />
    <q-page>
      <q-separator dark />
      <div class="fit row wrap justify-center items-start content-center">
        <div class="col-auto">
          <q-timeline color="secondary">
            <q-timeline-entry heading body="Work History" />

            <q-timeline-entry
              title="Staff Engineer"
              subtitle="February 26, 2022"
              body="Staff Engineer"
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
              title="Graduated University"
              subtitle="May 10, 2021"
              body="University Of Derby"
              color="orange"
            />

            <q-timeline-entry
              title="Intern Software Engineer"
              subtitle="August 1, 2014"
              body="EssDocs"
              color="blue"
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

export default defineComponent({
  name: 'IndexPage',
  components: {},
  methods: {
    hoverProfileCard: function () {
      event('hover', {
        event_category: 'hover',
        event_label: 'profile-card',
        value: 'profile-card',
      });
    },
  },
});
</script>
