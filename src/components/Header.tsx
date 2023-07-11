"use client";
import { createContext, useContext, useState } from "react";

import { signIn, signOut, useSession } from "next-auth/react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { AccountCircle, Brightness7, Brightness4 } from "@mui/icons-material";
import Link from "next/link";
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

  return (
    <AppBar position="fixed">
      <Toolbar>
        {/* <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton> */}
        <Link href="/" style={{ flexGrow: 1 }}>
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
          <Button color="inherit" onClick={() => signIn()}>
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
