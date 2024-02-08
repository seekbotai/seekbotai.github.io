import React from "react";

export default function Header(props) {
  return (
    <header {...props}>
      <div className="header-content">
        <h1 className="logo">
          <a>
            <span>SeekBot</span>
          </a>
          <span className="slogan">Make Life More Productive</span>
        </h1>
      </div>
    </header>
  );
}
