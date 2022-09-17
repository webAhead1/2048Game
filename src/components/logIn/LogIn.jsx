import React from "react";
import "./LogIn.css";
function LogIn(props) {
  const onChange =
    (stateKey) =>
    ({ target }) =>
      props.setLoginData({ ...loginData, [stateKey]: target.value });

  const onSubmit = (event) => {
    props.setIsLoggedIn(true);
    event.preventDefault();
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        onChange={onChange("email")}
        value={props.loginData.email}
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        onChange={onChange("password")}
        value={props.loginData.password}
      />

      <button type="submit">Log in</button>
    </form>
  );
}

export default LogIn;
