import { ObservableElement, classnames } from '../utils';

class Page extends ObservableElement {
  static get boundAttributes() {
    return ['showNavToggle', 'logo', 'topNav', 'toolbar', 'avatar', 'isNavOpen', 'sidebar'];
  }

  constructor() {
    super();
    this.onToggle = () => {
      console.log('toggle');
      this.setAttribute('isNavOpen', !this.isNavOpen);
      this.innerHTML = this.render();
    };
  }

  get isNavOpen() {
    return this.getAttribute('isNavOpen') !== null
      ? this.getAttribute('isNavOpen')
      : true;
  }

  get showNavToggle() {
    return this.getAttribute('showNavToggle') || true;
  }

  get logo() {
    return this.getAttribute('logo') || 'PatternFly Vanilla';
  }

  get toolbar() {
    return this.getAttribute('toolbar') || '';
  }

  get sidebar() {
    return this.getAttribute('sidebar') || 'My sidebar';
  }

  connectedCallback() {
    console.log('connected');
    super.connectedCallback();
    this.querySelector('#toggle-button').addEventListener('click', this.onToggle);
  }

  disconnectedCallback() {
    console.log('disconnected');
    super.disconnectedCallback();
    this.querySelector('#toggle-button').removeEventListener('click', this.onToggle);
  }

  renderHeader() {
    return `
    <header role="banner" class="pf-c-page__header">
      ${(this.showNavToggle || this.logo) ? `
      <div class="pf-c-page__header-brand">
        ${this.showNavToggle ? `
        <div class="pf-c-page__header-brand-toggle">
          <button id="toggle-button" class="pf-c-button pf-m-primary" type="button">Toggle</button>
        </div>
        `: ''}
        ${this.logo ? `
        <a class="pf-c-page__header-brand-link">${this.logo}</a>
        `: ''}
      </div>
      `: ''}
      ${this.topNav ? `
      <div class="pf-c-page__header-nav">${this.topNav}</div>
      `: ''}
      ${(this.toolbar || this.avatar) ? `
      <div class="pf-c-page__header-tools">
        ${this.toolbar ? this.toolbar : ''}
        ${this.avatar ? this.avatar : ''}
      </div>
      `: ''}
    </header>
  `;
  }

  renderSidebar() {
    return `
      <div id="page-sidebar" class="${classnames(
          'pf-c-page__sidebar',
          this.isNavOpen && 'pf-m-expanded',
          !this.isNavOpen && 'pf-m-collapsed'
        )}">
        <div class="pf-c-page__sidebar-body">${this.sidebar}</div>
      </div>
    `;
  }

  render() {
    console.log('render', this.isNavOpen);
    return `
      <div class="pf-c-page">
        ${this.renderHeader()}
        ${this.isNavOpen ? this.renderSidebar() : ''}
        <main role="main" class="pf-c-page__main" tabindex="-1">
          ${this.childContent}
        </main>
      </div>
    `;
  }
}

customElements.define('pf-page', Page);
