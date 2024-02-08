import React from "react";
import { footer } from "./data";

function antCloudFooter() {
  const children = footer.map(item => (
    <div key={item.text}>
      <a href={item.src} target="_blank">
        {item.text}
      </a>
    </div>
  ));
  return (
    <div>
      <div key="nav" className="home-footer-nav-wrapper">
        {children}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="home-layout-wrapper home-footer-wrapper">
      <div className="home-layout">
        {antCloudFooter()}
        <p key="cop" className="copy">
          Copyright ©2024 BITSKY, LLC
        </p>
      </div>
    </div>
  );
}

export default Footer;
