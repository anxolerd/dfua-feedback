import 'polymer/polymer.js'

const $_documentContainer = document.createElement('div');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
      :root {
        --app-primary-color: #1976D2;
        --app-secondary-color: black;
        --app-accent-color: #202020;

        --primary-color: var(--app-primary-color);


        /* Primary colors */
        --dark-primary-color:         #455A64;
        --default-primary-color:      #607D8B;
        --light-primary-color:        #CFD8DC;
        --text-primary-color:         #FFFFFF; /* text / icons */

        /* Accent colors */
        --accent-color:               #009688;

        /* Background colors */
        --primary-background-color:   #FFFFFF;
        --secondary-background-color: #FFFFFF;

        /* Text colors */
        --primary-text-color:         #212121;
        --secondary-text-color:       #727272;
        --disabled-text-color:        #BDBDBD;

        /* Other colors */
        --divider-color:              #B6B6B6;
        --secondary-background-color: #FFFFFF;

        /* Footer */
        --footer-background-color:    #fcfcfc;
        --footer-text-color:          #757575;

        /* Tags colors */
        --general: #bdbdbd;
        --android: #78c257;
        --web: #2196f3;
        --cloud: #3f51b5;
        --community: #e91e63;
        --it: #9E9E9E;
        --angular-js: #e0343d;
        --angular-js2: #e0343d;
        --protractor: #e0343d;
        --polymer: #d81b60;
        --dart: #00b4aa;
        --firebase: #ff9800;
        --appengine: #0d47a1;
        --serviceworkers: #311b92;
        --web-rtc: #7b1fa2;
        --kubernetes: #326de6;
        --data-sync: #006064;
        --gae: #ffc107;
        --ndk: #4caf50;
        --ble: #1565c0;
        --ci: #cddc39;
        --tv: #d32f2f;
        --grpc: #607d8b;
        --ux: #9c27b0;
        --material-design: #009688;
        --entrepreneurship: #673ab7;
        --design-patterns: #673ab7;
        --libraries: #ffc107;
        --realm: #ff9800;
        --animations: #311b92;
        --go: #009688;
        --open-stack: #e0343d;
        --docker: #2196f3;
        --chrome-extensions: #ff9800;
        --progressive-web-apps: #00b4aa;
      }

      [layout] {
        @apply(--layout);
      }

      [layout][horizontal] {
        @apply(--layout-horizontal);
      }

      [layout][vertical] {
        @apply(--layout-vertical);
      }

      [layout][center] {
        @apply(--layout-center);
      }

      [layout][center-center] {
        @apply(--layout-center-center);
      }

      [flex] {
        @apply(--layout-flex);
      }

      [flex-auto] {
        @apply(--layout-flex-auto);
      }

      [two] {
        @apply(--layout-flex-2);
      }

      [end-justified] {
        @apply(--layout-end-justified);
      }

      [end] {
        @apply(--layout-end);
      }

      [justified] {
        @apply(--layout-justified);
      }

      [self-center] {
        @apply(--layout-self-center);
      }

      [self-end] {
        @apply(--layout-self-end);
      }

      [wrap] {
        @apply(--layout-wrap);
      }

      [inline] {
        @apply(--layout-inline);
      }

      [relative] {
        position: relative;
      }

      [fit] {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      [hidden] {
        display: none !important;
      }

      [show] {
        display: block !important;
      }

      a,
      .anchor-like,
      .markdown-html a {
        color: var(--default-primary-color);
        text-decoration: none;
      }      
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer);
