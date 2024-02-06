import React, { useEffect, useState } from "react";
import { format } from "timeago.js"

// Import styles
import './LargeWidget.css'

const LargeWidget = () => {
    // Set order state
    const [orders, setOrders] = useState([]);

    // Use effect to fetch orders
    // TODO: Fetch orders from database

    // Button custom jsx
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    };

    return (
        <>
            <div className="widgetLg">
                <h3 className="widgetLgTitle">Latest transactions</h3>
                <table className="widgetLgTable">
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Customer</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                    {/* TODO: MAP ORDERS */}
                </table>
            </div>
        </>
    )
}

export default LargeWidget