import React, { useEffect, useState } from "react";
import { format } from "timeago.js"

// Import service
import service from '../../../redux/service/service';

// Import styles
import './LargeWidget.css'

const LargeWidget = () => {
    // Set order state
    const [orders, setOrders] = useState([]);

    // Use effect to fetch orders
    useEffect(() => {
        const getOrders = async () => {
            try {
                const response = await service.getOrders();
                setOrders(response);
            } catch (error) {
                console.log(error);
            }
        };
        getOrders();
    }, []);

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
                        <th className="widgetLgTh">Customern ID</th>
                        <th className="widgetLgTh">Date</th>
                        <th className="widgetLgTh">Amount</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                    {/* MAP ORDERS */}
                    {orders.map((order) => (
                        <tr className="widgetLgTr" key={order._id}>
                            <td className="widgetLgUser">
                                <span className="widgetLgName">{order.userId}</span>
                            </td>
                            <td className="widgetLgDate">{format(order.createdAt)}</td>
                            <td className="widgetLgAmount">${order.amount}</td>
                            <td className="widgetLgStatus">
                                <Button type={order.status} />
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    )
}

export default LargeWidget