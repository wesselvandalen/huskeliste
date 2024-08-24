import './header.css';
import logo from '../assets/huskeliste-logo-wide.png';

function Header() {
    return (
        <div className={"header-container"}>
            <div className="header-content">
                <div className="header-inner-content">
                    <div className="logo-container">
                        <a href="/">
                            <img src={logo} alt="Logo"/>
                        </a>
                    </div>
                    <div className="links">
                        <a href="/home">Hjem</a>
                        <a href="/about">Om prosjektet</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;