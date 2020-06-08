import './app';
import HelloApp from './app';

const HELLO_APP = 'hello-app';

function selectComponent<T>(tag: string): T {
  return document.querySelector(tag) as any;
}

function selectPart<T>(component, name: string): T {
  return component!.shadowRoot!.querySelector(`[part=${name}]`) as any;
}

describe('hello-app', () => {

  beforeEach(() => {
    var c = document.createElement(HELLO_APP);
    document.body.appendChild(c);
  });

  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it('should be registered', () => {
    expect(customElements.get(HELLO_APP)).toBeDefined();
  });

  it('should only expose known props', () => {
    const { symbols } = customElements.get(HELLO_APP);
    const props = Object.keys(symbols);
    expect(props.length).toBe(0);
    // Ex: expect(props).toContain('attribute');
  });

});
