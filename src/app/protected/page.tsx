"use client";
import { useEffect, useState } from "react";
import Session from "supertokens-auth-react/recipe/session";

export default function ProtectedPage() {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const check = async () => {
      try {
        const s = await Session.getAccessTokenPayloadSecurely();
        // If session exists, getUserId from accessToken payload or call protected API.
        setUserId((s as any)?.userId || "signed-in");
      } catch {
        setUserId(null);
      }
    };
    check();
  }, []);

  if (userId === null)
    return (
      <div>
        Not signed in. Go to <a href="/auth">/auth</a>
      </div>
    );
  return <div>Signed in. userId: {String(userId)}</div>;
}
