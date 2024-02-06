import React, { useEffect, useState } from 'react'

// Import MUI Icons
import { Visibility } from "@material-ui/icons";

// Import styles
import './SmallWidget.css';

const SmallWidget = () => {
    // Set users state
    const [users, setUsers] = useState([]);

    // TODO: useEffect to fetch users from the API
    return (
        <>
            <div className="widgetSm">
                <span className="widgetSmTitle">New Join Members</span>
                <ul className="widgetSmList">
                    {/* TODO: map users */}
                </ul>
            </div>
        </>
    )
}

export default SmallWidget