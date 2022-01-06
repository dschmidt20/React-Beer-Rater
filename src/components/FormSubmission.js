import React from "react";
import { Link, useHistory } from "react-router-dom";

function FormSubmission() {
  const history = useHistory();
  return (
    <div className="cheers">
      <h1>Cheers!</h1>
      <Link onClick={() => history.goBack()}>Submit another beer!</Link>
    </div>
  );
}

export default FormSubmission;
