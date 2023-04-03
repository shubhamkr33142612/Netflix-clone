import React from "react";
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__1">
        <span>
          &copy; created by | <span className="name">Shubham Kr.</span>
        </span>
      </div>
      <div className="footer__2">
        <h4>CONTACT US | </h4>

        <div className="twitter icon">
          <TwitterIcon fontSize="large" />
          <span>@Shubham71769902 | </span>
        </div>
        <div className="gmail icon">
          <EmailTwoToneIcon fontSize="large" />
          <span>sk33142612@gmail.com | </span>
        </div>
        <div className="whatsapp icon">
          <WhatsAppIcon fontSize="large" />
          <span>(+91) 8005097458</span>
        </div>
      </div>

      
    </div>
  );
}

export default Footer;
