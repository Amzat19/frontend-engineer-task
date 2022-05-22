import styled from "styled-components";

const MainMetricsStyles = styled.div`
    padding-top: 32px;
    width: 88vw;
    margin: 0 auto;

    .metric-group {
        display: grid;
        gap: 20px;

        .metric-item {
            width: 100%;
            margin: auto;
            padding-top: 20px;
            border: 2px solid rgba(234, 236, 240, 1);
            border-radius: 8px;
            box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.1);

            .metric-item-heading {
                display: grid;
                grid-template-columns: 5fr 1fr;
                margin: auto;
                width: 85%;
                padding-bottom: 20px;

                h3 {
                    font-weight: 500;
                    font-size: 18px;
                }
                .metric-ellipsis {
                    justify-self: center;
                }
            }
            .number-and-chart {
                display: grid;
                grid-template-columns: 1.6fr 1fr;
                width: 85%;
                margin: auto;
                padding-bottom: 20px;

                .number-and-badge {
                    display: grid;
                    gap: 16px;
                

                    .change-and-text {
                        div {
                            display: flex;
                            gap: 7px;
                            p {
                                color: rgba(2, 122, 72, 1);
                                font-weight: 500;
                            }
                        }
                        display: flex;
                        gap: 8px;
                        p {
                            font-size: 14px;
                            font-weight: 500;
                            letter-spacing: 0em;
                            color: rgba(102, 112, 133, 1);
                        }
                        .red {
                            color: rgba(180, 35, 24, 1);
                        }
                    }

                }
                .chart {
                    width: 80%;
                    height: 75%;
                    justify-self: end;
                    align-self: flex-end;
                    img {
                    width: 100%;
                    height: 100%;
                    }

                    
                }
            }
        }
    }
    @media (min-width: 1000px){
        .metric-group{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            .metric-item{
                height: 166px;
            }
        }
    }
`;

export default MainMetricsStyles;

