import {ReactComponent as UploadCloud } from '../assets/upload-cloud.svg';
import {ReactComponent as PlusIcon} from '../assets/plus-icon.svg';
import MainHeaderStyles from "../styles/MainHeaderStyles";

const MainHeader = () => {
    return (
        <MainHeaderStyles className='main-header'>
        <div className="main-header-text">
            <h2>Welcome back, Olivia</h2>
            <p>Track, manage and forecast your customers and orders.</p>
        </div>
        <div className="main-header-actions">
            <button className="main-header-buttons import">
                <UploadCloud className="import-icon"/> Import
            </button>
            <button className="main-header-buttons add">
                <PlusIcon/> Add
            </button>
        </div>
    </MainHeaderStyles>
    )
};

export default MainHeader;