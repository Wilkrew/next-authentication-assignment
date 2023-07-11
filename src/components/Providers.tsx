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
          MuiButton: {
            variants: [
              {
                props: { variant: "contained" },
                style: {
                  borderRadius: "20px",
                  padding: "12px 24px",
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
