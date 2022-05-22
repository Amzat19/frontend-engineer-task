import {ReactComponent as CheckBoxTick} from "../assets/checkbox-tick.svg";
import circoolesAvatar from "../assets/circooles-avatar.jpg";
import CheckBoxTickStyles from "../styles/CheckBoxTickStyles";
import ProgressBar from "../styles/ProgressBar";
import avatarNatali from "../assets/avatar-natali.jpg";
import avatarEva from "../assets/avatar-eva.jpg";
import avatarLana from "../assets/avatar-lana.jpg";
import avatarDemi from "../assets/avatar-demi.jpg";
import avatarAnaiah from "../assets/avatar-anaiah.jpg";
import {ReactComponent as IconTrash} from "../assets/icon-trash.svg";
import {ReactComponent as IconEdit} from "../assets/icon-edit.svg";

const Circooles = () => {
return (
    <tr>
        <td>
            <div className="company-info">
                <CheckBoxTickStyles>
                <input type='checkbox' id="checkbox-circooles" defaultChecked/>
                <label htmlFor="checkbox-circooles"><CheckBoxTick/></label>
                </CheckBoxTickStyles>
                <div>
                    <img src={circoolesAvatar} alt='Catalog Avatar'/>
                </div>
                <div>
                    <p className="company-name">Circooles</p>
                    <p className="company-site">getcirooles.com</p>
                </div>
            </div>
        </td>
        <td>
            <ProgressBar className="progress-bar-background">
                <div className="progress-bar-length" style={{width: "45px"}}></div>
            </ProgressBar>
        </td>
        <td className="desktop-cell">
            <div className="status inactive">
                <p>Churned</p>
            </div>
        </td>
        <td className="desktop-cell">
            <div className="users-img">
                <img src={avatarNatali} alt="Avatar 01"/>
                <img src={avatarEva} alt="Avatar 01"/>
                <img src={avatarLana} alt="Avatar 01"/>
                <img src={avatarDemi} alt="Avatar 01"/>
                <img src={avatarAnaiah} alt="Avatar 01"/>
                <div className="remaining-amount">
                    <p>+8</p>
                </div>
            </div>
        </td>
        <td className="desktop-cell">
            <div className="about-company">
                <h4>Design software</h4>
                <p>Super lightweight design app</p>
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

export default Circooles;