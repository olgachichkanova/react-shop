const Card = ({catalog}) => {
    
    return (
        <div className="col-4">
            <div className={`card ${catalog ? 'catalog-item-card' : ''}`}>
                <img src="./img/products/sandals_myer.jpg"
                className="card-img-top img-fluid" alt="Босоножки 'MYER'" />
                <div className="card-body">
                <p className="card-text">Босоножки 'MYER'</p>
                <p className="card-text">34 000 руб.</p>
                <a href="/products/1.html" className="btn btn-outline-primary">Заказать</a>
                </div>
            </div>
        </div>
    )
}

export default Card;