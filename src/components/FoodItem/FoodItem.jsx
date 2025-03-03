import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { useContext } from "react";
import "./FoodItem.css";
import React from "react";

const FoodItem = ({ id, name, price, description, image }) => {
  const { CartItem, addtoCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt={name} className="food-item-image" />
        {CartItem[id] ? (
          <div className="food-item-counter">
            <img
              className="remove-item-red"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="remove"
            />
            <p className="food-item-counter">{CartItem[id]}</p>
            <img
              className="add-item-green"
              onClick={() => addtoCart(id)}
              src={assets.add_icon_green}
              alt="add"
            />
          </div>
        ) : (
          <img
            className="add"
            onClick={() => addtoCart(id)}
            src={assets.add_icon_white}
            alt="add to cart"
          />
        )}
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p className="food-item-name">{name}</p>
            <div className="food-item-rating">
              <img src={assets.rating_starts} alt="rating" />
              <p className="food-item-price">4.5</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default FoodItem;
