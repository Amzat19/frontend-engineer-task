import {ReactComponent as CheckBoxTick} from "../assets/checkbox-tick.svg";
import quotientAvatar from "../assets/quotient-avatar.jpg";
import CheckBoxTickStyles from "../styles/CheckBoxTickStyles";
import ProgressBar from "../styles/ProgressBar";
import avatarMollie from "../assets/avatar-mollie.jpg";
import avatarOrlando from "../assets/avatar-orlando.jpg";
import avatarAlec from "../assets/avatar-alec.jpg";
import avatarNatali from "../assets/avatar-natali.jpg";
import avatarDrew from "../assets/avatar-drew.jpg";
import {ReactComponent as IconTrash} from "../assets/icon-trash.svg";
import {ReactComponent as IconEdit} from "../assets/icon-edit.svg";

const Quotient = () => {
return (
    <tr>
        <td>
            <div className="company-info">
                <CheckBoxTickStyles>
                <input type='checkbox' id="checkbox-quotient" defaultChecked/>
                <label htmlFor="checkbox-quotient"><CheckBoxTick/></label>
                </CheckBoxTickStyles>
                <div>
                    <img src={quotientAvatar} alt='Catalog Avatar'/>
                </div>
                <div>
                    <p className="company-name">Quotient</p>
                    <p className="company-site">quotient.co</p>
                </div>
            </div>
        </td>
        <td>
            <ProgressBar className="progress-bar-background">
                <div className="progress-bar-length" style={{width: "15px"}}></div>
            </ProgressBar>
        </td>
        <td className="desktop-cell">
            <div className="status active">
                <p>Customer</p>
            </div>
        </td>
        <td className="desktop-cell">
            <div className="users-img">
                <img src={avatarMollie} alt="Avatar 01"/>
                <img src={avatarOrlando} alt="Avatar 01"/>
                <img src={avatarAlec} alt="Avatar 01"/>
                <img src={avatarNatali} alt="Avatar 01"/>
                <img src={avatarDrew} alt="Avatar 01"/>
                 <div className="remaining-amount">
                    <p>+6</p>
                </div>
            </div>
        </td>
        <td className="desktop-cell">
            <div className="about-company">
                <h4>Sales CRM</h4>
                <p>Web-based sales doc management</p>
            </div>
        </td>
        <td className="desktop-cell">
            <div className="del-and-edit">
                <IconTrash className="icon-trash"/>
                <IconEdit/>
            </div>
        </td>
    </tr>
)
};

export default Quotient;