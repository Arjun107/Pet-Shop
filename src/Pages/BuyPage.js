import "./bugpage.css";
import { useEffect, useState } from "react";
import Cart from "./Cart";

const BuyPage = () => {
  const [dog, setdog] = useState([]);

  useEffect(() => {
    fetchdog();
  }, []);

  const fetchdog = async () => {
    const data = await fetch("http://localhost:3000/get");
    const res = await data.json();
    setdog(res);
  };

  const [dogg, setdogg] = useState([null]);
  const addtocart = (props) => {
    setdogg(props);
  };

  return (
    <div className="pet-cards-container">
      {dog.map((x) => (
        <div key={x._id} className="pet-cards">
          <li className="Breed">{x.Breed}</li>
          <li className="Age">Age: {x.Age}</li>
          <li className="Contact">Contact: {x.Contact}</li>
          <li className="Loction">Location: {x.Location}</li>
          <button onClick={() => addtocart(x)}></button>
        </div>
      ))}

      {dogg && <Cart detail={dogg} />}
      <Cart/>
    </div>
  );
};

export default BuyPage;
