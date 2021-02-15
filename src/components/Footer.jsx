import React from "react";
import { IoFootball } from "react-icons/io5";
import { social } from "../data";

const Footer = () => {
  const dateYear = new Date().getFullYear();

  return (
    <footer>
      <section className="section">
        <div className="logo-wrap">
          <IoFootball className="footer-logo" />
          <span className="footer-text">Footy Blog</span>
        </div>
        <p>
          © Created by Fidel Inc <span>{dateYear}</span>
        </p>
        <ul className="links">
          {social.map((link, index) => {
            return (
              <li key={index}>
                <a href={link.url} className="icons">
                  {link.icon}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </footer>
  );
};

export default Footer;
