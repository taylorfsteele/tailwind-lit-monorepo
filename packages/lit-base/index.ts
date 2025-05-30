import { html, LitElement, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import style from './index.css?inline';

export class BaseElement extends LitElement {
  static styles = unsafeCSS(style);
}

@customElement('base-button')
export class BaseButton extends BaseElement {
  render() {
    return html` <button class="text-red-400 p-4"><slot></slot></button> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'base-button': BaseButton;
  }
}
