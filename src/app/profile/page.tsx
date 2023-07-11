"use client";

import { useSession } from "next-auth/react";

import styles from "@/app/page.module.css";
import { Box, List, ListItem, ListItemText, ListItemIcon, Typography, Paper } from "@mui/material";
import { Email } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

export default function Profile() {
  const { data: session } = useSession({
    required: true,
  });

  const theme = useTheme();

  console.log(theme);

  return (
    <main className={`${styles.main}`}>
      {session?.user?.name && session.user.email && (
        <Box
          sx={{
            padding: "30px",
            borderRadius: "20px",
          }}
          component={Paper}
          elevation={5}
        >
          <Typography
            sx={{
              fontWeight: "700",
              fontStyle: "italic",
              marginBottom: "24px",
            }}
            variant="h5"
            component="div"
          >
            👋 Greetings {session.user.name}!
          </Typography>

          <Typography variant="h5">Profile</Typography>
          <List>
            <ListItem
              sx={{ bgcolor: "primary.main", color: "#fff", borderRadius: "15px" }}
              component={Box}
            >
              <ListItemIcon>
                <Email sx={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText>{session.user.email}</ListItemText>
            </ListItem>
          </List>
        </Box>
      )}
    </main>
  );
}
