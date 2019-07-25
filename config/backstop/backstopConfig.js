'use strict';

// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');

const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  referenceUrl:
    'https://mate-academy.github.io/layout_solutions/style-it-up/',
};

const config = {
  ...backstop,
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  viewports: [
    {
      name: 'tablet_h',
      width: 1024,
      height: 768,
    },
  ],
  scenarios: [
    {
      ...basic,
      label: 'entire-document',
      selectors: ['document'],
    },
    {
      ...basic,
      label: 'default-block',
      selectors: ['#qa-block'],
    },
    {
      ...basic,
      label: 'hovered-block',
      hoverSelectors: ['#qa-block'],
      selectors: ['#qa-block'],
    },
  ],
};

module.exports = config;
