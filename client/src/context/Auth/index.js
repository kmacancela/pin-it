import React, { useState } from "react";
import Context from "./auth";
import { useCookies } from "react-cookie";

const AuthContextWrapper = props => {
  const [cookies, setCookie] = useCookies(["token"]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loginFunction = (email, password) => {
    setLoading(true);
    setTimeout(() => {
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ email, password })
      })
      .then(r => r.json())
      .then(res => {
        console.log("res?: ", res)
        if(res.token !== undefined) {
          console.log('user found...')
          setCookie("token", res.token);
          setError("");
        } else {
          setError("Wrong credentials");
        }
      })
      setLoading(false);
    }, 1000)
  }

  return (
    <Context.Provider
      value={{
        token: cookies.token,
        error,
        loading,
        login: loginFunction
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default AuthContextWrapper;
