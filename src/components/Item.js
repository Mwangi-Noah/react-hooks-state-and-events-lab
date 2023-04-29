import React, { useState } from "react";

function Item({ name, category }) {
  const [incart, setIncart] = useState(false);

  function handleAddCart() {
    return setIncart(true);
  };

  function handleRemoveCart() {
    return setIncart(false);
  };

  return (
    <li className={incart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
      className="add"
      onClick={incart ? handleRemoveCart : handleAddCart}>
      {incart ? "Remove From Cart": "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
