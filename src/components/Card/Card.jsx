import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Card/style.css";
const Card = () => {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => {
        setPostData(response.data.results);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="cardd">
      {postData.map((el) => (
        <div className="card">
          <img src={el.url} alt="img" />
          <p>{el.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
