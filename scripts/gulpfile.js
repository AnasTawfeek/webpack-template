'use strict';

const
  gulp = require('gulp'),
  program = require('commander');

program
  .version('0.0.1')
  .allowUnknownOption()
  .option('-b, --build <type>', 'Specifies the build type: "production", or "development". Will override NODE_ENV. (Default = "development")', /^(production|development)$/i, 'development')
  .parse(process.argv);

const build = (program.build || '').toLowerCase();

switch (build) {
case 'production':
case 'development':
  process.env.node_env = build;
  break;
}

require('./build')(gulp);
require('./clean')(gulp);
require('./pack')(gulp);
