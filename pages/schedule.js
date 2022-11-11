import React from "react";
import Title from "../src/components/Title";
import styles from "../styles/schedule.module.css";

function Schedule() {
  return (
    <div style={{ maxWidth: 1000 }}>
      <Title text="Schedule" />
      <div>
        <div className={styles.event}>
          <p className={styles.time}>1:00 pm</p>
          <p className={styles.name}>Ceremony</p>
        </div>
        <div className={styles.event}>
          <p className={styles.time}>2:00 pm</p>
          <p className={styles.name}>Happy Hour</p>
        </div>
        <div className={styles.event}>
          <p className={styles.time}>3:00 pm</p>
          <p className={styles.name}>First Dance</p>
        </div>
        <div className={styles.event}>
          <p className={styles.time}>4:00 pm</p>
          <p className={styles.name}>Speaches</p>
        </div>
        <div className={styles.event}>
          <p className={styles.time}>5:00 pm</p>
          <p className={styles.name}>Cake Cutting</p>
        </div>
        <div className={styles.event}>
          <p className={styles.time}>6:00 pm</p>
          <p className={styles.name}>Send off</p>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
