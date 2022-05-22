import {ReactComponent as CheckBoxMinus} from "../assets/checkbox-minus.svg";
import {ReactComponent as TableHeaderArrowDown} from "../assets/table-header-arrow-down.svg";
import CheckBoxMinusStyles from '../styles/CheckBoxMinusStyles';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>
                    <div className="company-header">
                        <CheckBoxMinusStyles>
                        <input type='checkbox' id="header-checkbox" defaultChecked/>
                        <label htmlFor="header-checkbox"><CheckBoxMinus/></label>
                        </CheckBoxMinusStyles>
                        <div className="company">
                            <p>Company</p>
                            <TableHeaderArrowDown/>
                        </div>
                     </div>
                </th> 
                <th>
                    <p className="license-header">License use</p>
                </th>
                <th className="desktop-header">
                    <p className="status-header">Status</p>
                </th>
                <th className="desktop-header">
                <p className="users-header">Users</p>
                </th>
                <th className="desktop-header">
                    <p className="about-header">About</p>
                </th>
                <th className="desktop-header">
                </th>
            </tr>
        </thead>
    )
};

export default TableHeader;