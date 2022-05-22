import {ReactComponent as CheckBoxTick} from "../assets/checkbox-tick.svg";
import catalogAvatar from "../assets/catalog-avatar.jpg";
import CheckBoxTickStyles from "../styles/CheckBoxTickStyles";
import ProgressBar from "../styles/ProgressBar";
import avatarOlivia from "../assets/avatar-olivia.jpg";
import avatarPhoenix from "../assets/avatar-phoenix.jpg";
import avatarOrlando from "../assets/avatar-orlando.jpg";
import avatarAndi from "../assets/avatar-andi.jpg";
import avatarMollie from "../assets/avatar-mollie.jpg";
import {ReactComponent as IconTrash} from "../assets/icon-trash.svg";
import {ReactComponent as IconEdit} from "../assets/icon-edit.svg";

const Catalog = () => {
    return (
        <tr>
            <td>
                <div className="company-info">
                    <CheckBoxTickStyles>
                    <input type='checkbox' id="checkbox" defaultChecked/>
                    <label htmlFor="checkbox"><CheckBoxTick/></label>
                    </CheckBoxTickStyles>
                    <div>
                        <img src={catalogAvatar} alt='Catalog Avatar'/>
                    </div>
                    <div>
                        <p className="company-name">Catalog</p>
                        <p className="company-site">catalogapp.io</p>
                    </div>
                </div>
            </td>
            <td>
                <ProgressBar className="progress-bar-background">
                    <div className="progress-bar-length" style={{width: "50px"}}></div>
                </ProgressBar>
            </td>
            <td className="desktop-cell">
                <div className="status active">
                    <p>Customer</p>
                </div>
            </td>
            <td className="desktop-cell">
                <div className="users-img i">
                    <img src={avatarOlivia} alt="Avatar 01"/>
                    <img src={avatarPhoenix} alt="Avatar 01"/>
                    <img src={avatarOrlando} alt="Avatar 01"/>
                    <img src={avatarAndi} alt="Avatar 01"/>
                    <img src={avatarMollie} alt="Avatar 01"/>
                    <div className="remaining-amount">
                        <p>+5</p>
                    </div>
                </div>
            </td>
            <td className="desktop-cell">
                <div className="about-company">
                    <h4>Content curating app</h4>
                    <p>Brings all your news into one place</p>
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

export default Catalog;