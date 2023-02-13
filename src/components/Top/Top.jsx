import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { topSalesRequest } from "../../store/slices";
import Loader from "../Loader/Loader";
import Card from "../Card/Card";
import "./Top.css";

const Top = () => {
    const { topSales, topSalesLoading, topSalesError } = useSelector(state => state.topSales)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(topSalesRequest())
    }, [])
    return (
        <>
            {topSalesLoading && <Loader />}
            {
                topSalesError ? <div>Error</div> : 
                <section className="top-sales">
                    <h2 className="text-center">Хиты продаж!</h2>
                    <div className="row">
                        {topSales.map(item => <Card key={item.id} item={item} />)}
                    </div>
                </section>
            }
        </>
    )
}

export default Top;