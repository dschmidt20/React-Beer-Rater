import React from "react";
import { Link, useHistory } from "react-router-dom";

function FormSubmission() {
  const history = useHistory();
  return (
     <>
      <img className='cheersPic' src='https://static.vecteezy.com/system/resources/previews/000/946/354/large_2x/cheers-for-beer-water-and-soda-photo.jpg'></img>
    <div className="cheers">
      <h1>Cheers!</h1>
      <Link onClick={() => history.goBack()}>Submit another beer!</Link>
    </div>
     </>
  );
}

export default FormSubmission;
