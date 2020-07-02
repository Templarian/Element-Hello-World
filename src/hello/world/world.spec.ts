import { selectComponent } from '@mdi/element';

import './world';
import HelloWorld from './world';

const HELLO_WORLD = 'hello-world';

describe('hello-world', () => {

  const DEFAULT_MESSAGE = 'None';

  beforeEach(() => {
    var c = document.createElement(HELLO_WORLD);
    document.body.appendChild(c);
  });

  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('should be registered', () => {
    expect(customElements.get(HELLO_WORLD)).toBeDefined();
  });

  it('should only expose known props', () => {
    const { symbols } = customElements.get(HELLO_WORLD);
    const props = Object.keys(symbols);
    expect(props.length).toBe(1);
    expect(props).toContain('message');
  });

  it('should default message', () => {
    const component = selectComponent<HelloWorld>(HELLO_WORLD);
    const { $message } = component;
    expect($message.innerText).toBe(DEFAULT_MESSAGE);
  });

  it('should set message to "Hello World!"', async () => {
    const component = selectComponent<HelloWorld>(HELLO_WORLD);
    const { $message } = component;

    const message = 'Hello World!';
    component.message = message;
    expect($message.innerText).toBe(message);
  });

});
