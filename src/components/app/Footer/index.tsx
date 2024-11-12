import style from "./index.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerIcon}>
        <img src="/public/images/foxhead.png" />
      </div>
      <div className={style.footerContainer}>
        <div className={style.footerContent}>
          <p>© 2024 Animal Royale. All rights reserved.</p>
        </div>
        <div className={style.footerLinks}>
          <a href="https://animalroyale.com/assets/privacy.pdf" target="_blank">Privacy Policy</a>
          <a href="https://animalroyale.com/assets/eula.pdf" target="_blank">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
