import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { catalogItemsRequest, topSalesRequest } from "../../store/slices";
import Catalog from "../Catalog/Catalog";
import Loader from "../Loader/Loader";
import Top from "../Top/Top";

const Home = () => {
    const { topSales, topSalesLoading, topSalesError } = useSelector(state => state.topSales)
    const { catalogItems, catalogItemsLoading, catalogItemsError} = useSelector(state => state.catalogItems)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(topSalesRequest())
        dispatch(catalogItemsRequest())
    }, [])

    return (
        <div>
            {topSalesLoading && <Loader />}
            <Top items={topSales} />
            {catalogItemsLoading && <Loader />}
            <Catalog items={catalogItems} />
        </div>
    )
}

export default Home;