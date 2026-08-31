/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly YAHOO_SMTP_USER?: string;
  readonly YAHOO_SMTP_APP_PASSWORD?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
