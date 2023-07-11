"use client";

import { Button } from "@mui/material";
import { signIn, useSession } from "next-auth/react";

export default function StartButton() {
  const { data: session } = useSession();

  return (
    <>
      {session?.user ? (
        <Button variant="contained" onClick={() => console.log("Route to main content")}>
          Start your adventure
        </Button>
      ) : (
        <Button variant="contained" onClick={() => signIn()}>
          Start your adventure
        </Button>
      )}
    </>
  );
}
