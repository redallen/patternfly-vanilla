import { html, css, LitElement, property, customElement } from 'lit-element';
import cssBase from './base.css';
import cssString from './button.css';

@customElement('pf-button')
export class Button extends LitElement {
  @property() variant = 'primary';
  @property() label = 'label';

  // static get styles() {
  //   const res = css`
  //   `;
  //   console.log('res', res)
  //   return res;
  // }

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
