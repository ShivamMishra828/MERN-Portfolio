import React from 'react';
import "./Footer.css";
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {BsGithub, BsLinkedin, BsInstagram, BsWhatsapp} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>Hey, I am Shivam and I am a MERN Stack Developer</Typography>

        <Link to="/contact" className="footerContactBtn">
            <Typography>Contact Us</Typography>
        </Link>
      </div>

      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/ShivamMishra828" target="blank">
            <BsGithub />
        </a>
        <a href="https://www.linkedin.com/in/shivam-kumar-a04a6822b/" target="blank">
            <BsLinkedin />
        </a>
        <a href="https://www.instagram.com/shivam_mishra02/" target="blank">
            <BsInstagram />
        </a>
        <a href="https://api.whatsapp.com/send/?phone=7986198543&text&type=phone_number&app_absent=0" target="blank">
            <BsWhatsapp />
        </a>
      </div>
    </div>
  )
}

export default Footer
