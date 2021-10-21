import React from "react";

import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.main}>
      <main>
        <div>Logo</div>
        <nav className={styles.navigation}>
          <li>Home</li>
          <li>About us</li>
          <li>Showcase</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>Sign in</li>
        </nav>
      </main>
    </header>
  );
};

export default Header;
