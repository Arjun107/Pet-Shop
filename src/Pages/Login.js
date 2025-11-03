import { useNavigate } from "react-router-dom";
import "./LoginPage.css"; // 👈 import the CSS file

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="title">The Pet Shot</h1>
        <input
          type="text"
          placeholder="Username"
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
        />
        <button className="login-button" onClick={() => navigate("/")}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
