import * as React from "react";
import {
  Grid,
  Toolbar,
  Box,
  AppBar,
  IconButton,
  Typography,
  Tooltip,
  Menu,
  MenuItem,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

const settings = ["Dashboard", "Login Now", "Logout"];

export default function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#757ce8" }}>
        <Toolbar>
          <Grid container>
            {/* Menu logo on top right */}
            <Grid item xs={1}>
              <Tooltip title="Menu">
                <IconButton
                  onClick={handleOpenUserMenu}
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Grid>

            <Grid item xs={10} sx={{ textAlign: "center", p: 1 }}>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="https://pepcorns.com/"
                sx={{
                  mr: 2,
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Pepcorns
              </Typography>
            </Grid>

            {/* Account logo on top right */}
            <Grid item xs={1} sx={{ paddingRight: 0 }}>
              <IconButton size="large" edge="end" color="inherit">
                <Tooltip title="Account">
                  <AccountCircle />
                </Tooltip>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
