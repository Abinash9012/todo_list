import React from "react";

const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "35vh",
    width: "100%",
  };

  return (
    <footer className="bg-dark text-light" style={footerStyle}>
      <p
        className="text-center py-1"
        style={{ fontSize: "16px", fontWeight: "400" }}
      >
        Copyright &copy; Mytodos.com
      </p>
    </footer>
  );
};

export default Footer;
