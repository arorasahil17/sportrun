declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    PORT?: string;
    JWT_SECRET: string;
    SERVER_URL: string;
    // Add other environment variables here
  }
}
