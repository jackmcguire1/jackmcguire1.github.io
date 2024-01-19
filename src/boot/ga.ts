// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { boot } from 'quasar/wrappers';

import VueGtag from 'vue-gtag';

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app, router }) => {
  app.use(
    VueGtag,
    {
      config: {
        id: 'G-35F4WN4VX7',
      },
    },
    router
  );
});
