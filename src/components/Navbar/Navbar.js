import React from "react";

import { Sidebar, Menu, MenuItem, Logo } from "react-mui-sidebar";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  return (
    <Sidebar width="270px">
      {/* Logo */}
      <Logo
        component={Link}
        href="/"
        img="https://adminmart.com/wp-content/uploads/2024/03/logo-admin-mart-news.png"
      >
        My App
      </Logo>

      {/* MAIN MENU */}
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
}

export default Navbar;
