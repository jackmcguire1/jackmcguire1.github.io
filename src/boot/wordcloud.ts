// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { boot } from 'quasar/wrappers';

import VueWordCloud from 'vuewordcloud';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  app.component(VueWordCloud.name, VueWordCloud);
});
