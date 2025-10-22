"use client";

import SuperTokensReact from "supertokens-auth-react";
import { frontendConfig } from "./frontend";

if (typeof window !== "undefined") {
  if (!SuperTokensReact.isRecipeInitialized("emailpassword")) {
    SuperTokensReact.init(frontendConfig());
  }
}
