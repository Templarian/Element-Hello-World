import { Component, Prop, Part } from '@mdi/element';

import template from './world.html';
import style from './world.css';

const DEFAULT_MESSAGE = 'None';

@Component({
  selector: 'hello-world',
  style,
  template
})
export default class HelloWorld extends HTMLElement {
  @Prop() message: string = DEFAULT_MESSAGE;

  @Part() $message: HTMLSpanElement;

  render(changes) {
    if (changes.message) {
      this.$message.innerText = this.message;
    }
  }
}