import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { categoryIdSelect, loadMoreRequest } from "../../store/slices";
import { catalogItemsRequest } from "../../store/slices";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import "./Catalog.css"

const url = process.env.REACT_APP_BASE_URL;


const Catalog = ({children}) => {
  const { catalogItems, catalogItemsLoading, catalogItemsError, search, hasMore} = useSelector(state => state.catalogItems)
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(loadMoreRequest());
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/categories`);
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    dispatch(catalogItemsRequest())
  }, [])

  const handleClick = (e, id) => {
    e.preventDefault();
    dispatch(categoryIdSelect(id))
  }

    return (
      <>
        {catalogItemsLoading && <Loader />}
        {
          catalogItemsError ? 
          <div>Error: {catalogItemsError.message}</div>
          :
          <section className="catalog">
          <h2 className="text-center">Каталог</h2>
          {children ? children : null}
          <ul className="catalog-categories nav justify-content-center">
          <NavLink className="nav-link" to={`/items`} onClick={(e) => handleClick(e, '')}>Все</NavLink>
            {categories.map(item => <NavLink 
                className="nav-link" 
                key={item.id} 
                to={`/items/${item.id}`} 
                onClick={(e) => handleClick(e, item.id)}
            >{item.title}</NavLink>)}
          </ul>
          <div className="row">
              {catalogItems.map(item => 
                <Card 
                  key={item.id}
                  item={item}
                  catalog={true}
                />
              )}
          </div>
          <div className="text-center">
            {hasMore ? <button className="btn btn-outline-primary" onClick={handleLoadMore}>Загрузить ещё</button> : null}
          </div>
          </section>
        }
      </>
        
    )
}

export default Catalog;