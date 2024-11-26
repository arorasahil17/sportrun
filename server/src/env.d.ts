declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    PORT?: string;
    JWT_SECRET: string;
    SERVER_URL: string;
    EMAIL_USER: string;
    EMAIL_PASS: string;
    CLIENT_URL: string;
    PAYPAL_CLIENT_ID: string;
    PAYPAL_CLIENT_SECRET: string;
  }
}
