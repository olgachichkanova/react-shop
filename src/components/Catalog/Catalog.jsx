import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { categoryIdSelect } from "../../store/slices";
import Card from "../Card/Card";
import "./Catalog.css"

const url = process.env.REACT_APP_BASE_URL;

const Catalog = ({items}) => {
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/categories`);
        const data = await response.json();
        setCategories(data);
        console.log('loaded')
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [])

  const handleClick = (e, id) => {
    e.preventDefault();
    dispatch(categoryIdSelect(id))
  }

    return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            <ul className="catalog-categories nav justify-content-center">
              {categories.map(item => <NavLink className="nav-link" key={item.id} to={`/items/${item.id}`} onClick={(e) => handleClick(e, item.id)}>{item.title}</NavLink>)}
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