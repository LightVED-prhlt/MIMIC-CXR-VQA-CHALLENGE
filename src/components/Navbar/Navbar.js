import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, Logo } from "react-mui-sidebar";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MenuIcon from "@mui/icons-material/Menu";

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

  const SidebarContent = (
    <Sidebar width="270px">
      <Logo
        component={Link}
        href="/"
        img="https://adminmart.com/wp-content/uploads/2024/03/logo-admin-mart-news.png"
      >
        My App
      </Logo>

      <Menu subHeading="MAIN">
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
  );

  return (
    <>
      {/* Burger button (mobile only) */}
      {isMobile && !open && (
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            position: "fixed",
            top: 16,
            left: 16,
            zIndex: 1300,
          }}
        >
          <MenuIcon />
        </IconButton>
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
