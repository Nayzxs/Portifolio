import React from 'react'
import styles from './About.module.css'

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>

            <img 
                src={'/src/assets/imgAbout/gato-preto.png'} 
                alt="black cat photo" 
                className={styles.aboutImage} 
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img 
                        src={'/src/assets/imgAbout/cod.png'} 
                        alt="browser window icon "
                    />
            <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>I’am a junior frontend developer with experience in biulding websites.</p>
            </div>
            </li>

            <li className={styles.aboutItem}>
                <img src={'/src/assets/imgAbout/monit.png'} 
                alt="monitor" />
            <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>I have experience in systems development</p>
            </div>
            </li>
            </ul>
        </div>
    </section>
  )
}
