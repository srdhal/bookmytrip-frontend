import axios from "axios";
import { useContext, useState } from "react";
import "./login.css";
import { useAuthContext } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: null,
    password: null,
  });

  const { user,loading, error, dispatch } = useAuthContext();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const navigate=useNavigate()

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:8000/auth/login", credentials);
      console.log(res.data)
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data});
      navigate("/")
    } catch (err) {
        dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
};

  return (
    <div className="login">
      <div className="login-container">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="login-input"
        />
        <input
          type="password"
          id="password"
          onChange={handleChange}
          className="login-input"
        />
        <button  onClick={handleClick} className="login-button">
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;