"use client";

import { useEffect, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { isFirebaseConfigured } from "@/lib/firebase";
import { useAuth } from "@/lib/useAuth";
import { SetupNotice } from "./SetupNotice";

export function AdminGuard({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { isAdmin, loading } = useAuth();

  useEffect(() => {
    if (isFirebaseConfigured && !loading && !isAdmin) router.replace("/admin/login");
  }, [isAdmin, loading, router]);

  if (!isFirebaseConfigured) return <SetupNotice />;
  if (loading || !isAdmin) return <p className="font-mono text-cyber-muted">Checking access...</p>;
  return <>{children}</>;
}
