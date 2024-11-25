import React from 'react'
import styles from "./Experience.module.css"


export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.container}>
             <div className={styles.boxes}> 
               <div className={styles.box} >
                    <div className={styles.ImageContainer}> 
                        <img src={'/src/assets/exp/iconC.png'} alt="" />
                    </div>
                        <p>C</p>
                </div>

                <div className={styles.box}>
                    <div className={styles.ImageContainer}>
                        <img src={'/src/assets/exp/iconCSS.png'} alt="" />
                    </div>
                    <p>CSS</p>
                </div>

                <div className={styles.box}> 
                    <div className={styles.ImageContainer}>
                        <img src={'/src/assets/exp/iconHTML.png'} alt="" />
                    </div>
                        <p>HTML</p>
                </div>

                <div className={styles.box}> 
                    <div className={styles.ImageContainer}>
                        <img src={'/src/assets/exp/iconJAVA.png'} alt="" />

                    </div>
                        <p>Java</p>
                </div>

                <div className={styles.box}> 
                    <div className={styles.ImageContainer}>
                        <img src={'/src/assets/exp/iconJS.png'} alt="" />

                    </div>
                        <p>JavaScript</p>
                </div>

                <div className={styles.box}> 
                    <div className={styles.ImageContainer}>
                        <img src={'/src/assets/exp/iconReact.png'} alt="" />

                    </div>
                        <p>React</p>
                </div>

            </div>

            </div>
        </div>

            {/* 

           
                */}
           
        

           
    </section>
  );
}
