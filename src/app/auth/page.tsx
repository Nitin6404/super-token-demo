"use client";

import React, { useEffect, useState } from "react";
import "@/app/config/supertokens-init";
import { AuthPage } from "supertokens-auth-react/ui";
import { EmailPasswordPreBuiltUI } from "supertokens-auth-react/recipe/emailpassword/prebuiltui";

export const dynamic = "force-dynamic";

export default function AuthPageWrapper() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) return null;

  return <AuthPage preBuiltUIList={[EmailPasswordPreBuiltUI]} />;
}
