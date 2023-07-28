/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENABLE_LOGGER: 'true' | 'false';
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
