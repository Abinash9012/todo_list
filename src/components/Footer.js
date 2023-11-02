import React from "react";

const Footer = () => {
  let footerStyle = {
    position: "absolute",
    bottom: "0px",
    width: "100%",
  };

  return (
    <footer className="bg-dark text-light" style={footerStyle}>
      <p
        className="text-center py-1"
        style={{ fontSize: "23px", fontWeight: "bold" }}
      >
        Copyright &copy; Mytodos.com
      </p>
    </footer>
  );
};

export default Footer;
