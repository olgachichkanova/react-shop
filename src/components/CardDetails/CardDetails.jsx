import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const url = process.env.REACT_APP_BASE_URL;

const CardDetails = () => {
    const  { id } = useParams()
    const [cardData, setCardData] = useState({});
    const [isSelected, setSelected] = useState('');
    const isAvailable = cardData?.sizes?.some(i => i.avalible === true);

    const handleSelect = (e) => {
        if(isSelected !== e.target.innerHTML) {
            setSelected(e.target.innerHTML)
        } else {
            setSelected('')
        }
    }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${url}/items/${id}`);
      const data = await response.json();
      setCardData(data);
    };

    fetchData();
  }, []);
    return (
        <>
            {
                cardData ? 
                
                <section className="catalog-item">
            <h2 className="text-center">{cardData.title}</h2>
            <div className="row">
                <div className="col-5">
                    {cardData.images ? 
                    <img src={cardData.images[0]} className="img-fluid" alt={cardData.title} /> 
                    : null}
                </div>
                <div className="col-7">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Артикул</td>
                                <td>{cardData.sku}</td>
                            </tr>
                            <tr>
                                <td>Производитель</td>
                                <td>{cardData.manufacturer}</td>
                            </tr>
                            <tr>
                                <td>Цвет</td>
                                <td>{cardData.color}</td>
                            </tr>
                            <tr>
                                <td>Материалы</td>
                                <td>{cardData.material}</td>
                            </tr>
                            <tr>
                                <td>Сезон</td>
                                <td>{cardData.season}</td>
                            </tr>
                            <tr>
                                <td>Повод</td>
                                <td>{cardData.reason}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="text-center">
                        <p>Размеры в наличии: {cardData.sizes?.map(i => i.avalible ? <span className={`catalog-item-size ${isSelected === i.size ? 'selected' : ''}`} key={i.size}  onClick={(e) => handleSelect(e)} >{i.size}</span> : null)}</p>
                        <p>Количество: <span className="btn-group btn-group-sm pl-2">
                                <button className="btn btn-secondary">-</button>
                                <span className="btn btn-outline-primary">1</span>
                                <button className="btn btn-secondary">+</button>
                            </span>
                        </p>
                    </div>
                    {isAvailable ? <button className="\btn btn-danger btn-block btn-lg" disabled={isSelected.length === 0}>В корзину</button> : null}
                </div>
            </div>
                </section>
                :
                null
            }
        </>
        
    )
}

export default CardDetails;