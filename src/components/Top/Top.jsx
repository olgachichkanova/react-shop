import Card from "../Card/Card";
import "./Top.css";

const Top = () => {
    return (
        <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            <div className="row">
                <Card />
                <Card />
                <Card />
            </div>
          </section>
    )
}

export default Top;