import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button className="bbuy" onClick={() => navigate("/buypage")}>
        Buy
      </button>
      <button className="bsell" onClick={() => navigate("/sellpage")}>
        Sell
      </button>
    </div>
  );
};

export default MainPage;
