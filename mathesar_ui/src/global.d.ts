/// <reference types="svelte" />
/// <reference types="vite/client" />

declare module '*.mdx' {
  const value: string;
  export default value;
}

interface Window {
  Mathesar:
    | {
        translations: Record<Locales, Translations> | undefined;
      }
    | undefined;
}
