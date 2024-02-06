import React, { useEffect, useState } from 'react'

// Import service
import service from '../../../redux/service/service';

// Import MUI Icons
import { Visibility } from "@material-ui/icons";

// Import styles
import './SmallWidget.css';

const SmallWidget = () => {
    // Set users state
    const [users, setUsers] = useState([]);

    // TODO: useEffect to fetch users from the API
    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await service.getLatestUsers();
                setUsers(response);
            } catch (error) {
                console.log(error);
            }
        };
        getUsers();
    }, []);

    return (
        <>
            <div className="widgetSm">
                <span className="widgetSmTitle">Latest Members</span>
                <ul className="widgetSmList">
                    {/* map users */}
                    {users.map((user) => (
                        <li className="widgetSmListItem" key={user._id}>
                            <img
                                src={
                                    user.img ||
                                    "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
                                }
                                alt=""
                                className="widgetSmImg"
                            />
                            <div className="widgetSmUser">
                                <span className="widgetSmUsername">{user.username}</span>
                            </div>
                            <button className="widgetSmButton">
                                <Visibility className="widgetSmIcon" />
                                Display
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default SmallWidget