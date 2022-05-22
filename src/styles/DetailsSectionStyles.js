import styled from "styled-components";

const DetailsSectionStyles = styled.div`
margin-top: 32px;
    .details-container {
        .filters-bar {
            width: 88vw;
            margin: auto;
            .search-bar {
                border: 1px solid rgba(208, 213, 221, 1);
                height: 44px;
                border-radius: 8px;
                box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.1);
                position: relative;
                
                .search-icon {
                    position: absolute;
                    left: 28px;
                    top: 10px;
                }

                input {
                    width: 75vw;
                    height: 28px;
                    margin: 6px 0px 0px 20px;
                    padding-left: 35px;
                    padding-top: 3px;
                    border: none;
                    ::placeholder {
                        color: #667085;
                        font-weight: 400;
                        font-size: 16px;

                    }
                }

            }
            .edit-filters {
                margin-top: 12px;
                border: 1px solid rgba(208, 213, 221, 1);
                border-radius: 8px;
                box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.1);
                height: 40px;

                button {
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                    border: none;
                    font-weight: 500;
                    font-size: 14px;
                    color: rgba(52, 64, 84, 1);
                }
            }
            .filters-applied-div {
                margin-top: 12px;
                .filters-applied {
                    display: flex;
                    gap: 12px;
                .filter-badge {
                    background-color: rgba(249, 245, 255, 1);
                    height: 32px;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-weight: 500;
                    font-size: 14px;
                    color: #6941C6;
                    p {
                        padding-left: 10px;
                    }
                    .close-icon {
                        margin-right: 10px;
                    }
                }
            }

            }
        }
        .table-wrap{ 
            margin-top: 24px;
            border-top: 1px solid #EAECF0;
            box-shadow: 0px 3px 5px rgba(16, 24, 40, 0.1);
            border-radius: 8px;

            table {
                width: 100vw;
                margin: auto;
                border-collapse: collapse;
                border-radius: 18px;
                thead{
                    text-align: left;
                    height: 44px;
                    th{
                        border-bottom: 1px solid #EAECF0;
                        padding-left: 30px;
                        .company-header {
                        display: flex;
                        gap: 12px;

                        .company {

                            display: flex;
                            align-items: center;
                            gap: 4px;
                            p {
                                font-weight: 500;
                                font-size: 12px;
                                color: #667085;
                            }
                    
                        }   
                    }

                    .license-header, .status-header, .users-header, .about-header{
                        font-weight: 500;
                        font-size: 12px;
                        color: #667085;
                    } 
                    }
                    
                }

                tbody{
                    width: 88vw;
                    tr {
                        height: 72px;
                    }
                    td{
                        padding-left: 30px;
                        .status{
                            width: 85px;
                            height: 22px;
                            border-radius: 16px;
                            p{
                                width: 75px;
                                height: 18px;
                                padding-left: 8px;
                                padding-top: 2px;
                            }
                        }
                        .status.active {
                            background-color: #ECFDF3;
                            p{
                                color: #027A48;
                            }
                        }
                        .status.inactive {
                            background-color: #F2F4F7;
                            p{
                                color: #344054;
                            }
                        }
                        .users-img {
                            display: flex;
                            overflow: hidden;
                            padding-left: 0.5rem;

                            img, .remaining-amount{
                                display: inline-block;
                                border-radius: 100%;
                                height: 25px;
                                width: 25px;
                                margin-right: 0;
                                margin-left: -.5rem;
                            }

                            .remaining-amount {
                                background-color: #F9F5FF;
                                border: 2px solid white;
                                p{
                                    font-weight: 500;
                                    font-size: 12px;
                                    color: #7F56D9;
                                    padding-top: 4px;
                                    padding-left: 3px;
                                }
                            }
                        }
                        .about-company{
                            h4 {
                                font-weight: 400;
                                font-size: 14px;
                            }
                            p{
                                font-weight: 400;
                                font-size: 14px;
                                color: #667085;
                            }
                        }
                        .del-and-edit{
                            .icon-trash{
                                margin-right: 16px;
                            }
                        }
                    }
                }
                tfoot{
                    td{
                        .pagination-desktop{
                            height: 66px;
                            border-top: 1px solid #D0D5DD;
                            display: flex;
                            align-items: center;
                            gap: 53vw;
                            .pagination-buttons{
                                width: 250px;
                                button{
                                    background-color: transparent;
                                    border: 1px solid #D0D5DD;
                                    border-radius: 6px;
                                    margin-left: 12px;
                                }
                                .previous-button{
                                    width: 92px;
                                    height: 38px;
                                }
                                .next-button{
                                    width: 66px;
                                    height: 38px;
                                }
                            }
                            .pageCount{
                                width: 115px;
                                font-weight: 400;
                                font-size: 14px;
                            }
                        }
                        
                    }
                    
                }

                .company-info {
                    display: flex;
                    gap: 12px;
                    align-items: center;

                    div{
                        .company-name {
                            font-weight: 600;
                            font-size: 14px;
                        } 

                        .company-site {
                            font-weight: 400;
                            font-size: 14px;
                            color: #667085;
                        }
                    }
                }
            }
        }
        .pagination {
            width: 88vw;
            margin: 24px auto;
            padding-top: 16px;
            padding-bottom: 48px;
            border-top: 1px solid #EAECF0;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            .pagination-button {
                width: 30px;
                height: 30px;
                background-color: transparent;
                border: none;
            }
            span {
                font-weight: 400;
                font-size: 14px;
                color: #344054;
                align-self: center;
                justify-content: center;
            }
            .arrow-right-button{
                justify-self: end;
            }
        }

    }

    @media (max-width: 999px){
        .more-filters {
            display: none;
        }
        .table-wrap{
            table{
                thead{
                    .desktop-header{
                        display: none;
                    }
                }
                tbody{
                    .desktop-cell{
                        display: none;
                    }
                }
                tfoot{
                    display: none;
                }
            }
        }
    }

    @media (min-width: 1000px){
        .filters-bar{
            display: grid;
            grid-template-columns: 4fr 1fr;

            .search-bar{
                width: 320px;
                height: 44px;
                align-self: end;
                grid-column-start: 2;
                grid-column-end: -1;

                input {
                    max-width: 90%;
                }
            }
            .more-filters-and-badges{
                display: grid;
                grid-template-columns: 215px 1fr;
                align-items: center;
                grid-column-start: 1;
                grid-column-end: 2;
                grid-row-start: 1;
                grid-row-end: 2;
                .edit-filters{
                    display: none;
                }
                .more-filters {
                margin-top: 12px;
                border: 1px solid rgba(208, 213, 221, 1);
                border-radius: 8px;
                box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.1);
                height: 40px;
                width: 137px;
                grid-column-start: 2;
                grid-column-end: -1;
                grid-row-start: 1;
                grid-row-end: 2;

                button {
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                    border: none;
                    font-weight: 500;
                    font-size: 14px;
                    color: rgba(52, 64, 84, 1);
                }
            }
                .filters-applied-div{
                    grid-column-start: 1;
                    grid-column-end: 2;
                }
            }
        }
        .table-wrap{
            width: 88vw;
            margin: auto auto 96px auto;
            table {
                 max-width: 88vw;
            }
           
        }
        .pagination{
            display: none !important;
        }
    }
`; 

export default DetailsSectionStyles; 