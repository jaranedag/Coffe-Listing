import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import './index.css';
import Card from "./components/card"
import Cardprincipal from './components/card-principal';

function App() {
  const [lista, setLista] = useState([]);
  const [showAvailable, setShowAvailable] = useState(false)

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setLista(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleShowAll = () => {
    setShowAvailable(false);
  };

  const handleShowAvailable = () => {
    setShowAvailable(true);
  };

  const filteredList = showAvailable 
  ? lista.filter((cafe) => cafe.available)
  : lista;

  return (
    <div className='app-container'>
      <div className='image-container' style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${process.env.PUBLIC_URL}/bg-cafe.jpg)`,
        width: "100%",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}>
        <div className='cards-container row'>
          <div className='main-card d-flex justify-content-center mb-3'>
            <Cardprincipal 
            handleShowAll={handleShowAll}
            handleShowAvailable={handleShowAvailable}
            showAvailable={showAvailable}
            />
          </div>
          <div className='row'>
            {filteredList.map(cafe => (
              <div key={cafe.id} className='col-md-4 mb-3'>
                <Card cafe={cafe} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
