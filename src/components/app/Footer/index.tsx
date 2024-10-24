import style from "./index.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Props {
	transparentOnTop?: boolean;
}

const Footer = (props: Props) => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
        <div className={style.footerContent}>
          <p>© 2024 Animal Royale. All rights reserved.</p>
          <div className={style.socialIcons}>
            {/* 여기에 소셜 아이콘 추가 (예: FontAwesome) */}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className={style.footerLinks}>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
