import { useEffect, useState } from "react";

const Shop = () => {
  const [product, setproduct] = useState([]);

  useEffect(() => {
    productlist();
  }, []);

  const productlist = async () => {
    const data = await fetch("http://localhost:3000/shop");
    const res = await data.json();
    setproduct(res);
  };
  return (
    <div className="product-card">
      {product.map((x) => (
        <div key={x._id}>
          <li className="pname">Product:{x.name}</li>
          <li className="pname">UseCase:{x.use}</li>
          <li className="pprice">Price:{x.price}</li>
          <a href={x.link}> <li>{x.link}</li> </a>
        </div>
      ))}
    </div>
  );
};

export default Shop;
