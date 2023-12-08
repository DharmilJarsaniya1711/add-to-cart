import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";

const Header = () => {
    const {cartItems} = useSelector(state=>state.cart)
    console.log(cartItems);
  return (
    <nav>
      <h2>Logo here...</h2>
      <div className="nav_right">
        <Link className="nav_home" to={"/"}>Home</Link>
        <Link to={"/cart"}>
          <FiShoppingBag />
          <p className="count">{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
