import { useEffect, useState } from "react";
import styles from "./index.module.css";

const renderRow = (amount) => {
  const squares = [];

  for (let i = 0; i < amount; i++) {
    squares.push(
      <div class={styles.square}>
        <p></p>
      </div>
    );
  }

  return squares;
};

function Wordle() {
  const words = ["YWAM", "JUCUM", "LOVE", "AMOR", "BRIDE", "GROOM"];
  const [selected, setSelected] = useState();
  const [rows, setRows] = useState();

  useEffect(() => {
    const selectedWord = words[Math.floor(Math.random() * words.length)];
    setSelected(selectedWord);

    const newrows = [];

    for (let i = 0; i < 6; i++) {
      newrows.push(
        <div class={styles.row}>{renderRow(selectedWord.length)}</div>
      );
    }

    setRows(newrows);
  }, [selected]);

  return (
    <div className={styles.container}>
      <h2>Wordle</h2>
      <p style={{ wordBreak: "break-all" }}>
        With words related to Madeline & Junior. Word: {selected}
      </p>
      <div className={styles.content}>{rows}</div>
      <KeyBoard />
    </div>
  );
}

const KeyBoard = () => {
  const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const row3 = ["<-", "Z", "X", "C", "V", "B", "N", "M", "ENTER"];

  return (
    <div className={styles.keyBoard}>
      <div className={styles.keyBoardRow}>
        {row1.map((key, index) => {
          return (
            <div key={index} className={styles.key}>
              {key}
            </div>
          );
        })}
      </div>
      <div className={styles.keyBoardRow}>
        {row2.map((key, index) => {
          return (
            <div key={index} className={styles.key}>
              {key}
            </div>
          );
        })}
      </div>
      <div className={styles.keyBoardRow}>
        {row3.map((key, index) => {
          return (
            <div key={index} className={styles.key}>
              {key}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Wordle;
