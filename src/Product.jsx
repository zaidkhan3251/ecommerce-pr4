
import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
function Product({ id, title, image, price, rating ,desc}) {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        desc:desc,
      },
    });
  };
  return ( <div className="card">
  <img src={image} alt="" />
  <div className="card__info"> 
    <h2>{title}</h2>
    <h4>{desc}</h4>
    <div className="rating">{Array(rating).fill().map((_, i) => (<p>⭐</p>))}</div>
    <div className="basket">
    <h3>${price}</h3>
    <button onClick={addToBasket}>Basket</button>
    </div>
  </div>
</div>





    // <div className="product">
    //   <div className="product__info">
    //     <p>{title}</p>
    //     <p className="product__price">
    //       <small>$</small>
    //       <strong>{price}</strong>
    //     </p>
    //     <div className="product__rating">
    //       {Array(rating)
    //         .fill()
    //         .map((_, i) => (
    //           <p>⭐</p>
    //         ))}

    //       {/* <p>⭐</p>
    //                         <p>⭐</p> */}
    //     </div>
    //   </div>
    //   <img src={image} alt="" />
    //   <button onClick={addToBasket}>Add To Basket</button>
    // </div>
  );
}

export default Product;
