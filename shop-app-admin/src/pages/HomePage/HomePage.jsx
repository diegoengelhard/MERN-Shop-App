import React, { useEffect, useMemo, useState } from 'react';

// Import service
import service from '../../redux/service/service';

// Import components
import Chart from '../../components/Chart/Chart';
import LargeWidget from '../../components/Wigets/LargeWidget/LargeWidget';
import SmallWidget from '../../components/Wigets/SmallWidget/SmallWidget';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';

// Import styles
import './HomePage.css'

const HomePage = () => {
    // Set user stats state
    const [userStats, setUserStats] = useState([]);

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

    // Use effect to fetch user stats
    useEffect(() => {
        const getStats = async () => {
            try {
                const response = await service.getUserStats();
                response.map((item) =>
                    setUserStats((prev) => [
                        ...prev,
                        { name: MONTHS[item._id - 1], "Active User": item.total },
                    ])
                );
            } catch (error) {
                console.log(error);
            }
        };
        getStats();
    }, [MONTHS]);

    return (
        <>
            <div className="home">
                <FeaturedInfo />
                <Chart
                    data={userStats}
                    title="User Analytics"
                    grid
                    dataKey="Active User"
                />
                <div className="homeWidgets">
                    <SmallWidget />
                    <LargeWidget />
                </div>
            </div>
        </>
    )
}

export default HomePage