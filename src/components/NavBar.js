import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const lists = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));

  return <nav>
    {lists}
    </nav>

  }

export default NavBar;
