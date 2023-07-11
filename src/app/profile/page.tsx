"use client";

import { useSession } from "next-auth/react";

import styles from "@/app/page.module.css";
import {
  Avatar,
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { AccountCircle, Email } from "@mui/icons-material";

export default function Profile() {
  const { data: session } = useSession({
    required: true,
  });

  return (
    <main className={`${styles.main} `}>
      {session?.user?.name && session.user.email && (
        <Box
          sx={{
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          }}
        >
          <Box sx={{}}>
            <Typography
              sx={{
                fontFamily: "Space Mono",
                fontWeight: "700",
                fontStyle: "italic",
                marginBottom: "24px",
              }}
              variant="h5"
              component="div"
            >
              👋 Greetings {session.user.name}!
            </Typography>
          </Box>
          <Box>
            {/* {session.user.image ? (
              <Avatar
                alt={session.user.name ? session.user.name : "User"}
                src={session.user.image}
              />
            ) : (
              <IconButton size="large" aria-label="account of current user" color="inherit">
                <AccountCircle />
              </IconButton>
            )} */}
            <Typography
              sx={{
                fontFamily: "Space Mono",
                fontWeight: "400",
                fontStyle: "",
              }}
              variant="h5"
              component="div"
            >
              Profile
            </Typography>
            <List>
              <ListItem sx={{ bgcolor: "primary.main", color: "#121212", borderRadius: "15px" }}>
                <ListItemIcon color="inherit">
                  <Email color="inherit" />
                </ListItemIcon>
                <ListItemText primary={session.user.email} />
              </ListItem>
            </List>
          </Box>
        </Box>
      )}
    </main>
  );
}
