"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { AccountCircle, Brightness7, Brightness4 } from "@mui/icons-material";

import { ColorModeContext } from "./Providers";

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

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

  const UserMenu = () => {
    return (
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
    );
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Link href="/" style={{ flexGrow: 1 }}>
          {/* TODO: Fix proper logo */}
          <Typography
            sx={{
              fontWeight: "700",
              fontStyle: "italic",
              textShadow: "0.07em 0.07em 0 hsl(200 50% 30%)",
            }}
            variant="h5"
            component="div"
          >
            Galaxy Casino
          </Typography>
        </Link>
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        {session?.user ? (
          <>
            {session.user.image ? (
              <>
                <Avatar
                  alt={session.user.name ? session.user.name : "User"}
                  src={session.user.image}
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                />
                <UserMenu />
              </>
            ) : (
              <>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <UserMenu />
              </>
            )}
          </>
        ) : (
          <Button color="inherit" onClick={() => signIn()}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
