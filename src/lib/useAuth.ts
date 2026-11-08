"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { ADMIN_EMAIL, auth } from "./firebase";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
  }, []);

  // UI gate only; Firestore rules are the real enforcement.
  const isAdmin = Boolean(user && user.email?.toLowerCase() === ADMIN_EMAIL);
  return { user, loading, isAdmin };
}
