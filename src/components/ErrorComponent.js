import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorComponent() {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops! Something went wrong</h1>
      <h2>{err.data}</h2>
      <h2>status : {err.status}</h2>
    </div>
  );
}

export default ErrorComponent;
