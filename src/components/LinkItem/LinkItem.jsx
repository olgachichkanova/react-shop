import { NavLink } from "react-router-dom";
const LinkItem = ({item}) => {
    return (
        <li className="nav-item">
            <NavLink className="nav-link" to={item.to}>{item.title}</NavLink>
        </li>
    )
}

export default LinkItem;