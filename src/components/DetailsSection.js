import {ReactComponent as SearchIcon} from "../assets/search-icon.svg";
import {ReactComponent as FilterIcon} from "../assets/filter-icon.svg";
import {ReactComponent as CloseIcon} from "../assets/close-button.svg";
import Table from "./Table";
import {ReactComponent as ArrowLeft} from "../assets/arrow-left.svg";
import {ReactComponent as ArrowRight} from "../assets/arrow-right.svg";
import DetailsSectionStyles from "../styles/DetailsSectionStyles";

const DetailsSection = () => {
    return (
        <DetailsSectionStyles className="details-section">
                <div className="details-container">
                    <div className="filters-bar">
                        <div className="search-bar">
                            <SearchIcon className="search-icon"/>
                            <input type="search" className="search-input" placeholder="Search"/>
                        </div>
                        <div className="more-filters-and-badges">
                        <div className="edit-filters">
                            <button className="filter-button">
                                <FilterIcon/> Edit filters
                            </button>
                        </div>
                        <div className="more-filters">
                            <button className="filter-button">
                                <FilterIcon/> More filters
                            </button>
                        </div>
                        <div className="filters-applied-div">
                            <div className="filters-applied">
                            <div className="filter-badge">
                                <p>All time</p>
                                <CloseIcon className="close-icon"/>
                            </div>
                            <div className="filter-badge">
                                <p>US, AU, +4</p>
                                <CloseIcon  className="close-icon"/>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="table-wrap">
                        <Table/>
                    </div>
                    <div className="pagination">
                        <button type="button" className="arrow-left-button pagination-button"><ArrowLeft/></button>
                        <span className="page-count">Page 1 of 10</span>
                        <button type="button" className="arrow-right-button pagination-button"><ArrowRight/></button>
                    </div>
                </div>
            </DetailsSectionStyles>
    )
};

export default DetailsSection;