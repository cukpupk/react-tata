import React from "react";

const Footer = () => {
    const year = (new Date()).getFullYear().toString();
    return (
        <div className="footer">
            <p>Material UI React &copy; {year}, All Right Reserved</p>
        </div>
    )
};

export default Footer;