import {ReactComponent as CheckBoxTick} from "../assets/checkbox-tick.svg";
import layersAvatar from "../assets/layers-avatar.jpg";
import CheckBoxTickStyles from "../styles/CheckBoxTickStyles";
import ProgressBar from "../styles/ProgressBar";
import avatarOrlando from "../assets/avatar-orlando.jpg";
import avatarNatali from "../assets/avatar-natali.jpg";
import avatarAlec from "../assets/avatar-alec.jpg";
import avatarDemi from "../assets/avatar-demi.jpg";
import avatarAnaiah from "../assets/avatar-anaiah.jpg";
import {ReactComponent as IconTrash} from "../assets/icon-trash.svg";
import {ReactComponent as IconEdit} from "../assets/icon-edit.svg";

const Layers = () => {
return (
    <tr>
        <td>
            <div className="company-info">
                <CheckBoxTickStyles>
                <input type='checkbox' id="checkbox-layers"/>
                <label htmlFor="checkbox-layers"><CheckBoxTick/></label>
                </CheckBoxTickStyles>
                <div>
                    <img src={layersAvatar} alt='Catalog Avatar'/>
                </div>
                <div>
                    <p className="company-name">Layers</p>
                    <p className="company-site">getlayers.io</p>
                </div>
            </div>
        </td>
        <td>
            <ProgressBar className="progress-bar-background">
                <div className="progress-bar-length" style={{width: "22px"}}></div>
            </ProgressBar>
        </td>
        <td className="desktop-cell">
            <div className="status inactive">
                <p>Churned</p>
            </div>
        </td>
        <td className="desktop-cell">
            <div className="users-img">
                <img src={avatarOrlando} alt="Avatar 01"/>
                <img src={avatarNatali} alt="Avatar 01"/>
                <img src={avatarAlec} alt="Avatar 01"/>
                <img src={avatarDemi} alt="Avatar 01"/>
                <img src={avatarAnaiah} alt="Avatar 01"/>
                 <div className="remaining-amount">
                    <p>+1</p>
                </div>
            </div>
        </td>
        <td className="desktop-cell">
            <div className="about-company">
                <h4>Web app integrations</h4>
                <p>Connect web apps seamlessly</p>
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

export default Layers;