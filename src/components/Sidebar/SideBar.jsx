import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import {
  Button,
  Collapse,
  Drawer,
  Hidden,
  InputBase,
  List,
  ListItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/CloseRounded";
import Notifications from "@mui/icons-material/NotificationsNoneRounded";
import CollapseIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import ExpandIcon from "@mui/icons-material/KeyboardArrowRightRounded";
// import Divider from "@mui/material/Divider";

const useStyles = makeStyles({
  largeIcon: {
    fontSize: "3.5rem",
  },
  drawer: {
    // "& > .MuiBackdrop-root": {
    //   top: "10rem !important",
    // },
    "& > .MuiDrawer-paperAnchorRight": {
      left: 0,
      // top: "10rem !important",
      boxShadow: "0 0.1rem 0.4rem rgb(0 0 0 .1)",
      background: "rgba(139, 181, 178, 1)",
      color: "#fff",
      padding: 0,
      // height: "calc(100% - 10rem)",
      height: "100%",
      "& ul": {
        padding: 0,
        width: "100% !important",
        height: "100%",
        position: "relative",
        "& .navIcon": {
          fontSize: "2.5rem",
          color: "#fff",
        },
        "& .menuIcon": {
          fontSize: "3rem",
          color: "#fff",
        },
        "& .mCIcon": {
          fontSize: "2.5rem",
          color: "#fff",
          marginRight: "3rem",
        },
        // "& .navigationContainer": {},
        "& .menuContainer": {
          fontSize: "1.7rem",
          marginTop: "2.8rem",
          marginRight: "-2.8rem",
          paddingBottom: "3.5rem",
        },
        "& .menuItem": {
          background: "inherit",
          color: "inherit",
          fontSize: "initial",
          borderRadius: "unset",
          boxShadow: "none",
          marginBottom: "4.1rem",
        },
        "& .menuItemHeader": {
          fontSize: "1.7rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontWeight: 600,
          padding: "1rem",
          paddingRight: "3rem",
        },
        "& .menuItemContent": {
          fontSize: "1.5rem",
          fontWeight: 400,
          paddingTop: ".5rem",
          paddingLeft: "1.8rem",
        },
        "& .contentList": {
          marginBottom: "2rem",
          padding: "1.1rem",
          display: "block",
        },
        "& .link:focus-within": {
          backgroundColor: "rgba(124, 163, 160, 1) !important",
        },
        "& .sidebarBottom": {
          marginTop: "8rem",
          marginBottom: 0,
        },
        "& .searchBar": {
          marginTop: "2.8rem",
          padding: "0.5rem 2.2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "0.01rem solid #fff",
          borderRadius: "8rem",
          "& .searchInput": { fontSize: "1.7rem", color: "inherit" },
          "& .searchIcon": { width: "2.6rem", height: "2.6rem", color: "#fff" },
        },
        "& .mTopMenu": {
          marginTop: "3.5rem",
        },
      },
      "& ul > li": {
        padding: "0 3rem",
        height: "100%",
        display: "block",
      },
    },
  },
});

export default function SideBar({ sidebarType }) {
  const classes = useStyles();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [openLearn, setOpenLearn] = React.useState(true);

  const handleLearnClick = () => {
    setOpenLearn(!openLearn);
  };

  const [openProfile, setOpenProfile] = React.useState(true);

  const handleProfileClick = () => {
    setOpenProfile(!openProfile);
  };

  return (
    <Hidden smUp>
      <MenuRoundedIcon
        className={classes.largeIcon}
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      />
      <Drawer
        anchor={"right"}
        open={isDrawerOpen}
        className={classes.drawer}
        // onClose={toggleDrawer(anchor, false)}
      >
        <List classes={classes.ulStyle}>
          <ListItem
            style={{
              top: 0,
              zIndex: 100,
              height: "fit-content",
              position: "sticky",
              background: "rgba(139, 181, 178, 1)",
              paddingTop: "3rem",
              paddingBottom: "2rem",
            }}
          >
            <div className="navigationContainer d-flex justify-content-between align-items-center">
              <Notifications className="navIcon" />
              <CloseIcon
                className="navIcon"
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              />
            </div>
            <div></div>
          </ListItem>
          <ListItem>
            <div className=" searchBar" component="form">
              <InputBase
                className="searchInput w-100"
                placeholder="Search for Courses or Category"
              />
              <Button className="customButton">
                <SearchIcon className="searchIcon" />
              </Button>
            </div>
            <div className="menuContainer">
              <div className="menuItem">
                <div
                  className="menuItemHeader link"
                  tabIndex="1"
                  type="button"
                  onClick={handleLearnClick}
                >
                  <span>Learn</span>
                  {openLearn ? (
                    <ExpandIcon className="menuIcon" />
                  ) : (
                    <CollapseIcon className="menuIcon" />
                  )}
                </div>
                <Collapse in={!openLearn} timeout="auto" unmountOnExit>
                  <div className="menuItemContent ">
                    <Link className="contentList link" to="/404">
                      Blog
                    </Link>
                    <Link
                      className="contentList link"
                      to="/masterclass/dashboard"
                    >
                      Masterclass
                    </Link>
                    <Link
                      className="contentList mb-0 link"
                      to="/masterclass/becometutor"
                    >
                      Become a Tutor
                    </Link>
                  </div>
                </Collapse>
              </div>
              <div className="menuItem">
                <Link className="menuItemHeader link" to="/">
                  Market
                </Link>
              </div>
              <div className="menuItem">
                <Link className="menuItemHeader link" to="/giftCard">
                  Gift Card
                </Link>
              </div>
              <div className="menuItem">
                <Link className="menuItemHeader link" to="/404">
                  Affiliate
                </Link>
              </div>
              <div className="menuItem mb-0">
                <div
                  className="menuItemHeader link"
                  tabIndex="1"
                  type="button"
                  onClick={handleProfileClick}
                >
                  <span>Profile</span>
                  {openProfile ? (
                    <ExpandIcon className="menuIcon" />
                  ) : (
                    <CollapseIcon className="menuIcon" />
                  )}
                </div>
                <Collapse in={!openProfile} timeout="auto" unmountOnExit>
                  <div className="menuItemContent ">
                    <Link className="contentList link" to="/404">
                      My Profile
                    </Link>
                    <Link className="contentList link" to="/404">
                      Ticket
                    </Link>
                    <Link className="contentList mb-0 link" to="/404">
                      Settings
                    </Link>
                  </div>
                </Collapse>
              </div>
            </div>
          </ListItem>
        </List>
      </Drawer>
    </Hidden>
  );
}

// function AuthSideBar() {
//   const [openLearn, setOpenLearn] = React.useState(true);

//   const handleLearnClick = () => {
//     setOpenLearn(!openLearn);
//   };

//   const [openProfile, setOpenProfile] = React.useState(true);

//   const handleProfileClick = () => {
//     setOpenProfile(!openProfile);
//   };

//   return (
//     <List>
//       <ListItem>
//         <div className="menuContainer">
//           <div className="menuItem">
//             <div
//               className="menuItemHeader link"
//               tabIndex="1"
//               type="button"
//               onClick={handleLearnClick}
//             >
//               <span>Learn</span>
//               {openLearn ? (
//                 <ExpandIcon className="menuIcon" />
//               ) : (
//                 <CollapseIcon className="menuIcon" />
//               )}
//             </div>
//             <Collapse in={!openLearn} timeout="auto" unmountOnExit>
//               <div className="menuItemContent ">
//                 <Link className="contentList link" to="/404">
//                   Blog
//                 </Link>
//                 <Link className="contentList link" to="/masterclass/dashboard">
//                   Masterclass
//                 </Link>
//                 <Link
//                   className="contentList mb-0 link"
//                   to="/masterclass/becometutor"
//                 >
//                   Become a Tutor
//                 </Link>
//               </div>
//             </Collapse>
//           </div>
//           <div className="menuItem">
//             <Link className="menuItemHeader link" to="/">
//               Market
//             </Link>
//           </div>
//           <div className="menuItem">
//             <Link className="menuItemHeader link" to="/giftCard">
//               Gift Card
//             </Link>
//           </div>
//           <div className="menuItem">
//             <Link className="menuItemHeader link" to="/404">
//               Affiliate
//             </Link>
//           </div>
//           <div className="menuItem mb-0">
//             <div
//               className="menuItemHeader link"
//               tabIndex="1"
//               type="button"
//               onClick={handleProfileClick}
//             >
//               <span>Profile</span>
//               {openProfile ? (
//                 <ExpandIcon className="menuIcon" />
//               ) : (
//                 <CollapseIcon className="menuIcon" />
//               )}
//             </div>
//             <Collapse in={!openProfile} timeout="auto" unmountOnExit>
//               <div className="menuItemContent ">
//                 <Link className="contentList link" to="/404">
//                   My Profile
//                 </Link>
//                 <Link className="contentList link" to="/404">
//                   Ticket
//                 </Link>
//                 <Link className="contentList mb-0 link" to="/404">
//                   Settings
//                 </Link>
//               </div>
//             </Collapse>
//           </div>
//         </div>
//       </ListItem>
//       <ListItem
//         style={{
//           zIndex: 100,
//           height: "fit-content",
//           position: "sticky",
//           bottom: 0,
//           background: "rgba(139, 181, 178, 1)",
//           paddingTop: "1.5rem",
//           paddingBottom: "3.5rem",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <div className="menuItem my-0">
//           <Link className="menuItemHeader link" to="/">
//             Sign In
//           </Link>
//         </div>
//         <div className="menuItem my-0">
//           <Link className="menuItemHeader link" to="/">
//             Sign Out
//           </Link>
//         </div>
//       </ListItem>
//     </List>
//   );
// }

// function MainSideBar() {
//   const [openLearn, setOpenLearn] = React.useState(true);

//   const handleLearnClick = () => {
//     setOpenLearn(!openLearn);
//   };

//   const [openDashboard, setOpenDashboard] = React.useState(true);

//   const handleDashboardClick = () => {
//     setOpenDashboard(!openDashboard);
//   };

//   const [openMasterclass, setOpenMasterclass] = React.useState(true);

//   const handleMasterclassClick = () => {
//     setOpenMasterclass(!openMasterclass);
//   };

//   const [openProfile, setOpenProfile] = React.useState(true);

//   const handleProfileClick = () => {
//     setOpenProfile(!openProfile);
//   };

//   return (
//     <ListItem>
//       <div className="menuContainer">
//         <div className="menuItem">
//           <div
//             className="menuItemHeader link"
//             tabIndex="1"
//             type="button"
//             onClick={handleLearnClick}
//           >
//             <span>Learn</span>
//             {openLearn ? (
//               <ExpandIcon className="menuIcon" />
//             ) : (
//               <CollapseIcon className="menuIcon" />
//             )}
//           </div>
//           <Collapse in={!openLearn} timeout="auto" unmountOnExit>
//             <div className="menuItemContent ">
//               <Link className="contentList link" to="/404">
//                 Blog
//               </Link>
//               <Link className="contentList link" to="/masterclass/dashboard">
//                 Masterclass
//               </Link>
//               <Link
//                 className="contentList mb-0 link"
//                 to="/masterclass/becometutor"
//               >
//                 Become a Tutor
//               </Link>
//             </div>
//           </Collapse>
//         </div>
//         <div className="menuItem">
//           <Link className="menuItemHeader link" to="/">
//             Market
//           </Link>
//         </div>
//         <div className="menuItem">
//           <div
//             className="menuItemHeader link"
//             tabIndex="1"
//             type="button"
//             onClick={handleDashboardClick}
//           >
//             <span>Dashboard</span>
//             {openDashboard ? (
//               <ExpandIcon className="menuIcon" />
//             ) : (
//               <CollapseIcon className="menuIcon" />
//             )}
//           </div>
//           <Collapse in={!openDashboard} timeout="auto" unmountOnExit>
//             <div className="menuItemContent ">
//               <Link className="contentList link" to="/affiliate/dashboard">
//                 Affiliate Dashboard
//               </Link>
//               <Link className="contentList link" to="/market/dashboard">
//                 Market Dashboard
//               </Link>
//               <div
//                 className="contentList d-flex justify-content-between align-items-center link"
//                 tabIndex="1"
//                 type="button"
//                 onClick={handleMasterclassClick}
//               >
//                 <span>Masterclass Dashboard</span>
//                 {openMasterclass ? (
//                   <ExpandIcon className="mCIcon" />
//                 ) : (
//                   <CollapseIcon className="mCIcon" />
//                 )}
//               </div>
//               <Collapse in={!openMasterclass} timeout="auto" unmountOnExit>
//                 <div className="menuItemContent ">
//                   <Link
//                     className="contentList link"
//                     to="/masterclass/tutor/profile"
//                   >
//                     My Profile
//                   </Link>
//                   <Link className="contentList link" to="/masterclass/courses">
//                     My Courses
//                   </Link>
//                   <Link
//                     className="contentList mb-0 link"
//                     to="/masterclass/uploads"
//                   >
//                     My Uploads
//                   </Link>
//                 </div>
//               </Collapse>
//             </div>
//           </Collapse>
//         </div>
//         <div className="menuItem">
//           <Link className="menuItemHeader link" to="/giftCard">
//             Gift Card
//           </Link>
//         </div>
//         <div className="menuItem">
//           <Link className="menuItemHeader link" to="/404">
//             Affiliate
//           </Link>
//         </div>
//         <div className="menuItem mb-0">
//           <div
//             className="menuItemHeader link"
//             tabIndex="1"
//             type="button"
//             onClick={handleProfileClick}
//           >
//             <span>Profile</span>
//             {openProfile ? (
//               <ExpandIcon className="menuIcon" />
//             ) : (
//               <CollapseIcon className="menuIcon" />
//             )}
//           </div>
//           <Collapse in={!openProfile} timeout="auto" unmountOnExit>
//             <div className="menuItemContent ">
//               <Link className="contentList link" to="/404">
//                 My Profile
//               </Link>
//               <Link className="contentList link" to="/404">
//                 Ticket
//               </Link>
//               <Link className="contentList mb-0 link" to="/404">
//                 Settings
//               </Link>
//             </div>
//           </Collapse>
//         </div>
//         <div className="menuItem sidebarBottom">
//           <Link className="menuItemHeader link" to="/">
//             Log-Out
//           </Link>
//         </div>
//       </div>
//     </ListItem>
//   );
// }

// function MasterclassSideBar() {
//   const [openCategory, setOpenCategory] = React.useState(true);

//   const handleCategoryClick = () => {
//     setOpenCategory(!openCategory);
//   };

//   const [openLearn, setOpenLearn] = React.useState(true);

//   const handleLearnClick = () => {
//     setOpenLearn(!openLearn);
//   };

//   const [openDashboard, setOpenDashboard] = React.useState(true);

//   const handleDashboardClick = () => {
//     setOpenDashboard(!openDashboard);
//   };

//   const [openMasterclass, setOpenMasterclass] = React.useState(true);

//   const handleMasterclassClick = () => {
//     setOpenMasterclass(!openMasterclass);
//   };

//   const [openProfile, setOpenProfile] = React.useState(true);

//   const handleProfileClick = () => {
//     setOpenProfile(!openProfile);
//   };

//   return (
//     <List>
//       <ListItem>
//         <div className=" searchBar" component="form">
//           <InputBase
//             className="searchInput w-100"
//             placeholder="Search for Courses or Category"
//           />
//           <Button className="customButton">
//             <SearchIcon className="searchIcon" />
//           </Button>
//         </div>
//         <div className="menuContainer mTopMenu">
//           <div className="menuItem">
//             <div
//               className="menuItemHeader link"
//               tabIndex="1"
//               type="button"
//               onClick={handleCategoryClick}
//             >
//               <span>Category</span>
//               {openCategory ? (
//                 <ExpandIcon className="menuIcon" />
//               ) : (
//                 <CollapseIcon className="menuIcon" />
//               )}
//             </div>
//             <Collapse in={!openCategory} timeout="auto" unmountOnExit>
//               <div className="menuItemContent ">
//                 <Link className="contentList link" to="/404">
//                   Category 1
//                 </Link>
//                 <Link className="contentList link" to="/404">
//                   Category 2
//                 </Link>
//                 <Link className="contentList mb-0 link" to="/404">
//                   Category 3
//                 </Link>
//               </div>
//             </Collapse>
//           </div>
//           <div className="menuItem">
//             <div
//               className="menuItemHeader link"
//               tabIndex="1"
//               type="button"
//               onClick={handleLearnClick}
//             >
//               <span>Learn</span>
//               {openLearn ? (
//                 <ExpandIcon className="menuIcon" />
//               ) : (
//                 <CollapseIcon className="menuIcon" />
//               )}
//             </div>
//             <Collapse in={!openLearn} timeout="auto" unmountOnExit>
//               <div className="menuItemContent ">
//                 <Link className="contentList link" to="/404">
//                   Blog
//                 </Link>
//                 <Link className="contentList link" to="/masterclass/dashboard">
//                   Masterclass
//                 </Link>
//                 <Link
//                   className="contentList mb-0 link"
//                   to="/masterclass/becometutor"
//                 >
//                   Become a Tutor
//                 </Link>
//               </div>
//             </Collapse>
//           </div>
//           <div className="menuItem">
//             <Link className="menuItemHeader link" to="/">
//               Market
//             </Link>
//           </div>
//           <div className="menuItem">
//             <div
//               className="menuItemHeader link"
//               tabIndex="1"
//               type="button"
//               onClick={handleDashboardClick}
//             >
//               <span>Dashboard</span>
//               {openDashboard ? (
//                 <ExpandIcon className="menuIcon" />
//               ) : (
//                 <CollapseIcon className="menuIcon" />
//               )}
//             </div>
//             <Collapse in={!openDashboard} timeout="auto" unmountOnExit>
//               <div className="menuItemContent ">
//                 <Link className="contentList link" to="/affiliate/dashboard">
//                   Affiliate Dashboard
//                 </Link>
//                 <Link className="contentList link" to="/market/dashboard">
//                   Market Dashboard
//                 </Link>
//                 <div
//                   className="contentList d-flex justify-content-between align-items-center link"
//                   tabIndex="1"
//                   type="button"
//                   onClick={handleMasterclassClick}
//                 >
//                   <span>Masterclass Dashboard</span>
//                   {openMasterclass ? (
//                     <ExpandIcon className="mCIcon" />
//                   ) : (
//                     <CollapseIcon className="mCIcon" />
//                   )}
//                 </div>
//                 <Collapse in={!openMasterclass} timeout="auto" unmountOnExit>
//                   <div className="menuItemContent ">
//                     <Link
//                       className="contentList link"
//                       to="/masterclass/tutor/profile"
//                     >
//                       My Profile
//                     </Link>
//                     <Link
//                       className="contentList link"
//                       to="/masterclass/courses"
//                     >
//                       My Courses
//                     </Link>
//                     <Link
//                       className="contentList mb-0 link"
//                       to="/masterclass/uploads"
//                     >
//                       My Uploads
//                     </Link>
//                   </div>
//                 </Collapse>
//               </div>
//             </Collapse>
//           </div>
//           <div className="menuItem">
//             <Link className="menuItemHeader link" to="/giftCard">
//               Gift Card
//             </Link>
//           </div>
//           <div className="menuItem">
//             <Link className="menuItemHeader link" to="/404">
//               Affiliate
//             </Link>
//           </div>
//           <div className="menuItem mb-0">
//             <div
//               className="menuItemHeader link"
//               tabIndex="1"
//               type="button"
//               onClick={handleProfileClick}
//             >
//               <span>Profile</span>
//               {openProfile ? (
//                 <ExpandIcon className="menuIcon" />
//               ) : (
//                 <CollapseIcon className="menuIcon" />
//               )}
//             </div>
//             <Collapse in={!openProfile} timeout="auto" unmountOnExit>
//               <div className="menuItemContent ">
//                 <Link className="contentList link" to="/404">
//                   My Profile
//                 </Link>
//                 <Link className="contentList link" to="/404">
//                   Ticket
//                 </Link>
//                 <Link className="contentList mb-0 link" to="/404">
//                   Settings
//                 </Link>
//               </div>
//             </Collapse>
//           </div>
//           <div className="menuItem sidebarBottom">
//             <Link className="menuItemHeader link" to="/">
//               Log-Out
//             </Link>
//           </div>
//         </div>
//       </ListItem>
//       {/* <ListItem
//               style={{
//                 zIndex: 100,
//                 height: "fit-content",
//                 position: "absolute",
//                 bottom: "3.5rem",
//                 // background: "rgba(139, 181, 178, 1)",
//                 // paddingTop: "3rem",
//                 // paddingBottom: "2rem",
//               }}
//             >
//               <div className="menuItem sidebarBottom">
//                 <Link className="menuItemHeader link" to="/">
//                   Log-Out
//                 </Link>
//               </div>
//             </ListItem> */}
//     </List>
//   );
// }
