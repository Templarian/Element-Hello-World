import { Component, Part } from '@mdi/element';

import template from './app.html';
import style from './app.css';

@Component({
  selector: 'hello-app',
  style,
  template
})
export default class HelloApp extends HTMLElement {
  @Part() $title: HTMLSpanElement;

  connectedCallback() {
    this.$title.innerText = 'Sample App';
  }

  render(changes) {

  }
}