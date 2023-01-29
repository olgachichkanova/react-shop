import Card from "../Card/Card";
import "./Top.css";

const Top = ({items}) => {
    return (
        <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            <div className="row">
                {items.map(item => <Card key={item.id} item={item} />)}
            </div>
          </section>
    )
}

export default Top;