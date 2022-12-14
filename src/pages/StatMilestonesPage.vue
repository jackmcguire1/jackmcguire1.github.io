<template>
  <div>
    <q-page class="row items-center justify-center">
      <div class="fit row wrap justify-center items-start content-center">
        <div class="col-auto">
          <h2>Project: Stat-Milestones</h2>
        </div>
      </div>

      <div class="fit row wrap justify-center items-start content-center">
        <div class="col-9">
          <q-carousel
            height="350px"
            animated
            v-model="slide"
            arrows
            navigation
            infinite
            padding
            swipeable
            control-color="black"
          >
            <q-carousel-slide
              :name="1"
              img-src="https://extensions-discovery-images.twitch.tv/e93cf8730nd11z7gepkly2gry5kv8k/0.0.2/screenshot64aae321-50be-4b5f-ada6-f4a2e1088211"
            />
            <q-carousel-slide
              :name="2"
              img-src="https://jackmcguire1.github.io/stat-milestones-website/assets/achievedfollowers.d1d2a44c.png"
            />
            <q-carousel-slide
              :name="3"
              img-src="https://extensions-discovery-images.twitch.tv/e93cf8730nd11z7gepkly2gry5kv8k/0.0.3/screenshotef2691a8-9768-4e53-b781-5ddcf863be70"
            />
            <q-carousel-slide
              :name="4"
              img-src="https://extensions-discovery-images.twitch.tv/e93cf8730nd11z7gepkly2gry5kv8k/0.0.3/screenshot98ad9180-d755-456a-b055-52464a93dac0"
            />
          </q-carousel>
        </div>
      </div>

      <div class="fit row wrap justify-center items-start content-center">
        <div class="col-auto">
          <p>
            <a href="https://jackmcguire1.github.io/stat-milestones-website/"
              >Stat-Milestones</a
            >
            is a Twitch Extension to help Twitch broadcasters visualise their
            social goals to viewers.
          </p>
        </div>
      </div>

      <div class="fit row wrap justify-center items-start content-center">
        <div class="col-auto">
          <h2 ref="#About">#ABOUT</h2>
        </div>
      </div>

      <div class="fit row wrap justify-center items-start content-center">
        <div class="col-auto">
          <q-list bordered separator>
            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label>Twitch Extension Metrics</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label><li>Installations</li></q-item-label>
                <q-item-label caption
                  >1.1+ million Twitch viewers have viewed
                  Stat-Milestones</q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label><li>Viewers</li></q-item-label>
                <q-item-label caption
                  >30,000+ installs of Stat-Milestones by Twitch
                  Broadcasters</q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label><li>Interactions</li></q-item-label>
                <q-item-label caption
                  >605k+ Twitch viewers interacting with
                  Stat-Milestones</q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label><li>Account Links</li></q-item-label>
                <q-item-label caption>
                  3,000+ Twitch viewers have linked their Twitch account to
                  Stat-Milestones</q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label><li>Monetization</li></q-item-label>
                <q-item-label caption>
                  60+ Twitch 'Bits' transactions</q-item-label
                >
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <div class="col-1"></div>

        <div class="col-auto">
          <q-list bordered separator>
            <q-item class="q-my-sm" clickable v-ripple>
              <q-item-section>
                <q-item-label>Additional info</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label><li>Project Website</li></q-item-label>
                <q-item-label caption>
                  Project website can found
                  <a
                    href="https://jackmcguire1.github.io/stat-milestones-website/"
                    >here</a
                  ></q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label><li>Twitch Extension</li></q-item-label>
                <q-item-label caption>
                  Twitch Extension can be found
                  <a
                    href="https://dashboard.twitch.tv/extensions/e93cf8730nd11z7gepkly2gry5kv8k"
                    >here</a
                  ></q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label><li>Hackathon Submission</li></q-item-label>
                <q-item-label caption>
                  The hackathon submission can be found
                  <a href="https://devpost.com/software/stat-milestones"
                    >here</a
                  ></q-item-label
                >
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section>
                <q-item-label><li>Discord</li></q-item-label>
                <q-item-label caption>
                  Discord server can be found
                  <a href="https://discord.gg/uzP7Y7WtXr">here</a></q-item-label
                >
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>

      <div class="fit row justify-center items-start content-center">
        <div class="col">
          <q-item></q-item>
        </div>
      </div>

      <div class="fit row wrap justify-center items-start content-center">
        <div class="col-auto">
          <q-img
            width="300px"
            height="100px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-34bqg_Ake5eGirwdk469inxSS4fXh-ZLHQ&usqp=CAU"
          />
        </div>

        <div class="col-1"></div>

        <div class="col-auto">
          <q-img width="300px" height="100px" src="~assets/twitch.jpeg" />
        </div>
      </div>

      <div class="fit row wrap justify-center items-start content-center">
        <div class="col-auto">
          <h3>#FEATURES</h3>
        </div>
      </div>

      <div class="fit row wrap justify-start items-center content-center">
        <div class="col"></div>
        <div class="col-auto">
          <q-card class="my-card">
            <q-img height="200px" width="400px" src="~assets/twitch-goals.png">
              <div class="absolute-bottom text-h6">Track Twitch Stats</div>
            </q-img>

            <q-card-section>
              Track your Twitch <br />
              <li>Followers</li>
              <li>Subscribers</li>
              <li>Goals</li>
              <li>Charity Donations</li>
            </q-card-section>
          </q-card>
        </div>
        <div class="col"></div>
        <div class="col-auto">
          <q-card class="my-card">
            <q-img height="200px" width="400px" src="~assets/discord.png">
              <div class="absolute-bottom text-h6">Discord Server</div>
            </q-img>

            <q-card-section>
              Discord messages<br />
              <li>New Followers</li>
              <li>Charity Goals</li>
              <li>Subscribers</li>
              <li>Stream Live</li>
            </q-card-section>
          </q-card>
        </div>
        <div class="col"></div>
        <div class="col-auto">
          <q-card class="my-card">
            <q-img height="200px" width="400px" src="~assets/color-wheel.jpeg">
              <div class="absolute-bottom text-h6">Theme Customization</div>
            </q-img>

            <q-card-section>
              Theme Customization <br />
              <li>Gauge Colors</li>
              <li>Banners</li>
              <li>Buttons</li>
              <li>Misc</li>
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

    <q-page class="row items-center justify-center">
      <div class="fit row wrap justify-center items-start content-center">
        <div class="col-auto">
          <q-timeline color="secondary">
            <q-timeline-entry heading body="Development Timeline" />

            <q-timeline-entry
              title="VUE 3 - upgrade"
              subtitle="November 16, 2022"
              body="Upgraded project to utilise Vue 3"
              color="green"
            />

            <q-timeline-entry
              title="Discord Server"
              subtitle="July 7, 2022"
              body="Created a Stat-Milestones Discord server for help and support!"
              color="dark"
            />

            <q-timeline-entry
              title="Twitch Charity"
              subtitle="September 18, 2022"
              body="Added support for tracking broadcasters Twitch Charity milestone"
              color="purple"
            />

            <q-timeline-entry
              title="Twitch Goals"
              subtitle="October 10, 2021"
              body="Added support for tracking broadcasters Twitch Goals milestone"
              color="purple"
            />

            <q-timeline-entry
              title="Twitch HypeTrains"
              subtitle="June 29, 2020"
              body="Added support for tracking broadcasters Twitch HypeTrains milestone"
              color="purple"
            />

            <q-timeline-entry
              title="Twitch Subscribers"
              subtitle="August 8, 2019"
              body="Added support for tracking broadcasters Twitch subscribers milestone"
              color="purple"
            />

            <q-timeline-entry
              title="Monetization Support"
              subtitle="July 19, 2019"
              color="purple"
              body="Added support for Twitch's 'bits' in-house currency"
            />

            <q-timeline-entry
              title="Custom theme & milestone goal"
              subtitle="June 4, 2019"
              color="green"
              body="Added theme customization and tracking custom milestone"
            />

            <q-timeline-entry
              title="Google Analytics"
              subtitle="May 18, 2019"
              color="orange"
              body="Integrated GA for web analytics"
            />

            <q-timeline-entry
              title="Initial release 🎉"
              subtitle="February 26, 2019"
              body="Initial release of Stat-Milestones Twitch Extension"
              color="purple"
            />
          </q-timeline>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script lang="ts">
import { event } from 'vue-gtag';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'StatMilestonesPage',
  setup() {
    return {
      slide: ref(1),
    };
  },
  onMounted() {
    event('load-page', { page: 'stat-milestones' });
  },
  components: {},
});
</script>
