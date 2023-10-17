import React from 'react';

const Navbar = () => {
  return (
    <nav className="custom-navbar navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <span className="custom-logo">Logo</span>
        <a className="custom-navbar-brand navbar-brand" href="/">
          Your Site Name
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
