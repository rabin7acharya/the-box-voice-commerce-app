import React from "react";

const Message = ({ variant, children }) => {
  return (
    <div
      variant={variant}
      class=" mt-5 container alert alert-danger border-0"
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
