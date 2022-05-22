import logo from '../assets/Logo.jpg';
import {ReactComponent as MenuIcon} from '../assets/menu-icon.svg';
import {ReactComponent as Zap} from '../assets/zap.svg';
import {ReactComponent as SettingsIcon} from '../assets/settings-icon.svg';
import {ReactComponent as Bell} from '../assets/bell.svg';
import headerAvatar from "../assets/header-avatar.jpg";
import {ReactComponent as SearchIcon} from "../assets/search-icon.svg";
import HeaderStyles from "../styles/HeaderStyles";

const Hr = () => {
    return (
        <hr
        style={
            {
                color: "#EAECF0",
                width: "100vw",
                height: "1px",
                backgroundColor: "#EAECF0",
                border: '0'
            }
        }/>
    )
};

const Header = () => {
    return (
        <HeaderStyles>
            <div className='flex-header'>
                <div className='left-nav'>
                    <nav>
                        <img src={logo} alt='Header logo'/>
                        <a href='/'>Home</a>
                        <a href='/'>Dashboard</a>
                        <a href='/'>Projects</a>
                        <a href='/'>Tasks</a>
                        <a href='/'>Reporting</a>
                        <a href='/'>Users</a>
                    </nav>
                </div>
                <div className='right-nav'>
                    <button>
                        <Zap/>
                        <p>Upgrade now</p>
                    </button>
                    <SettingsIcon/>
                    <Bell/>
                    <img src={headerAvatar} alt="Header Avatar"></img>
                </div>
                <img src={logo} alt='Header logo' className='mobile-header-logo'/>
                <MenuIcon className='MenuIcon '/>
            </div>
            <Hr/>
            <div className='flex-header bottom'>
                <div className='left-nav'>
                    <nav>
                        <a href='/'>Overview</a>
                        <a href='/'>Notifications</a>
                        <a href='/'>Analytics</a>
                        <a href='/'>Saved reports</a>
                        <a href='/'>Trade history</a>
                        <a href='/'>User reports</a>
                    </nav>
                </div>
                <div className='right-nav'>
                    <SearchIcon className="search-icon"/>
                    <input type="search" className="search-input" placeholder="Search"/>
                </div>
            </div>
        </HeaderStyles>
    )
}

export default Header;