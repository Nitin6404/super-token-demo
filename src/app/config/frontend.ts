// src/app/config/frontend.ts
import EmailPasswordReact from "supertokens-auth-react/recipe/emailpassword";
import SessionReact from "supertokens-auth-react/recipe/session";

export const frontendConfig = () => {
  return {
    appInfo: {
      appName: "SuperTokens Vercel Demo",
      apiDomain: process.env.NEXT_PUBLIC_API_DOMAIN || "http://localhost:3000",
      websiteDomain: process.env.NEXT_PUBLIC_WEBSITE_DOMAIN || "http://localhost:3000",
      apiBasePath: "/api/auth",
      websiteBasePath: "/auth",
    },
    recipeList: [
      EmailPasswordReact.init(),
      SessionReact.init(),
    ],
  };
};
