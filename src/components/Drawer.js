import React from "react";

function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">Cart</h2>
        <img className="cu-p" src="/img/btn-remove.svg" alt="Remove" />

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/shoes/1.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Men's Sneakers Nike Blazer Mid Suede</p>
              <b>3 999 usd</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem d-flex align-center">
            <div
              style={{ backgroundImage: "url(/img/shoes/1.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Men's Sneakers Nike Blazer Mid Suede</p>
              <b>3 999 usd</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <spa>Total</spa>
              <div></div>
              <b>6 999 usd</b>
            </li>
            <li>
              <spa>discount 5%</spa>
              <div></div>
              <b>5 999 usd</b>
            </li>
          </ul>
          <button className="greenButton">
            Checkout <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
