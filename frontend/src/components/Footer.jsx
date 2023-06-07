import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return <div className="footer">Made with ❤️ by Nidup &copy; {year}</div>;
}

export default Footer;
