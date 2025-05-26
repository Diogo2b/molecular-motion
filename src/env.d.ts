/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
export {};

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}
