import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Components/Header/Header";
import Loading from "./Components/Loading/Loading";
import Section from "./Components/Section/Section";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faKey } from "@fortawesome/free-solid-svg-icons";
library.add(faStar, faKey);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setdata] = useState({});

  const fetchData = async () => {
    const response = await axios.get("http://localhost:3200/");
    console.log(response.data);
    setdata(response.data);
    setIsLoading(false);
  };
  useEffect(() => {
    const showSomething = () => {
      console.log("Ce message a été affiché après 3 secondes");
      fetchData();
    };

    setTimeout(showSomething, 4000);
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
            <Section data={data} />
          </header>
        </div>
      )}
    </div>
  );
}

export default App;
