import React from "react";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SubMenu from "./SubMenu";
import { Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [hover, setHover] = useState(false);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <nav className="navbar" onMouseLeave={() => setVisible(false)}>
        <a href="/" className="navbar-logo">
          <img
            src="https://aartisto.com/wp-content/uploads/2020/11/myntra-1200x675.png"
            alt=""
            width={50}
          />
        </a>
        <div className="navbar-menu">
          <a
            href="#"
            className="navbar-menu-item"
            onMouseEnter={() => {
              setHover(true);
              setVisible(true);
            }}
            onMouseLeave={() => setHover(false)}
          >
            Men
          </a>
          <a
            href="#"
            className="navbar-menu-item"
            onMouseEnter={() => {
              setHover(true);
              setVisible(true);
            }}
            onMouseLeave={() => setHover(false)}
          >
            Women
          </a>
          <a
            href="#"
            className="navbar-menu-item"
            onMouseEnter={() => {
              setHover(true);
              setVisible(true);
            }}
            onMouseLeave={() => setHover(false)}
          >
            Kids
          </a>
          <a
            href="#"
            className="navbar-menu-item"
            onMouseEnter={() => {
              setHover(true);
              setVisible(true);
            }}
            onMouseLeave={() => setHover(false)}
          >
            Home &amp; Living
          </a>
          <a
            href="#"
            className="navbar-menu-item"
            onMouseEnter={() => {
              setHover(true);
              setVisible(true);
            }}
            onMouseLeave={() => setHover(false)}
          >
            Beauty
          </a>
          <a href="#" className="navbar-menu-item">
            Studio
          </a>
        </div>

        <div className="navbar-search">
          <i className="fas fa-search navbar-search-icon"></i>
          <input
            type="text"
            className="navbar-search-input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="navbar-icons">
          <a
            href="#"
            className="navbar-icon"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <PersonOutlineOutlinedIcon />
            <>Profile</>
          </a>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                navigate("/login");
              }}
            >
              Sign In
            </MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
          <a href="#" className="navbar-icon">
            <FavoriteBorderOutlinedIcon />
            <>Wishlist</>
          </a>
          <a href="#" className="navbar-icon">
            <ShoppingBagOutlinedIcon />
            <>Bag</>
          </a>
        </div>
        {<SubMenu visible={visible} hover={hover} setVisible={setVisible} />}
      </nav>
    </>
  );
};

export default Header;
