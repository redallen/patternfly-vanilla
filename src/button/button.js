import { ObservableElement, classnames } from '../utils';

class Button extends ObservableElement {
  static get observedAttributes() {
    return ['variant'];
  }

  get variant() {
    return this.getAttribute('variant') || 'primary';
  }

  render() {
    return `
      <button class="${classnames(
        'pf-c-button',
        `pf-m-${this.variant}`
      )}" type="button">
        ${this.childContent}
      </button
    `;
  }
}

customElements.define('pf-button', Button);
