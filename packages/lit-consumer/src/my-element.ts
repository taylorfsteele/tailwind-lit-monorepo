import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@tailwind-lit-npm-monorepo/lit-base';
import style from './index.css?inline';

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = unsafeCSS(style);

  render() {
    return html`
      <div class="text-blue-500">
        Hello from lit
        <base-button>I'm imported from the base package and should be red</base-button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
