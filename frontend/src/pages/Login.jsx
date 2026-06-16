import { useState } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await loginUser({
      email,
      password,
    });

    localStorage.setItem(
      "token",
      response.token
    );

    alert("Login Successful");

    navigate("/dashboard");
  } catch (error) {
    console.log(error);
    alert("Invalid Credentials");
  }
};

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;