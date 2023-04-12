import React from "react";
import "./FormContainer.scss";

const FormContainer = ({ children }) => {
  return (
    <div className="formContainer p-4 p-sm-4 p-md-5 p-lg-5 p-xl-5 mt-5 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
      {children}
    </div>
  );
};

export default FormContainer;
