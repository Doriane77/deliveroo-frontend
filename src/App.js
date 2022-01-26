import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Components/Header/Header";
import Loading from "./Components/Loading/Loading";
import Section from "./Components/Section/Section";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Basket from "./Components/Basket/Basket";
library.add(faStar, faPlus, faMinus);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setdata] = useState({});
  const [counter, setCounter] = useState(0);
  const [selectMenu, setSelectMenu] = useState([
    // {
    //   title: "Pate à la Carbonara",
    //   quantity: 1,
    //   price: 10,
    // },
    // {
    //   title: "Lasagne au Saumon",
    //   quantity: 1,
    //   price: 13,
    // },
  ]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3200/");
    setdata(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    const showSomething = () => {
      // console.log("Ce message a été affiché après 3 secondes");
      fetchData();
    };

    setTimeout(showSomething, 1000);
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get("http://localhost:3200");
  //     setdata(response.data);
  //     console.log(response.data.restaurant);
  //   };

  //   fetchData();
  //   setIsLoading(false);
  // }, []);

  let subTotal = 0;
  selectMenu.forEach((meal) => {
    subTotal += Number(meal.price) * meal.quantity;
  });
  let livraison = 2.5;
  let Total = subTotal + 2.5;

  // let num = 0;
  // selectMenu.forEach((meal)=>{
  //   num += Number(meal.price);
  // })

  return (
    <div className="App">
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div>
          <header className="App">
            <Header />
            <div className="sousheader">
              <div className="sousimg-none">
                <img src={data.restaurant.picture} alt="picture of breakfast" />
              </div>
              <div className="titleDesc">
                <h1>{data.restaurant.name}</h1>
                <p>{data.restaurant.description}</p>
              </div>
              <div className="sousimg">
                <img src={data.restaurant.picture} alt="picture of breakfast" />
              </div>
            </div>
            <div className="section-panier">
              <Section
                counter={counter}
                setCounter={setCounter}
                data={data}
                selectMenu={selectMenu}
                setSelectMenu={setSelectMenu}
                Total={Total}

                // setTotal={setTotal}
              />

              <div className="panier">
                <Basket
                  counter={counter}
                  setCounter={setCounter}
                  selectMenu={selectMenu}
                  setSelectMenu={setSelectMenu}
                  Total={Total}
                  livraison={livraison}
                  subTotal={subTotal}
                />
              </div>
            </div>
          </header>
        </div>
      )}
    </div>
  );
}

export default App;
