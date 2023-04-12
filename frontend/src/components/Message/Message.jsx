import React from "react";

const Message = ({ variant, children }) => {
  return (
    <div
      variant={variant}
      className="container alert alert-danger border-0"
      role="alert"
    >
      {children}
    </div>
  );
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
