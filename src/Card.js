import React from "react";

const Card = ({ data, HandleClick, card }) => {
  return  (
    <div className="card">
      {data.map((item) => {
        return (
          <div>
            <div className="title">{item.title}</div>
            <div className="price">{item.price}</div>
            <img src={item.img} alt="" onClick={() => HandleClick(item)} />
          </div>
        );
      })}
    </div>
  );
};

export default Card;
