Package.describe({
  summary: "Run server tests noninteractively, with results going to the console.",
  version: '1.0.6-modules.6'
});

Package.onUse(function (api) {
  api.use(['tinytest', 'underscore', 'ejson'], 'server');

  api.addFiles(['server.js'], "server");
});
