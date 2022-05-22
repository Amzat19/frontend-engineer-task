import {ReactComponent as CheckBoxTick} from "../assets/checkbox-tick.svg";
import commandRAvatar from "../assets/commandR-avatar.jpg";
import CheckBoxTickStyles from "../styles/CheckBoxTickStyles";
import ProgressBar from "../styles/ProgressBar";
import avatarAnaiah from "../assets/avatar-anaiah.jpg";
import avatarAlec from "../assets/avatar-alec.jpg";
import avatarDrew from "../assets/avatar-drew.jpg";
import avatarDemi from "../assets/avatar-demi.jpg";
import avatarCandice from "../assets/avatar-candice.jpg";
import {ReactComponent as IconTrash} from "../assets/icon-trash.svg";
import {ReactComponent as IconEdit} from "../assets/icon-edit.svg";

const CommandR = () => {
return (
    <tr>
        <td>
            <div className="company-info">
                <CheckBoxTickStyles>
                <input type='checkbox' id="checkbox-command" defaultChecked/>
                <label htmlFor="checkbox-command"><CheckBoxTick/></label>
                </CheckBoxTickStyles>
                <div>
                    <img src={commandRAvatar} alt='Catalog Avatar'/>
                </div>
                <div>
                    <p className="company-name">Command+R</p>
                    <p className="company-site">cmdr.ai</p>
                </div>
            </div>
        </td>
        <td>
            <ProgressBar className="progress-bar-background">
                <div className="progress-bar-length" style={{width: "28px"}}></div>
            </ProgressBar>
        </td>
        <td className="desktop-cell">
            <div className="status active">
                <p>Customer</p>
            </div>
        </td>
        <td className="desktop-cell">
            <div className="users-img">
                <img src={avatarAnaiah} alt="Avatar 01"/>
                <img src={avatarAlec} alt="Avatar 01"/>
                <img src={avatarDrew} alt="Avatar 01"/>
                <img src={avatarDemi} alt="Avatar 01"/>
                <img src={avatarCandice} alt="Avatar 01"/>
                <div className="remaining-amount">
                    <p>+2</p>
                </div>
            </div>
        </td>
        <td className="desktop-cell">
            <div className="about-company">
                <h4>Data prediction</h4>
                <p>AI and machine learning data</p>
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

export default CommandR;