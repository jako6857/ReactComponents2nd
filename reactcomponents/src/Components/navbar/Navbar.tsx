import { useState } from "react";
import style from "./navbar.module.scss";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={style.navbar}>
      <div className={style.logo}>MySite</div>

      <button
        className={style.burger}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`${style.navList} ${open ? style.active : ""}`}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
