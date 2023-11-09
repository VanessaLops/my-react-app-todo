
import React from "react";
import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/auth";

export default function RouterWapper({
  // eslint-disable-next-line react/prop-types
  component: Component,
  //Rota Privada Usuário Logado
  isPrivate,
  ...props
}) {
  const { signed  } = useContext(AuthContext);

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  //logado
  if (signed && !isPrivate) {
    return <Redirect to="/home" />;
  }

  return <Route {...props} render={(props) => <Component {...props} />} />;
}