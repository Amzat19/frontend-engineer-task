import {ReactComponent as Ellipsis} from "../assets/ellipsis.svg";
import {ReactComponent as ArrowUp} from "../assets/arrow-up.svg";
import greenChart from "../assets/green-chart.jpg";
import {ReactComponent as ArrowDown} from "../assets/arrow-down.svg";
import redChart from "../assets/red-chart.jpg";
import MainMetricsStyles from "../styles/MainMetricsStyles";

const MainMetrics = () => {
    return (
        <MainMetricsStyles>
                <div className="metric-group">
                    <div className="metric-item">
                        <div className="metric-item-heading">
                            <h3>Total customers</h3>
                            <Ellipsis className="metric-ellipsis"/>
                        </div>
                        <div className="number-and-chart">
                            <div className="number-and-badge">
                                <h2>2,420</h2>
                                <div className="change-and-text">
                                    <div>
                                        <ArrowUp/>
                                        <p>40%</p>
                                    </div>
                                    <p>vs last month</p>
                                </div>
                            </div>
                            <div className="chart">
                                <img src={greenChart} alt='Green Chart'/>
                            </div>
                        </div>
                    </div>
                    <div className="metric-item">
                        <div className="metric-item-heading">
                            <h3>Members</h3>
                            <Ellipsis className="metric-ellipsis"/>
                        </div>
                        <div className="number-and-chart">
                            <div className="number-and-badge">
                                <h2>1,210</h2>
                                <div className="change-and-text">
                                    <div>
                                        <ArrowDown/>
                                        <p className="red">10%</p>
                                    </div>
                                    <p>vs last month</p>
                                </div>
                            </div>
                            <div className="chart">
                                <img src={redChart} alt='Red Chart'/>
                            </div>
                        </div>
                    </div>
                    <div className="metric-item">
                        <div className="metric-item-heading">
                            <h3>Active now</h3>
                            <Ellipsis className="metric-ellipsis"/>
                        </div>
                        <div className="number-and-chart">
                            <div className="number-and-badge">
                                <h2>316</h2>
                                <div className="change-and-text">
                                    <div>
                                        <ArrowUp/>
                                        <p>20%</p>
                                    </div>
                                    <p>vs last month</p>
                                </div>
                            </div>
                            <div className="chart">
                                <img src={greenChart} alt='Green Chart'/>
                            </div>
                        </div>
                    </div>

                </div>

            </MainMetricsStyles>
    )
};

export default MainMetrics;