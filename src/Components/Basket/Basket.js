import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Basket({
  selectMenu,
  Total,
  livraison,
  subTotal,
  setSelectMenu,
  counter,
  setCounter,
}) {
  const [onOff, setOnOff] = useState(true);
  return (
    <div className="Basket">
      <button
        className={
          selectMenu.length === 0 ? "basket-button" : "basket-button-on"
        }
      >
        Valider mon panier
      </button>
      <div
        className={selectMenu.length > 0 ? "basket-see-on" : "basket-see"}
        onClick={() => {
          setOnOff(!onOff);
        }}
      >
        <div className="commande">{counter}</div>
        Voir mon panier
        <div className="minTotal">{Total.toFixed(2)} €</div>
      </div>
      <div className="panier-vide">
        {selectMenu.length === 0 ? (
          <div className="basket-container-blank">Mon panier est vide</div>
        ) : (
          <div className={onOff ? "basket-container" : ""}>
            {selectMenu.map((dish, index) => {
              return (
                <div key={index} className="basket-dish">
                  <div className="quantity">
                    <button
                      className="button-quantity"
                      onClick={() => {
                        const newTab = [...selectMenu];

                        if (newTab[index].quantity === 1) {
                          newTab.splice(index, 1);
                          setCounter(counter - 1);
                        } else {
                          newTab[index].quantity--;
                        }
                        setSelectMenu(newTab);
                      }}
                    >
                      <FontAwesomeIcon icon="minus" />
                    </button>

                    <span>{dish.quantity}</span>
                    <button
                      className="button-quantity"
                      onClick={() => {
                        const newTab = [...selectMenu];

                        newTab[index].quantity++;
                        setSelectMenu(newTab);
                      }}
                    >
                      <FontAwesomeIcon icon="plus" />
                    </button>
                  </div>

                  <h2>{dish.title}</h2>
                  <p>{dish.price} €</p>
                </div>
              );
            })}

            <div className="basket-total">
              <hr />
              <div>
                <div className="sub-total">
                  <div>
                    <h2>Sous-total</h2>
                    <p>{subTotal.toFixed(2)} €</p>
                  </div>
                  <div>
                    <h2>Livraison</h2>
                    <p>{livraison} €</p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="total">
                <h3>Total</h3>
                <p>{Total.toFixed(2)} €</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Basket;
