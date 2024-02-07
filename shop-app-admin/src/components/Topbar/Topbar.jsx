import React from 'react'
import { useSelector } from 'react-redux'

// Import service
import service from '../../redux/service/service';

// Import styles
import './Topbar.css'

// Import MUI icons
import LogoutIcon from '@mui/icons-material/Logout';

// Import toast 
import { toast } from 'react-toastify';

const Topbar = () => {
    const username = useSelector((state) => state.user.currentUser.user.username);

    // handle logout
    const handleLogout = () => {
        service.logout();
        localStorage.clear();
        toast.success('Signed out successfully');
        window.location.reload();
    }

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">shop-admin</span>
                </div>
                <div className="topRight">
                    <div>
                        <h3 className='username'>Welcome, {username}!</h3>
                    </div>
                    <div className="topbarIconContainer">
                        <LogoutIcon onClick={handleLogout} />
                    </div>
                    <img src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

export default Topbar