import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, Logo } from "react-mui-sidebar";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo3.png";
import logoside from "../../assets/logo2.png";
import "./Navbar.css";

import {
  Drawer,
  IconButton,
  useMediaQuery,
  Box,
} from "@mui/material";

import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isMobile = useMediaQuery("(max-width:900px)");
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const SidebarContent = (
    <div className="navbar-container">
      <Sidebar width="270px" showProfile={false}>
        <Logo component={Link} href="/" img={logo}>
          My App
        </Logo>

        <Menu subHeading="">
          <MenuItem
            icon={<CottageOutlinedIcon />}
            component={Link}
            link="/"
            isSelected={location.pathname === "/"}
          >
            Home
          </MenuItem>

          <MenuItem
            icon={<DescriptionOutlinedIcon />}
            component={Link}
            link="/page2"
            isSelected={location.pathname === "/page2"}
          >
            Page 2
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );

  return (
    <>
      {/* Top bar (mobile only, hidden when drawer is open) */}
      {isMobile && !open && (
        <div className="topbar">
          <IconButton onClick={handleOpen}>
            <MenuIcon />
          </IconButton>

          <div
            className="topbar-logo-wrapper"
            onClick={() => (window.location.href = "/")}
          >
            <img src={logoside} alt="logo" />
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      {isMobile ? (
        <Drawer
          open={open}
          onClose={handleClose}
          variant="temporary"
          ModalProps={{ keepMounted: true }}
          onClickCapture={handleClose}
        >
          {SidebarContent}
        </Drawer>
      ) : (
        /* Desktop sidebar */
        <Box sx={{ height: "100vh" }}>
          {SidebarContent}
        </Box>
      )}
    </>
  );
}

export default Navbar;
