"use client";

import { SessionProvider } from "next-auth/react";

import { ThemeOptions, ThemeProvider, createTheme } from "@mui/material";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#ca4ff1",
    },
    secondary: {
      main: "#00eef3",
    },
    background: { paper: "#642567" },
  },
};

const theme = createTheme(themeOptions);

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
}
