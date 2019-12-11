import { html, LitElement, property, customElement } from 'lit-element';

@customElement('pf-button')
export class Button extends LitElement {
  @property() variant = 'primary';

  protected createRenderRoot() {
    return this.attachShadow({ mode: 'open' });
  }

  protected render() {
    return html`
      <button class="pf-c-button pf-m-${this.variant}">
        heya
      </button>`;
  }
}
