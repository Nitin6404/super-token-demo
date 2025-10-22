// src/app/layout.tsx
"use client";
import React from "react";
import SuperTokensReact from "supertokens-auth-react";
import { SuperTokensWrapper } from "supertokens-auth-react";
import { frontendConfig } from "./config/frontend";

if (typeof window !== "undefined" && !(globalThis as any).__supertokens_initialized) {
  SuperTokensReact.init(frontendConfig());
  (globalThis as any).__supertokens_initialized = true;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SuperTokensWrapper>{children}</SuperTokensWrapper>
      </body>
    </html>
  );
}
