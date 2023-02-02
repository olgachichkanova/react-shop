import { useDispatch } from "react-redux";
import { changeSearchField } from "../../store/slices";

const Search = () => {
    const dispatch = useDispatch()
    const handleInput = (e) => {
        dispatch(changeSearchField(e.target.value))
    }
    return (
        <form className="catalog-search-form form-inline">
            <input 
                className="form-control" 
                placeholder="Поиск" 
                onChange={(e) => handleInput(e)}
            />
        </form>
    )
}

export default Search;