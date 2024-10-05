import React from "react";
import { useError } from "../../contexts/ErrorContext";

const ErrorPage = () => {
  const { seriousError, clearErrors } = useError();

  return (
    <div>
      <h2>Oops! Something went wrong.</h2>
      {seriousError && <p>{seriousError.status ?? "Unknown error"}</p>}

      {/* <p>{seriousError.message}</p> */}
      <button onClick={clearErrors}>Dismiss</button>
    </div>
  );
};

export default ErrorPage;
