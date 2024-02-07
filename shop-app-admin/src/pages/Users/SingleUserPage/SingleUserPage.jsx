import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Import service
import service from '../../../redux/service/service';

// Import styles
import './SingleUserPage.css'

// Import MUI
import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish,
} from "@material-ui/icons";
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';

// Import toast
import { toast } from 'react-toastify';

const SingleUserPage = () => {
    // Set states
    const [inputs, setInputs] = useState({});

    // Set location from browser url
    const location = useLocation();
    const userId = location.pathname.split("/")[2]; // Get product id from url

    // Obtain user from redux store
    const user = useSelector((state) => state.users.products.find((user) => user._id === userId));

    // Handle Input change
    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    // Handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            username: inputs.username || user.username,
            firstname: inputs.firstname || user.firstname,
            lastname: inputs.lastname || user.lastname,
            email: inputs.email || user.email,
            isAdmin: inputs.isAdmin || user.isAdmin
        }

        console.log(userData);

        try {
            service.updateUser(userId, userData);
            toast.success('User has been updated!');
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img
                            src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                            alt=""
                            className="userShowImg"
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">{user.firstname} {user.lastname}</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">{user.username}</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">{user.email}</span>
                        </div>
                        <div className="userShowInfo">
                            <SupervisorAccountOutlinedIcon />
                            <span className="userShowInfoTitle">Admin status: {user.isAdmin ? 'yes' : 'no'} </span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input
                                    name="username"
                                    type="text"
                                    className="userUpdateInput"
                                    defaultValue={user.username}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Firstname</label>
                                <input
                                    name="firstname"
                                    type="text"
                                    className="userUpdateInput"
                                    defaultValue={user.firstname}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Lastname</label>
                                <input
                                    name="lastname"
                                    type="text"
                                    className="userUpdateInput"
                                    defaultValue={user.lastname}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                    name="email"
                                    type="text"
                                    className="userUpdateInput"
                                    defaultValue={user.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Admin</label>
                                <select name="isAdmin" onChange={handleChange}>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                            <div className="userUpdateItem">
                                <button className="userUpdateButton" onClick={handleSubmit}>Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SingleUserPage