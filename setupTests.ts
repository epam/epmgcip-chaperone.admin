window.matchMedia = jest.fn().mockImplementation((query: string) => ({
  addEventListener: jest.fn(),
  addListener: jest.fn(),
  dispatchEvent: jest.fn(),
  matches: false,
  media: query,
  onchange: null,
  removeEventListener: jest.fn(),
  removeListener: jest.fn(),
}));

/* eslint-disable @typescript-eslint/no-empty-function */

window.ResizeObserver = class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
};

/* eslint-enable @typescript-eslint/no-empty-function */

window.HTMLElement.prototype.scrollIntoView = () => {};
