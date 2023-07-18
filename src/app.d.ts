// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
type Chrome = Record<string, unknown> | boolean;

declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }

  interface Window {
    chrome: Chrome;
  }
}

export {};
