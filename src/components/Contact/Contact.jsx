import React from 'react'
import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
              <img src={"/src/assets/cont/gmail.png"} alt="Email icon" />
              <a href="">naecianashi@gmail.com</a>
            </li>

            <li className={styles.link}>
              <img src={"/src/assets/cont/github.png"} alt="Github icon" />
              <a href="https://github.com/Nayzxs">https://github.com/Nayzxs</a>
            </li>

            <li className={styles.link}>
              <img src={"/src/assets/cont/linkedin.png"} alt="linkedin icon" />
              <a href="https://www.linkedin.com/in/na%C3%A9cia-soares-sirqueira-19bb5a30a/">linkedin.com/Naécia Soares Sirqueira</a>
            </li>

            <li className={styles.link}>
              <img src={"/src/assets/cont/insta.png"} alt="Instagram icon" />
              <a href="https://www.instagram.com/nayzxs_/">instagram.com/Naécia Soares Sirqueira</a>
            </li>


        </ul>
        </div>
    </footer>
  );
}
