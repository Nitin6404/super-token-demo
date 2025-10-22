// src/app/auth/page.tsx
"use client";
import React from "react";
import { AuthPage } from "supertokens-auth-react/ui";
import { EmailPasswordPreBuiltUI } from "supertokens-auth-react/recipe/emailpassword/prebuiltui";

export default function AuthPageWrapper() {
  return <AuthPage preBuiltUIList={[EmailPasswordPreBuiltUI]} />;
}
