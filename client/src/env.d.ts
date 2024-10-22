interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  // Add more environment variables here...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
