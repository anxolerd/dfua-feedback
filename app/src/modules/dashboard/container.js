import { Element as PolymerElement } from 'polymer/polymer-element';

import 'iron-flex-layout/iron-flex-layout-classes';

import 'iron-icons/editor-icons';
import 'iron-icon/iron-icon';

// import 'paper-fab/paper-fab';

// import ReduxMixin from 'store';
import 'shared-styles';

// import { fetchOrganizations } from '../../actions';
// import { selectOrganizations } from '../../selectors';

export class FeedbackDashboard extends PolymerElement {
  static get template() {
    return `
      <style include="iron-flex">
        :host {
          display: block;
        }
        .list-item {
          background: #fff;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          height: 56px;
          padding: 0 16px;
          table-layout: fixed;
          -webkit-transition: .1s all;
          transition: .1s all;
          width: 100%;

        }
        .list-item:hover {
          background-color: #f2f2f2;
        }
        .list-item .cell {
          line-height: 48px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          /*display: table-cell;*/
          font-size: 13px;
          overflow: hidden;
          padding: 4px;
          text-overflow: ellipsis;
          vertical-align: middle;
          white-space: nowrap;
        }
        .list-item .name {
          font-weight: 500;
        }
        .list-item .logo {
          padding-left: 12px;
        }
        .list-item .logo img {

          vertical-align: middle;
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
      <template is="dom-repeat" items="[[organizations]]">
        <div>
          <div class="list-item layout horizontal">
            <div class="cell logo">
              <img height="36" src="[[item.logoUrl]]" />
            </div>
            <div class="cell name flex">[[item.name]]</div>
            <div class="cell">
              <a href="/organizations/[[item.$key]]" tabindex="-1">
                <iron-icon icon="editor:mode-edit"></iron-icon>
              </a>
            </div>
          </div>
        </div>
      </template>
      <paper-fab icon="add" on-tap="handleNew"></paper-fab>
    `;
  }

  static get properties() {
    return {
      organizations: {
        type: Array,
        // statePath: selectOrganizations,
      },
      organizationsError: {
        // statePath: 'organizations.organizationsError'
      }
    };
  }

  // connectedCallback() {
  //   super.connectedCallback();
  //   this.dispatch(fetchOrganizations());
  // }

  // handleNew() {
  //   window.history.pushState({}, null, '/organizations/new');
  //   window.dispatchEvent(new CustomEvent('location-changed'));
  // }
}

customElements.define('feedback-dashboard', FeedbackDashboard);
