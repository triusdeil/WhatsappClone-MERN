import React from "react";
import "../../css/SidebarChats.css";
import { Avatar } from "@mui/material";
const SidebarChats = () => {
  return (
    <div className="sidebar__Chats">
      <Avatar />
      <div className="sidebar_Chats_Info">
        <h2>Room name</h2>
        <p>this is the last message</p>
      </div>
    </div>
  );
};

export default SidebarChats;
