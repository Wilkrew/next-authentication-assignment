"use client";

import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

import styles from "@/app/page.module.css";

export default function Profile() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signin?callbackUrl=/profile");
    },
  });

  return (
    <main className={`${styles.main} ${styles.center}`}>
      {session?.user?.name && session.user.email && (
        <div>
          <div>👋 Welcome {session.user.name}!</div>
          <div>{session.user.email}</div>
        </div>
      )}
    </main>
  );
}
