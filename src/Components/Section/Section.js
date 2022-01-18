import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import star from "./etoile.png";

function Section({ data, setdata }) {
  return (
    <div className="Section">
      <div className="categories">
        {data.categories.map((elem) => {
          if (elem.meals.length === 0) {
          } else {
            return (
              <div className="box-categories">
                <div className={elem.meals === false ? "" : "name-categories"}>
                  <h2>{elem.name}</h2>
                </div>
                <div className="box-menu">
                  {elem.meals.map((list) => {
                    return (
                      <div className="menu">
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
                            <img src={list.picture} alt="picture of the dish" />
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
