import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-primary text-light mt-5 p-4 text-center">
        <h4>&copy; 2023 Amigo's Outlet</h4>

        <div style={{ fontSize: 20 }} className="mt-3">
          <h6>Developed by: Apurbo Deb Nath</h6>

          <i class="fa-brands fa-instagram m-2" />
          <i class="fa-brands fa-facebook m-2" />
          <i class="fa-brands fa-github m-2" />
          <i class="fa-brands fa-youtube m-2" />
          <i class="fa-brands fa-twitter m-2" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
