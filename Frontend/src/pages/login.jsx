import { useState } from "react";
import "../pages/login.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();


  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
    roll_no: "",
    add: "",
    role: "student",
  });
  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);

    if (
      formdata.email === "jeevanandh@gmail.com" &&
      formdata.password === "1234"
    ) {
      navigate("/show-student");
    } else {
      alert("Invalid email or password");
    }

  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          required
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;