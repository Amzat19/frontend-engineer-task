import {ReactComponent as CheckBoxTick} from "../assets/checkbox-tick.svg";
import sisyphusAvatar from "../assets/sisyphus-avatar.jpg";
import CheckBoxTickStyles from "../styles/CheckBoxTickStyles";
import ProgressBar from "../styles/ProgressBar";
import avatarEva from "../assets/avatar-eva.jpg";
import avatarDrew from "../assets/avatar-drew.jpg";
import avatarLana from "../assets/avatar-lana.jpg";
import avatarAlec from "../assets/avatar-alec.jpg";
import avatarAndi from "../assets/avatar-andi.jpg";
import {ReactComponent as IconTrash} from "../assets/icon-trash.svg";
import {ReactComponent as IconEdit} from "../assets/icon-edit.svg";

const Sisyphus = () => {
return (
    <tr>
        <td>
            <div className="company-info">
                <CheckBoxTickStyles>
                <input type='checkbox' id="checkbox-sisyphus" defaultChecked/>
                <label htmlFor="checkbox-sisyphus"><CheckBoxTick/></label>
                </CheckBoxTickStyles>
                <div>
                    <img src={sisyphusAvatar} alt='Catalog Avatar'/>
                </div>
                <div>
                    <p className="company-name">Sisyphus</p>
                    <p className="company-site">sisyphus.com</p>
                </div>
            </div>
        </td>
        <td>
            <ProgressBar className="progress-bar-background">
                <div className="progress-bar-length" style={{width: "34px"}}></div>
            </ProgressBar>
        </td>
        <td className="desktop-cell">
            <div className="status active">
                <p>Customer</p>
            </div>
        </td>
        <td className="desktop-cell">
            <div className="users-img">
                <img src={avatarEva} alt="Avatar 01"/>
                <img src={avatarDrew} alt="Avatar 01"/>
                <img src={avatarLana} alt="Avatar 01"/>
                <img src={avatarAlec} alt="Avatar 01"/>
                <img src={avatarAndi} alt="Avatar 01"/>
                 <div className="remaining-amount">
                    <p>+4</p>
                </div>
            </div>
        </td>
        <td className="desktop-cell">
            <div className="about-company">
                <h4>Automation and workflow</h4>
                <p>Time tracking, invoicing and expenses</p>
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

export default Sisyphus;