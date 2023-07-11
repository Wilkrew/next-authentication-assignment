"use client";

import styles from "@/app/page.module.css";
import { useSession } from "next-auth/react";

import { Box, List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from "@mui/material";
import { Email } from "@mui/icons-material";

export default function Profile() {
  const { data: session } = useSession({
    required: true,
  });

  return (
    <main className={styles.main}>
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
