import '@testing-library/jest-dom';
// Prevents Test error while rendering App component 
// caused by <ScrollToTop> component..
const noop = () => {};
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });