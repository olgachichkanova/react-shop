import "./Header.css"
import logo from "../../img/header-logo.png"
import { Link, useNavigate } from "react-router-dom";
import LinkItem from "../LinkItem/LinkItem";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchField } from "../../store/slices";

const links = [
    {title: "Главная", to: "/"},
    {title: "Каталог", to: "/catalog"},
    {title: "О магазине", to: "/about"},
    {title: "Контакты", to: "/contacts"}
]

const Header = () => {
    const { search } = useSelector(state => state.catalogItems)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleInput = (e) => {
        dispatch(changeSearchField(e.target.value))
    }
    const [isSearchOpen, setOpen] = useState(false)
    const handleClick = () => {
        if(isSearchOpen && search.length !== 0) {
            navigate('/catalog')
        } else {
            setOpen(!isSearchOpen)
        }
        
    }
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
                        <div data-id="search-expander" className="header-controls-pic header-controls-search" onClick={handleClick}></div>
                        <div className="header-controls-pic header-controls-cart">
                            <div className="header-controls-cart-full">1</div>
                            <div className="header-controls-cart-menu"></div>
                        </div>
                        </div>
                        <form data-id="search-form" className={`header-controls-search-form form-inline ${isSearchOpen ? '' : 'invisible'}`}>
                            <input 
                                className="form-control" 
                                placeholder="Поиск"
                                onChange={(e) => handleInput(e)} 
                            />
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