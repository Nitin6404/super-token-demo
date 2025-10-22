// src/app/config/backend.ts
import SuperTokens from "supertokens-node";
import EmailPassword from "supertokens-node/recipe/emailpassword";
import Session from "supertokens-node/recipe/session";
import { TypeInput } from "supertokens-node/types";

export const backendConfig = (): TypeInput => {
  const apiDomain = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_API_DOMAIN || "http://localhost:3000";

  const websiteDomain = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : process.env.NEXT_PUBLIC_WEBSITE_DOMAIN || "http://localhost:3000";

  return {
    appInfo: {
      appName: "SuperTokens Vercel Demo",
      apiDomain,
      websiteDomain,
      apiBasePath: "/api/auth",
      websiteBasePath: "/auth",
    },
    supertokens: {
      connectionURI:
        process.env.SUPERTOKENS_CONNECTION_URI || "https://try.supertokens.io",
      apiKey: process.env.SUPERTOKENS_API_KEY,
    },
    recipeList: [
      EmailPassword.init(),
      Session.init({
        cookieSameSite: "lax",
        cookieSecure: process.env.NODE_ENV === "production",
      }),
    ],
  };
};

export function ensureSuperTokensInit() {
  try {
    SuperTokens.init(backendConfig());
  } catch (err: unknown) {
    const msg = String((err as Error).message || "");
    if (!/already initiali/i.test(msg)) {
      throw err;
    }
  }
}
