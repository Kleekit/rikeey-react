import React from "react";
import { Collapse, Divider, Hidden } from "@mui/material";
import CollapseIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import ExpandIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { Link } from "react-router-dom";

export default function FilterTop() {
  const [openSex, setOpenSex] = React.useState(true);

  const handleSexClick = () => {
    setOpenSex(!openSex);
  };

  const [openSize, setOpenSize] = React.useState(true);

  const handleSizeClick = () => {
    setOpenSize(!openSize);
  };

  const [openColor, setOpenColor] = React.useState(true);

  const handleColorClick = () => {
    setOpenColor(!openColor);
  };
  return (
    <div className="filterBarLinks filterTop">
      <div className=" filterBorderBl filterHead px-1 ">
        <div className=" col-7 ">Filter</div>{" "}
        <div className="col-2 cursor-pointer">Clear</div>
      </div>
      <Hidden smDown>
        <Divider className="my-4" />
      </Hidden>
      <div className="menuItem filterBorderBl">
        <div
          className="menuItemHeader link"
          tabIndex="1"
          type="button"
          onClick={handleSexClick}
        >
          <div className="fw-600 ps-2">Sex</div>
          {openSex ? (
            <ExpandIcon className="menuIcon" />
          ) : (
            <CollapseIcon className="menuIcon" />
          )}
        </div>
        <Collapse in={!openSex} timeout="auto" unmountOnExit>
          <div className="menuItemContent ">
            <Link className="contentList link" to="/shop">
              <span>Male</span>
            </Link>
            <Link className="contentList link" to="/shop">
              <span>Female</span>
            </Link>
          </div>
        </Collapse>
      </div>
      <Hidden smDown>
        <Divider className="my-4" />
      </Hidden>
      <div className="menuItem filterBorderBl">
        <div
          className="menuItemHeader link"
          tabIndex="1"
          type="button"
          onClick={handleSizeClick}
        >
          <div className="fw-600 ps-2">Size</div>
          {openSize ? (
            <ExpandIcon className="menuIcon" />
          ) : (
            <CollapseIcon className="menuIcon" />
          )}
        </div>
        <Collapse in={!openSize} timeout="auto" unmountOnExit>
          <div className="menuItemContent ">
            <Link className="contentList link" to="/shop">
              <span>S</span>
            </Link>
            <Link className="contentList link" to="/shop">
              <span>M</span>
            </Link>
            <Link className="contentList link" to="/shop">
              <span>L</span>
            </Link>
            <Link className="contentList link" to="/shop">
              <span>XL</span>
            </Link>
          </div>
        </Collapse>
      </div>
      <Hidden smDown>
        <Divider className="my-4" />
      </Hidden>
      <div className="menuItem filterBorderBl">
        <div
          className="menuItemHeader link"
          tabIndex="1"
          type="button"
          onClick={handleColorClick}
        >
          <div className="fw-600 ps-2">Color</div>
          {openColor ? (
            <ExpandIcon className="menuIcon" />
          ) : (
            <CollapseIcon className="menuIcon" />
          )}
        </div>
        <Collapse in={!openColor} timeout="auto" unmountOnExit>
          <div className="menuItemContent ">
            <Link className="contentList link" to="/shop">
              <span>Blue</span>
            </Link>
            <Link className="contentList link" to="/shop">
              <span>Red</span>
            </Link>
            <Link className="contentList link" to="/shop">
              <span>Yellow</span>
            </Link>
            <Link className="contentList link" to="/shop">
              <span>Black</span>
            </Link>
          </div>
        </Collapse>
      </div>
    </div>
  );
}
