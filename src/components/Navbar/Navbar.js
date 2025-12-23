import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, Logo } from "react-mui-sidebar";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
// import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import SportsHandballOutlinedIcon from '@mui/icons-material/SportsHandballOutlined';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
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
        <Logo component={Link} to="/" img={logo}>
          My App
        </Logo>
        <div className="logo-divider" />
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
            icon={<NewspaperOutlinedIcon />}
            component={Link}
            link="/LatestNews"
            isSelected={location.pathname === "/LatestNews"}
          >
            Latest News
          </MenuItem>

          <MenuItem
            icon={<HowToRegOutlinedIcon />}
            component={Link}
            link="/Registration"
            isSelected={location.pathname === "/Registration"}
          >
            Registration
          </MenuItem>

          <MenuItem
            icon={<SportsHandballOutlinedIcon />}
            component={Link}
            link="/Participate"
            isSelected={location.pathname === "/Participate"}
          >
            Participate
          </MenuItem>

          <MenuItem
            icon={<FormatListNumberedOutlinedIcon />}
            component={Link}
            link="/TaskDescription"
            isSelected={location.pathname === "/TaskDescription"}
          >
            Task Description
          </MenuItem>

          <MenuItem
            icon={<StorageOutlinedIcon />}
            component={Link}
            link="/DataSet"
            isSelected={location.pathname === "/DataSet"}
          >
            Data Set
          </MenuItem>

          <MenuItem
            icon={<QueryStatsOutlinedIcon />}
            component={Link}
            link="/Assessment"
            isSelected={location.pathname === "/Assessment"}
          >
            Assessment
          </MenuItem>

          <MenuItem
            icon={<BackupOutlinedIcon />}
            component={Link}
            link="/Submission"
            isSelected={location.pathname === "/Submission"}
          >
            Submission
          </MenuItem>

          <MenuItem
            icon={<GavelOutlinedIcon />}
            component={Link}
            link="/ChallengeRulesPolicies"
            isSelected={location.pathname === "/ChallengeRulesPolicies"}
          >
            Challenge Rules & Policies
          </MenuItem>

          <MenuItem
            icon={<LeaderboardOutlinedIcon />}
            component={Link}
            link="/Leaderboard"
            isSelected={location.pathname === "/Leaderboard"}
          >
            Leaderboard
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
          <Link to="/" className="topbar-logo-wrapper">
            <img src={logoside} alt="logo" />
          </Link>
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
