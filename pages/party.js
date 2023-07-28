import React from "react";import Title from "../src/components/Title";
import styles from "../styles/party.module.css";
import dakota from "../assets/images/bm.jpg";
import marya from "../assets/images/bm2.jpg";

function Party() {
  console.log(marya, dakota);
  return (
    <div style={{ maxWidth: 1000 }}>
      <Title text="Bridal Party" />
      <div
        style={{
          display: "flex",
        }}
        className={styles.sections}
      >
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Bridemaids</h2>
          <div className={styles.person}>
            <img className={styles.avatar} src={marya.src} />
            <p className={styles.name}>Marya Miller</p>
            <p className={styles.job}>Maid of Honor</p>
          </div>
          <div className={styles.person}>
            <img className={styles.avatar} src={dakota.src} />
            <p className={styles.name}>Dakota Kautz</p>
            <p className={styles.job}>Bridemaid</p>
          </div>
          <div className={styles.person}>
            <img className={styles.avatar} src="/party/jaima.jpg" />
            <p className={styles.name}>Jaima Cole</p>
            <p className={styles.job}>Bridemaid</p>
          </div>
          <div className={styles.person}>
            <img className={styles.avatar} src="/party/ana.jpg" />
            <p className={styles.name}>Anna Beatty</p>
            <p className={styles.job}>Bridemaid</p>
          </div>
          <div className={styles.person}>
            <img className={styles.avatar} src="/party/rachel.jpg" />
            <p className={styles.name}>Rachel Hegdhal</p>
            <p className={styles.job}>Bridemaid</p>
          </div>

          <div className={styles.person}>
            <img className={styles.avatar} src="/party/andrea.jpg" />
            <p className={styles.name}>Andrea Troyer</p>
            <p className={styles.job}>Bridemaid</p>
          </div>
        </div>
        <div className={styles.section + " " + styles.groommen}>
          <h2 className={styles.sectionTitle}>Groomsmen</h2>
          <div className={styles.person}>
            <img className={styles.avatar} src="/party/jose.jpg" />
            <p className={styles.name}>Jose Angel</p>
            <p className={styles.job}>Bestman</p>
          </div>
          <div className={styles.person}>
            <img className={styles.avatar} src="/party/caleb.jpeg" />
            <p className={styles.name}>Caleb Despain </p>
            <p className={styles.job}>Groomsmen</p>
          </div>
          {/* <div className={styles.person}>
            <img className={styles.avatar} src="/party/branden.jpg" />
            <p className={styles.name}>Branden Dahlberg</p>
            <p className={styles.job}>Groomsmen</p>
          </div> */}
          <div className={styles.person}>
            <img className={styles.avatar} src="/party/breylon.jpg" />
            <p className={styles.name}>Breylon Miller</p>
            <p className={styles.job}>Groomsmen</p>
          </div>
          <div className={styles.person}>
            <img className={styles.avatar} src="/party/david.jpg" />
            <p className={styles.name}>David Kody</p>
            <p className={styles.job}>Groomsmen</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Party;
