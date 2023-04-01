import React from "react";

const Loader = () => {
  const myStyle = {
    width: "3rem",
    height: "3rem",
    marginTop: "5rem",
  };

  return (
    <div className="text-center">
      <div className="spinner-grow" role="status" style={myStyle}>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
