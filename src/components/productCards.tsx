import React from 'react'
import { FaPlus } from 'react-icons/fa';
type productProps = {
    productId:string;
    name:string;
    price:number;
    photo:string;
    stock:number;
    handler:()=>void;
  };

  const server = "haldjsalkd";
const productCards = ({productId,photo,price,name,stock,handler}:productProps) => {
    return (
        <div className="productCard">
          <img src={`${photo}`} alt={name} />
          <p>{name}</p>
          <span>{price}</span>
    
          <div>
            <button onClick={()=>handler()}><FaPlus/></button>
          </div>
        </div>
      )
}

export default productCards
