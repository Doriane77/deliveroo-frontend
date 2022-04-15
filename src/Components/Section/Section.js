import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Section({ data, selectMenu, setSelectMenu, counter, setCounter }) {
  function addProduct(list) {
    const newtab = [...selectMenu];

    let index = newtab.findIndex((e) => e.id === list.id);
    if (selectMenu.lenght === 0 || index === -1) {
      newtab.push({
        title: list.title,
        quantity: 1,
        price: list.price,
        id: list.id,
      });
      setCounter(counter + 1);
      console.log("j'ai pas trouver");
    } else {
      newtab[index].quantity = newtab[index].quantity + 1;
      console.log("j'ai trouver");
    }

    setSelectMenu(newtab);
  }
  return (
    <div className="Section">
      <div className="categories">
        {data.categories.map((elem, index) => {
          if (elem.meals.length === 0) {
          } else {
            return (
              <div key={index} className="box-categories">
                <div className={elem.meals === false ? "" : "name-categories"}>
                  <h2>{elem.name}</h2>
                </div>
                <div className="box-menu">
                  {elem.meals.map((list) => {
                    return (
                      <div
                        key={list.id}
                        className="menu"
                        onClick={() => {
                          addProduct(list, index);
                        }}
                      >
                        <div className="col1">
                          <h3>{list.title}</h3>
                          <div
                            className={list.description ? "col-des" : "none"}
                          >
                            <p>{list.description}</p>
                          </div>

                          <div className="souscol1">
                            <div className="price">{list.price} €</div>
                            <div className="popular">
                              {list.popular ? (
                                <div>
                                  <div className="star">
                                    <FontAwesomeIcon icon="star" />
                                  </div>
                                  Populaire
                                </div>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="col2">
                          <div className={list.picture ? "imgMenu" : "none"}>
                            <img src={list.picture} alt={list.title} />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Section;
