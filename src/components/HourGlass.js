import {ReactComponent as CheckBoxTick} from "../assets/checkbox-tick.svg";
import hourGlassAvatar from "../assets/hourGlass-avatar.jpg";
import CheckBoxTickStyles from "../styles/CheckBoxTickStyles";
import ProgressBar from "../styles/ProgressBar";
import avatarMollie from "../assets/avatar-mollie.jpg";
import avatarPhoenix from "../assets/avatar-phoenix.jpg";
import avatarNatali from "../assets/avatar-natali.jpg";
import avatarEva from "../assets/avatar-eva.jpg";
import avatarAlec from "../assets/avatar-alec.jpg";
import {ReactComponent as IconTrash} from "../assets/icon-trash.svg";
import {ReactComponent as IconEdit} from "../assets/icon-edit.svg";

const HourGlass = () => {
return (
    <tr>
        <td>
            <div className="company-info">
                <CheckBoxTickStyles>
                <input type='checkbox' id="checkbox-hourglass"/>
                <label htmlFor="checkbox-hourglass"><CheckBoxTick/></label>
                </CheckBoxTickStyles>
                <div>
                    <img src={hourGlassAvatar} alt='Catalog Avatar'/>
                </div>
                <div>
                    <p className="company-name">HourGlass</p>
                    <p className="company-site">hourglass.app</p>
                </div>
            </div>
        </td>
        <td>
            <ProgressBar className="progress-bar-background">
                <div className="progress-bar-length" style={{width: "58px"}}></div>
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
                <img src={avatarPhoenix} alt="Avatar 01"/>
                <img src={avatarNatali} alt="Avatar 01"/>
                <img src={avatarEva} alt="Avatar 01"/>
                <img src={avatarAlec} alt="Avatar 01"/>
            </div>
        </td>
        <td className="desktop-cell">
            <div className="about-company">
                <h4>Productivity app</h4>
                <p>Time management and productivity</p>
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

export default HourGlass;