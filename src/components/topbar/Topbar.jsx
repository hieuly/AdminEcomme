import React from "react";
import "./topbar.css";
// import {Link} from "react-router-dom"
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useSelector,useDispatch } from 'react-redux';
// import {useDispatch } from 'react-redux';
// import {  useEffect } from "react";
// import { userRequest } from "../../requestMethod";
import { logout } from "../../redux/userRedux";
// import { userlogout } from "../../redux/apiCalls";



export default function Topbar() {
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    // localStorage.removeItem('persist:root');
	};

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">MENadmin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <span>{user.username}</span>
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
            <img className="logout" src="https://img.icons8.com/ios-filled/50/000000/exit.png" alt="" onClick={handleLogout}/>
        </div>
      </div>
    </div>
  );
}