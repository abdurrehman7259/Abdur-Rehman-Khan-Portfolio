"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Lock } from "lucide-react";
import { ADMIN_EMAIL, auth, isFirebaseConfigured } from "@/lib/firebase";
import { useAuth } from "@/lib/useAuth";
import { BlogHeader } from "@/components/blog/BlogHeader";
import { SetupNotice } from "@/components/blog/SetupNotice";

export default function AdminLogin() {
  const router = useRouter();
  const { isAdmin, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (isAdmin) router.replace("/admin");
  }, [isAdmin, router]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      const cred = await signInWithEmailAndPassword(auth, email.trim(), password);
      if (cred.user.email?.toLowerCase() !== ADMIN_EMAIL) {
        await signOut(auth);
        setError("This account is not authorised as admin.");
      }
    } catch {
      setError("Invalid email or password.");
    } finally {
      setBusy(false);
    }
  }

  const input =
    "w-full rounded-lg border border-cyber-border bg-cyber-card px-3 py-2 text-sm text-white outline-none focus:border-cyber-accent";

  return (
    <div className="cyber-grid-bg min-h-screen">
      <BlogHeader />
      <main className="mx-auto max-w-md px-4 py-16">
        {!isFirebaseConfigured ? (
          <SetupNotice />
        ) : (
          <form onSubmit={onSubmit} className="glass-panel space-y-4 rounded-xl p-6">
            <div className="flex items-center gap-2 text-white">
              <Lock className="h-5 w-5 text-cyber-accent" />
              <h1 className="text-xl font-semibold">Admin login</h1>
            </div>
            <input className={input} type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="username" />
            <input className={input} type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password" />
            {error && <p className="text-sm text-cyber-red">{error}</p>}
            <button
              disabled={busy || loading}
              className="w-full rounded-lg bg-cyber-accent py-2 font-mono text-sm font-semibold text-cyber-bg transition hover:bg-cyber-accentHover disabled:opacity-50"
            >
              {busy ? "Signing in..." : "Sign in"}
            </button>
          </form>
        )}
      </main>
    </div>
  );
}
