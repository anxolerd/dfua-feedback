import { Element as PolymerElement } from 'polymer/polymer-element';

import 'iron-icons/iron-icons';
import 'paper-button/paper-button';

import ReduxMixin from 'store';
import 'shared-styles';
import {
  initListeners,
  login,
} from './actions';

export class FeedbackLogin extends ReduxMixin(PolymerElement) {
// export class FeedbackLogin extends PolymerElement {
  static get template() {
    return `
      <style>
        :host {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: var(--primary-color);
          transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
          color: white;

          @apply(--layout);
          @apply(--layout-center-center);
        }

        paper-button > * {
          vertical-align: middle;
          text-transform: none;
        }
      </style>
      <paper-button on-tap="handleLogin">
        <iron-icon icon="account-circle"></iron-icon>
        <span>Sign in with Google</span>
      </paper-button>
    `;
  }

  constructor() {
    super();
    this.dispatch(initListeners());
  }
  
  handleLogin () {
    this.dispatch(login());
  }
}

customElements.define('feedback-login', FeedbackLogin);
