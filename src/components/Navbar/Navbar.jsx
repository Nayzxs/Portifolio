import React, { useState} from "react";
import styles from "./Navbar.module.css"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">
        Portifolio
        </a>
        <div className={styles.menu}>
          <img 
          className={styles.menuBtn} 
          src={ 
            menuOpen
            ? ("/src/assets/nav/closeIcon.png")
            : ("/src/assets/nav/MenuIcon.png")
          } 
         
          alt="menu-botton"
          onClick={() => setMenuOpen(!menuOpen)} />

            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>

            </ul>
        </div>

    </nav>
  )
}