import React from "react";
import Slider from "../src/components/Slider";
import Title from "../src/components/Title";
import styles from "../styles/schedule.module.css";

function Schedule() {
  return (
    <div style={{ maxWidth: 1000 }}>
      <Title text="Schedule" />
      <div style={{ marginBottom: 60, marginTop: 30 }}>
        <div className={styles.event}>
          <p className={styles.time}>2:00 pm</p>
          <p className={styles.name}>Ceremony begins</p>
        </div>
        <div className={styles.event}>
          <p className={styles.time}>2:40 pm</p>
          <p className={styles.name}>Ceremony concludes</p>
        </div>
        <div className={styles.event}>
          <p className={styles.time}>3:00 pm</p>
          <p className={styles.name}>Light Refreshments</p>
        </div>
        <div className={styles.event}>
          <p className={styles.time}>4:00 pm</p>
          <p className={styles.name}>Toast</p>
        </div>
        <div className={styles.event}>
          <p className={styles.time}>4:15 pm</p>
          <p className={styles.name}>Cake Cutting</p>
        </div>
        <div className={styles.event}>
          <p className={styles.time}>4:20 pm</p>
          <p className={styles.name}>First Dance</p>
        </div>
        <div className={styles.event}>
          <p className={styles.time}>6:00 pm</p>
          <p className={styles.name}>Send Off</p>
        </div>
      </div>
      <p>
        <a
          href="https://www.visitharrisonburgva.com/dining-2/"
          target="_blank"
          rel="noreferrer"
        >
          <h2>Harrisonburg Dinner Options 🍽️</h2>
        </a>
      </p>
      <Slider />
    </div>
  );
}

export default Schedule;
