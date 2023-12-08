import React from "react";
import "../styles/Cart.css";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";


const Cart = () => {

    const {cartItems,subTotal,tax,shipping,total} =useSelector(state=>state.cart)
    const dispatch = useDispatch();
    const increment = (id) =>{
      console.log(id,'jjjj')
        dispatch({
            type:"addToCart",
            payload:{id},
        })
        dispatch({type:"calculatePrice"});

    }
    const decrement = (id) =>{
        dispatch({
            type:"decrement",
            payload:id,
        })
        dispatch({type:"calculatePrice"});

    }
    const deleteHandler = (id) =>{
        dispatch({
            type:"deleteFromCart",
            payload:id,
        })
        dispatch({type:"calculatePrice"});
    }

  return (
    <div className="cart">
      <main>
      {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              imgSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              key={i.id}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1 style={{color:"#fff"}}>No Items Yet</h1>
        )}
       
      </main>
      <aside>
        <h3>Subtotal: ${subTotal}</h3>
        <h3>Shipping: ${shipping}</h3>
        <h3>Tax: ${tax}</h3>
        {console.log('shipping',shipping)}
        <h3>Total: ${total}</h3>{" "}
      </aside>
    </div>
  );
};

const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandler,
  id,
}) => (
    <div className="cartItem">
        <img className="cartItem_img" src={imgSrc} alt="Item" />
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
    </article>

    <div className="btn_div">
      <button className="btn" onClick={() => decrement(id)}>-</button>
      <p className="qty">{qty}</p>
      <button className="btn" onClick={() => increment(id)}>+</button>
    </div>

    <AiFillDelete className="dlt_icon" onClick={() => deleteHandler(id)} />
    </div>
);

export default Cart;
