import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@tailwind-lit-npm-monorepo/lit-base';
import { BaseElement } from '@tailwind-lit-npm-monorepo/lit-base';
import style from './index.css?inline';

export class AnotherBaseElement extends BaseElement {
  static styles = unsafeCSS(style);
}

@customElement('my-element')
export class MyElement extends AnotherBaseElement {
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
