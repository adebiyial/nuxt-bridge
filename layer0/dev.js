const { createDevServer } = require('@layer0/core/dev');

module.exports = async function dev() {
  return createDevServer({
    label: 'NuxtBridge',
    command: () => 'npx nuxi dev',
    ready: [/Listening on/i],
  });
};
