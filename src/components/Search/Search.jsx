import { useDispatch, useSelector } from "react-redux";
import { changeSearchField } from "../../store/slices";

const Search = () => {
    const { search } = useSelector(state => state.catalogItems)
    const dispatch = useDispatch()
    const handleInput = (e) => {
        dispatch(changeSearchField(e.target.value))
    }
    return (
        <form className="catalog-search-form form-inline">
            <input 
                className="form-control" 
                placeholder="Поиск" 
                value={search}
                onChange={(e) => handleInput(e)}
            />
        </form>
    )
}

export default Search;