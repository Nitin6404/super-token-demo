// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>SuperTokens Demo</h1>
      <ul>
        <li><Link href="/auth">Auth UI</Link></li>
        <li><Link href="/protected">Protected (client)</Link></li>
      </ul>
    </main>
  );
}
