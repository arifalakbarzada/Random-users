import React from "react";

export default function ClientCard (props){
  
    const { name, phone, card } = props;
    let isAllFetched = name&&phone&&card;
    let cardISNotFetched = name&&phone
    const style = {
      width: "18rem",
      backgroundColor: isAllFetched ? 'gray' : cardISNotFetched ? 'yellow':'white'
    }
    return (
      <div className="card" style={style}>
        <div className="card-body">
          <h5 className="card-title">Имя клиента: {name ? name : 'Anonymous'}</h5>
          {
            phone &&
               (<h6 className="card-subtitle mb-2 text-muted">Телефон: {phone}</h6>)
          }
          
          <p className="card-text">Номер карты: {card ? card :'Card is not definded'}</p>
        </div>
      </div>
    );
}
