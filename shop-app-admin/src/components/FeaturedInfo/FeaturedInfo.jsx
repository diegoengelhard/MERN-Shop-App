import React, { useEffect, useState } from 'react';

// Import service
import service from '../../redux/service/service';

// Import MUI icons
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

// Import styles
import './FeaturedInfo.css'

const FeaturedInfo = () => {
    // Set states
    const [income, setIncome] = useState([]);
    const [perc, setPerc] = useState(0);

    // Use effect to fetch income
    useEffect(() => {
        const getIncome = async () => {
            try {
                const response = await service.getIncome();
                setIncome(response);
                setPerc((response[1].total * 100) / response[0].total - 100);
            } catch (error) {
                console.log(error);
            }
        };
        getIncome();
    }, []);

    return (
        <>
            <div className="featured">
                <div className="featuredItem">
                    <span className="featuredTitle">Revanue</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">${income[1]?.total}</span>
                        <span className="featuredMoneyRate">
                            %{Math.floor(perc)}{" "}
                            {perc < 0 ? (
                                <ArrowDownward className="featuredIcon negative" />
                            ) : (
                                <ArrowUpward className="featuredIcon" />
                            )}
                        </span>
                    </div>
                    <span className="featuredSub">Compared to last month</span>
                </div>
                <div className="featuredItem">
                    <span className="featuredTitle">Sales</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">$4,415</span>
                        <span className="featuredMoneyRate">
                            -1.4 <ArrowDownward className="featuredIcon negative" />
                        </span>
                    </div>
                    <span className="featuredSub">Compared to last month</span>
                </div>
                <div className="featuredItem">
                    <span className="featuredTitle">Cost</span>
                    <div className="featuredMoneyContainer">
                        <span className="featuredMoney">$2,225</span>
                        <span className="featuredMoneyRate">
                            +2.4 <ArrowUpward className="featuredIcon" />
                        </span>
                    </div>
                    <span className="featuredSub">Compared to last month</span>
                </div>
            </div>
        </>
    )
}

export default FeaturedInfo