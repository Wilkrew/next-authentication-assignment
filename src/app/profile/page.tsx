"use client";

import { useSession } from "next-auth/react";
import styles from "@/app/page.module.css";

export default function Profile() {
  const { data: session } = useSession({ required: true });

  return (
    <main className={styles.main}>
      <div>Profile</div>
      {session?.user?.name && session.user.email && (
        <div>
          <div> 👋 Welcome {session.user.name}!</div>
          <div>{session.user.email}</div>
        </div>
      )}
    </main>
  );
}
