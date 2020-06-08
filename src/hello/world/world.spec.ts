import './world';
import HelloWorld from './world';

const HELLO_WORLD = 'hello-world';

function selectComponent<T>(tag: string): T {
  return document.querySelector(tag) as any;
}

function selectPart<T>(component, name: string): T {
  return component!.shadowRoot!.querySelector(`[part=${name}]`) as any;
}

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
    var component = selectComponent<HelloWorld>(HELLO_WORLD);
    var $message = selectPart<HTMLSpanElement>(component, 'message');
    expect($message!.innerText).toBe(DEFAULT_MESSAGE);
  });

  it('should set message to "Hello World!"', async () => {
    var message = 'Hello World!';
    var component = selectComponent<HelloWorld>(HELLO_WORLD);
    component.message = message;
    var $message = selectPart<HTMLSpanElement>(component, 'message');
    expect($message!.innerText).toBe(message);
  });

});
