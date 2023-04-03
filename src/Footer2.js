import React from 'react';
import EmailTwoToneIcon from "@mui/icons-material/EmailTwoTone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import './Footer2.css'

function Footer2() {
    
  return (
    <div className="footer" >
      <div className="footer__1">
      <span>
          &copy; created by | <span className="name"> Shubham Kr.</span>
        </span>
      </div>
      <div className="footer__2">
        
        
        <div className=" icon">
        <div className="twitter"><TwitterIcon fontSize="large"/></div> 
          
          <span>@Shubham71769902 | </span>
        </div>
        <div className=" icon">
        <div className="gmail"><EmailTwoToneIcon fontSize='large'/></div> 
          
          <span>sk33142612@gmail.com | </span>
        </div>
        <div className="icon">
          <div className="whatsapp"><WhatsAppIcon style={{fontSize:34}}/></div> 
          <span>(+91) 8005097458</span>
        </div>
      </div>
    </div>
  );
}

export default Footer2;
