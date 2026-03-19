import '../css/cardDetail.css'

function ItemDetail({item}){
    console.log("Datos del juego en detalle:", item);
    return(
        <div className="detail-layout">
        <div className="detail-img-container">
            <img src={`${import.meta.env.BASE_URL}${item.image}`} alt={item.title} className="detail-img" />
        </div>
        <div className="detail-info">
            <p className="detail-platform">{item.platform}</p>
            <h1 className="detail-title">{item.title}</h1>
            <p className="detail-description">{item.description}</p>
            <p className="detail-price">$ {item.price}</p>
            <button className="btn-buy">Añadir al carrito</button>
        </div>
    </div>
    );
}

export default ItemDetail;