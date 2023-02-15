import "./Card.css"
import { Link } from "react-router-dom";

const Card = ({item, catalog}) => {
    return (
        <div className="col-4">
            <div className={`card ${catalog ? 'catalog-item-card' : ''}`}>
                <img src={item.images[0]}
                className="card-img-top img-fluid" alt={item.title} />
                <div className="card-body">
                    <p className="card-text">{item.title}</p>
                    <p className="card-text">{item.price} руб.</p>
                    <Link to={`/products/${item.id}`} className="btn btn-outline-primary">Заказать</Link>
                </div>
            </div>
        </div>
    )
}

export default Card;