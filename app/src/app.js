import { Element as PolymerElement } from 'polymer/polymer-element';

import 'app-route/app-location';
import 'app-route/app-route';

import 'app-layout/app-drawer/app-drawer';
import 'app-layout/app-drawer-layout/app-drawer-layout';
import 'app-layout/app-header/app-header';
import 'app-layout/app-header-layout/app-header-layout';
import 'app-layout/app-toolbar/app-toolbar';

import 'iron-icons/iron-icons';
import 'iron-pages/iron-pages';
import 'paper-icon-button/paper-icon-button';

import 'shared-styles';

import 'modules/dashboard/container';

export class FeedbackApp extends PolymerElement {
  static get template() {
    return `
      <style include="shared-styles">
        :host {
          --primary-color: var(--app-primary-color);
          display: block;
          background-color: var(--primary-background-color);
        }

        app-header {
          color: #fff;
          background-color: var(--primary-color);
        }
        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        }
        .avatar {
          width: 32px;
          height: 32px;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: 50% 50%;
          border-radius: 50%;
        }
        .drawer-list {
          margin: 0 20px;
        }
        .drawer-list a {
          display: block;
          padding: 0 16px;
          text-decoration: none;
          color: var(--app-secondary-color);
          line-height: 40px;
        }
        .drawer-list a.iron-selected {
          color: black;
          font-weight: bold;
        }

      </style>
      <app-location route="{{route}}"></app-location>
      <app-route
          route="{{route}}"
          pattern="/:page"
          data="{{routeData}}"
          tail="{{subroute}}"></app-route>
  
      <template is="dom-if" if="[[!user]]">
        <tardis-login></tardis-login>
      </template>
  
      <template is="dom-if" if="[[user]]">
        <app-drawer-layout force-narrow fullbleed>
          <app-drawer swipe-open id="appDrawer" slot="drawer">
            <app-toolbar><div main-title>Feedback</div></app-toolbar>
            <iron-selector
              selected="[[page]]"
              attr-for-selected="name"
              class="drawer-list"
              role="navigation"
              on-iron-select="closeDrawer"
            >
              <a href="/" name="dashboard">Dashboard</a>
            </iron-selector>

          </app-drawer>

          <app-header-layout fullbleed has-scrolling-region>
            <app-header slot="header" fixed>
              <app-toolbar sticky>
                <paper-icon-button icon="menu" drawer-toggle></paper-icon-button>
                <div main-title>Feedback</div>
                <paper-icon-button
                  icon="[[computeLockIcon(user)]]"
                  on-tap="signOut">
                  <!--disabled="[[!signedIn]]"-->
                </paper-icon-button>
                <span class="avatar" style="background-image: url([[user.photoURL]]);"></span>
              </app-toolbar>
            </app-header>
            <iron-pages role="main" attr-for-selected="name" selected="[[page]]">
              <feedback-dashboard name="dashboard"></feedback-dashboard>
            </iron-pages>
          </app-header-layout>
        </app-drawer-layout>
      </template>
    `
  }

  constructor() {
    super();
    // firebase.initializeApp(config.firebase);
  }

  // properties, observers, etc. are identical to 2.x
  static get properties() {
    return {
      page: {
        type: String,
      },
      rootPattern: String,
      user: {
        type: Object,
        value: { name: 'tester' },
        // statePath: selectUser,
      },
    };
  }

  static get observers() {
    return [
      '_routePageChanged(routeData.page)',
    ];
  }

  _routePageChanged(page) {
    this.page = page || 'dashboard';
  }

  computeLockIcon() {
    return this.user ? 'lock-open' : 'lock';
  }

  signOut () {
    // this.dispatch(logout());
  }
}

customElements.define('feedback-app', FeedbackApp);
