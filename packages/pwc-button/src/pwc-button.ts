import { html, css, unsafeCSS, LitElement, property, customElement } from 'lit-element';
import baseStyles from '@patternfly/pwc-styles/dist/patternfly-base.js';
import buttonStyles from '@patternfly/pwc-styles/dist/components/Button/button.js';

@customElement('pf-button')
export class Button extends LitElement {
  @property() variant = 'primary';
  @property() label = 'label';

  static get styles() {
    const res = css`
    ${unsafeCSS(baseStyles)}
    ${unsafeCSS(buttonStyles)}
    `;
    console.log('res', res)
    return res;
  }

  protected createRenderRoot() {
    return this.attachShadow({ mode: 'open' });
  }

  protected render() {
    return html`
      <button class="pf-c-button pf-m-${this.variant}">
        ${this.label}
      </button>`;
  }
}
