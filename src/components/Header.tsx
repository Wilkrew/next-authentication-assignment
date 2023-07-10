"use client";
import { useState } from "react";

import { signOut, useSession } from "next-auth/react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { AccountCircle } from "@mui/icons-material";
import Link from "next/link";

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    handleClose();
    signOut({ callbackUrl: "/" });
  };

  const handleRoute = (path: string) => {
    handleClose();
    router.push(path);
  };

  return (
    <header>
      <AppBar position="fixed">
        <Toolbar>
          {/* <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton> */}
          <Link href="/" style={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              Galaxy Casino
            </Typography>
          </Link>
          {session?.user ? (
            <>
              {session.user.image ? (
                <Avatar
                  alt={session.user.name ? session.user.name : "User"}
                  src={session.user.image}
                  onClick={() => router.push("/profile")}
                />
              ) : (
                <>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                    // onClick={() => router.push("/profile")}
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={() => handleRoute("/profile")}>Profile</MenuItem>
                    <MenuItem onClick={() => handleSignOut()}>Sign out</MenuItem>
                  </Menu>
                </>
              )}
            </>
          ) : (
            <Button color="inherit" onClick={() => router.push("/login")}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </header>
  );
}
