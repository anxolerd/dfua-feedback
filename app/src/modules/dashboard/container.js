import { Element as PolymerElement } from 'polymer/polymer-element';
import 'polymer/lib/elements/dom-if';
import 'iron-flex-layout/iron-flex-layout-classes';

import 'iron-icons/editor-icons';
import 'iron-icon/iron-icon';

import 'paper-card/paper-card';
import 'paper-button/paper-button';

// import 'paper-fab/paper-fab';

import ReduxMixin from 'store';
import 'shared-styles';

import { fetchLastVotes } from './actions';
import {
  selectLastVotes,
  selectLastVotesFetching,
  selectLastVotesFetchingError,
} from './selectors';

export class FeedbackDashboard extends ReduxMixin(PolymerElement) {
  static get template() {
    return `
      <style include="iron-flex shared-styles">
        :host {
          display: block;
        }
        paper-card {
          display: block;
          margin: 16px;
        }

        .list-item {
          background: #fff;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          padding: 0 8px;
          table-layout: fixed;
          -webkit-transition: .1s all;
          transition: .1s all;
          width: 100%;
        }
        .list-item:hover {
          background-color: #f2f2f2;
        }
        .list-item .cell {
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          font-size: 13px;
          overflow: hidden;
          padding: 4px;
          text-overflow: ellipsis;
          vertical-align: middle;
          white-space: nowrap;
        }
        .list-item a, .list-item a:visited {
          color: #616161;
        }
        paper-fab {
          position: fixed;
          right: 25px;
          bottom: 30px;
          background-color: #2196F3;
        }
        h1 {
          font-size: 22px;
          margin: 16px 0;
          color: #212121;
        }
      </style>
      <p>Dashboard</p>
      <div class="layout horizontal">
        <div class="flex">
        </div>
        <div class="flex">
          <paper-card heading="Last Votes">
            <div class="card-content">
              
            <template is="dom-repeat" items="[[lastVotes]]">
              <div>
                <div class="list-item layout horizontal">
                  <div class="cell flex">[[item.time]]</div>
                  <div class="cell">[[item.value]]</div>
                </div>
              </div>
            </template>

              <template is="dom-if" if="[[lastVotesFetching]]">
                Loading
              </template>
              <template is="dom-if" if="[[lastVotesFetchingError]]">
                <div class="error">
                  [[lastVotesFetchingError.message]]
                </div>
              </template>
            </div>
            <div class="card-actions">
              <paper-button>View All</paper-button>
            </div>
          </paper-card>
        </div>
      </div>
      
      <paper-fab icon="add" on-tap="handleNew"></paper-fab>
    `;
  }

  static get properties() {
    return {
      lastVotes: {
        type: Array,
        statePath: selectLastVotes,
      },
      lastVotesFetching: {
        statePath: selectLastVotesFetching,
      },
      lastVotesFetchingError: {
        statePath: selectLastVotesFetchingError,
      },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.dispatch(fetchLastVotes(10));
  }
}

customElements.define('feedback-dashboard', FeedbackDashboard);
