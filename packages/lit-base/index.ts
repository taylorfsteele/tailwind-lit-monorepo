import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('base-button')
export class BaseButton extends LitElement {
  render() {
    return html` <button class="text-red-400 p-4"><slot></slot></button> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'base-button': BaseButton;
  }
}
