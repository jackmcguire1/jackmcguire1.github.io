<template>
  <v-container class="py-12">
    <v-row justify="center">
      <v-col cols="12" lg="10">
        <v-card color="surface-variant" variant="flat" rounded="lg" class="aws-card overflow-hidden">
          <v-row align="center" no-gutters>
            <!-- Badge side -->
            <v-col cols="12" sm="4" class="text-center pa-8">
              <div class="aws-badge-ring mx-auto mb-4">
                <v-avatar color="#232F3E" size="120">
                  <v-icon color="#FF9900" size="64">mdi-aws</v-icon>
                </v-avatar>
              </div>
              <v-chip color="#FF9900" variant="flat" size="small" class="font-weight-bold">
                Community Builder
              </v-chip>
            </v-col>

            <!-- Content side -->
            <v-col cols="12" sm="8" class="pa-6 pa-sm-8">
              <h3 class="text-h5 font-weight-bold mb-2">
                AWS Community Builder
              </h3>
              <p class="text-body-1 text-grey-lighten-1 mb-4">
                Selected as an AWS Community Builder for contributions to the AWS community through
                knowledge sharing, open source projects, and technical content focused on serverless
                and cloud-native architectures.
              </p>

              <div class="d-flex flex-wrap gap-2 mb-5">
                <v-chip
                  v-for="area in focusAreas"
                  :key="area"
                  color="amber-darken-2"
                  size="small"
                  variant="tonal"
                >
                  {{ area }}
                </v-chip>
              </div>

              <v-btn
                color="#FF9900"
                href="https://builder.aws.com/community/@jackmcguire"
                prepend-icon="mdi-open-in-new"
                rounded="pill"
                target="_blank"
                variant="tonal"
              >
                Learn More
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const focusAreas = ['Serverless', 'Go', 'Cloud Native', 'Open Source', 'DevOps']
</script>

<style scoped lang="scss">
.aws-card {
  border: 1px solid rgba(255, 153, 0, 0.15);
  transition: border-color 0.3s ease;

  &:hover {
    border-color: rgba(255, 153, 0, 0.35);
  }
}

.aws-badge-ring {
  display: inline-block;
  padding: 4px;
  border-radius: 50%;
  background: linear-gradient(135deg, #FF9900, #FF6600);
  box-shadow: 0 0 30px rgba(255, 153, 0, 0.15);
}
</style>
