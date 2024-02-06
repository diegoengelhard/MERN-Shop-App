import React from 'react'

// Import styles
import './Topbar.css'

// Import MUI icons
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import LogoutIcon from '@mui/icons-material/Logout';

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">shop-admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <LogoutIcon />
                    </div>
                    <img src= "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar