import "./Header.css"
import logo from "../../img/header-logo.png"
import { Link } from "react-router-dom";
import LinkItem from "../LinkItem/LinkItem";

const links = [
    {title: "Главная", to: "/"},
    {title: "Каталог", to: "/catalog"},
    {title: "О магазине", to: "/about"},
    {title: "Контакты", to: "/contacts"}
]

const Header = () => {
    return (
        <header className="container">
            <div className="row">
                <div className="col">
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                    <img src={logo} alt="Bosa Noga" />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarMain">
                    <ul className="navbar-nav mr-auto">
                        {links.map(item => <LinkItem key={item.title} item={item}/>)}
                    </ul>
                    <div>
                        <div className="header-controls-pics">
                        <div data-id="search-expander" className="header-controls-pic header-controls-search"></div>
                        <div className="header-controls-pic header-controls-cart">
                            <div className="header-controls-cart-full">1</div>
                            <div className="header-controls-cart-menu"></div>
                        </div>
                        </div>
                        <form data-id="search-form" className="header-controls-search-form form-inline invisible">
                        <input className="form-control" placeholder="Поиск" />
                        </form>
                    </div>
                    </div>
                </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;