import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)

  function toggleInCart()
  {
    setInCart(!inCart)
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart? "remove" : "add"} onClick={toggleInCart}>
        {inCart? "Remove From Cart" : " Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
