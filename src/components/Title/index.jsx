import React from "react";
import styles from "./index.module.css";
import Icon from "../../../assets/icon.svg";

function Title({ text }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src={Icon.src} style={{ width: 40 }} />
      <h2 className={styles.title}>{text}</h2>
    </div>
  );
}

export default Title;
