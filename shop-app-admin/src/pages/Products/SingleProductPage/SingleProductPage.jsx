import React, { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

// Import components
import Chart from '../../../components/Chart/Chart';

// Import styles
import './SingleProductPage.css'

// Import MUI icons
import { Publish } from "@material-ui/icons";

const SingleProductPage = () => {
    // Set product state
    const [pStats, setPStats] = useState([]);

    // Set location from browser url
    const location = useLocation();
    const productId = location.pathname.split("/")[2]; // Get product id from url

    // Obtain product from redux store
    // TODO: Get product from redux store

    // Set months array
    const MONTHS = useMemo(
        () => [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Agu",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        []
    );

    // useEffect to set product stats
    // TODO: Fetch product stats from backend

    return (
        <div>
            {/* TODO DESIGN */}
        </div>
    )
}

export default SingleProductPage