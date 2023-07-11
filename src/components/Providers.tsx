"use client";

import { SessionProvider } from "next-auth/react";

import { ThemeProvider, createTheme } from "@mui/material";
import { createContext, useMemo, useState } from "react";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          primary: {
            main: "#ca4ff1",
          },
          secondary: {
            main: "#9c27b0",
          },
        },
        components: {
          MuiAppBar: {
            styleOverrides: {
              root: {
                color: "#fcc4ff",
                boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                borderRadius: "0px 0px 20px 20px",
              },
            },
          },
          MuiTypography: {
            variants: [
              {
                props: { variant: "h1" },
                style: {
                  fontFamily: "Space Mono",
                },
              },
              {
                props: { variant: "h2" },
                style: {
                  fontFamily: "Space Mono",
                },
              },
              {
                props: { variant: "h3" },
                style: {
                  fontFamily: "Space Mono",
                },
              },
              {
                props: { variant: "h4" },
                style: {
                  fontFamily: "Space Mono",
                },
              },
              {
                props: { variant: "h5" },
                style: {
                  fontFamily: "Space Mono",
                },
              },
              {
                props: { variant: "h6" },
                style: {
                  fontFamily: "Space Mono",
                },
              },
            ],
          },
          MuiButton: {
            variants: [
              {
                props: { variant: "contained" },
                style: {
                  borderRadius: "20px",
                  padding: "0.75rem 1.5rem",
                },
              },
            ],
          },
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <SessionProvider>{children}</SessionProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
