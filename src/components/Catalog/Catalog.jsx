import Card from "../Card/Card";
import "./Catalog.css"

const links = [
  {
      "id": 12,
      "title": "Мужская обувь"
  },
  {
      "id": 13,
      "title": "Женская обувь"
  },
  {
      "id": 14,
      "title": "Обувь унисекс"
  },
  {
      "id": 15,
      "title": "Детская обувь"
  }
]

const Catalog = ({items}) => {
    return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            <ul className="catalog-categories nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link active" href="#">Все</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Женская обувь</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Мужская обувь</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Обувь унисекс</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Детская обувь</a>
              </li>
            </ul>
            <div className="row">
                {items.map(item => 
                  <Card 
                    key={item.id}
                    item={item}
                    catalog={true}
                  />
                )}
            </div>
            <div className="text-center">
              <button className="btn btn-outline-primary">Загрузить ещё</button>
            </div>
          </section>
    )
}

export default Catalog;